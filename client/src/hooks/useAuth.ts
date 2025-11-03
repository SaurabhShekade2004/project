import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface User {
  id: number;
  email: string;
  createdAt: Date;
}

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();

  // Check if user is already authenticated
  const { data: currentUser, isLoading } = useQuery<User>({
    queryKey: ["/api/auth/me"],
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (currentUser) {
      setIsLoggedIn(true);
      setUser(currentUser);
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, [currentUser]);

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return await apiRequest("/api/auth/logout", {
        method: "POST",
      });
    },
    onSuccess: () => {
      setIsLoggedIn(false);
      setUser(null);
      queryClient.invalidateQueries({ queryKey: ["/api/auth/me"] });
      toast({
        title: "Logged out",
        description: "You have been logged out successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Logout failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const logout = () => {
    logoutMutation.mutate();
  };

  const handleLogin = (userData: User) => {
    setIsLoggedIn(true);
    setUser(userData);
    queryClient.invalidateQueries({ queryKey: ["/api/auth/me"] });
  };

  return {
    isLoggedIn,
    user,
    email: user?.email || "",
    isLoading,
    logout,
    handleLogin,
  };
}

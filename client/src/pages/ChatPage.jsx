import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import ChatInterface from "@/components/ChatInterface";
import LoginModal from "@/components/LoginModal";

export default function ChatPage() {
  const [, setLocation] = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // todo: remove mock functionality - replace with real session check
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setIsLoggedIn(true);
      setUsername(savedUser);
    } else {
      setIsLoginModalOpen(true);
    }
  }, []);

  const handleLogin = (email) => {
    // todo: remove mock functionality - replace with real authentication
    setIsLoggedIn(true);
    setUsername(email);
    localStorage.setItem("user", email);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    // todo: remove mock functionality - replace with real logout
    setIsLoggedIn(false);
    setUsername("");
    localStorage.removeItem("user");
    setLocation("/");
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <Navbar
        isLoggedIn={isLoggedIn}
        username={username}
        onLoginClick={handleLoginClick}
        onLogoutClick={handleLogout}
      />

      <div className="flex-1 flex flex-col mt-16 md:mt-20">
        <div className="border-b border-border bg-card p-4 md:p-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold">AI Legal Assistant</h1>
            <p className="text-muted-foreground">Always here to help with your legal questions</p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <ChatInterface />
        </div>
      </div>

      <LoginModal
        open={isLoginModalOpen}
        onOpenChange={(open) => {
          if (!open && !isLoggedIn) {
            setLocation("/");
          }
          setIsLoginModalOpen(open);
        }}
        onLogin={handleLogin}
      />
    </div>
  );
}

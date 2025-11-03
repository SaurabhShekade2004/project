import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import AboutConstitution from "@/components/AboutConstitution";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";

export default function AboutConstitutionPage() {
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
    <div className="min-h-screen bg-background">
      <Navbar
        isLoggedIn={isLoggedIn}
        username={username}
        onLoginClick={handleLoginClick}
        onLogoutClick={handleLogout}
      />

      <div className="pt-16 md:pt-20">
        <AboutConstitution />
      </div>

      <Footer />

      <LoginModal
        open={isLoginModalOpen}
        onOpenChange={setIsLoginModalOpen}
        onLogin={handleLogin}
      />
    </div>
  );
}

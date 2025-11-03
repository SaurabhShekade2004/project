import { useState } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import AboutConstitution from "@/components/AboutConstitution";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import { useAuth } from "@/hooks/useAuth";

export default function AboutConstitutionPage() {
  const [, setLocation] = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isLoggedIn, email, logout, handleLogin } = useAuth();

  const handleLogoutClick = () => {
    logout();
    setLocation("/");
  };

  const handleLoginSuccess = (userData) => {
    handleLogin(userData);
    setIsLoginModalOpen(false);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        isLoggedIn={isLoggedIn}
        username={email}
        onLoginClick={handleLoginClick}
        onLogoutClick={handleLogoutClick}
      />

      <div className="pt-16 md:pt-20">
        <AboutConstitution />
      </div>

      <Footer />

      <LoginModal
        open={isLoginModalOpen}
        onOpenChange={setIsLoginModalOpen}
        onLogin={handleLoginSuccess}
      />
    </div>
  );
}

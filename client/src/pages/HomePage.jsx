import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import { useAuth } from "@/hooks/useAuth";

export default function HomePage() {
  const [, setLocation] = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isLoggedIn, email, logout, handleLogin } = useAuth();

  const handleChatClick = () => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }
    setLocation("/chat");
  };

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        isLoggedIn={isLoggedIn}
        username={email}
        onLoginClick={handleLoginClick}
        onLogoutClick={handleLogoutClick}
      />

      <Hero
        onChatClick={handleChatClick}
        onLoginClick={handleLoginClick}
        isLoggedIn={isLoggedIn}
      />

      <div className="fade-in" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease-out' }}>
        <Features />
      </div>

      <div className="fade-in" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease-out', transitionDelay: '0.2s' }}>
        <HowItWorks />
      </div>

      <div className="fade-in" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease-out', transitionDelay: '0.3s' }}>
        <AboutUs />
      </div>

      <div className="fade-in" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease-out', transitionDelay: '0.4s' }}>
        <FAQ />
      </div>

      <Footer />

      <LoginModal
        open={isLoginModalOpen}
        onOpenChange={setIsLoginModalOpen}
        onLogin={handleLoginSuccess}
      />

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}

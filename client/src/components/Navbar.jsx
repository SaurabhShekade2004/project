import { Link } from "wouter";
import { Scale, LogIn, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar({ isLoggedIn, username, onLoginClick, onLogoutClick }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all duration-300" data-testid="link-home">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              AI Legal Advisor
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/about-constitution" className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-about-constitution">
              About Constitution
            </Link>

            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-card rounded-md border border-card-border">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium" data-testid="text-username">{username}</span>
                </div>
                <Button
                  variant="outline"
                  size="default"
                  onClick={onLogoutClick}
                  data-testid="button-logout"
                  className="gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                onClick={onLoginClick}
                data-testid="button-login"
                className="gap-2"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

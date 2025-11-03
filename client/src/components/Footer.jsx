import { Link } from "wouter";
import { Scale, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">AI Legal Advisor</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted AI-powered legal assistant for instant insights and document generation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-constitution">
                  <a className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="link-footer-constitution">
                    About Constitution
                  </a>
                </Link>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="link-privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="link-terms">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Have questions? Reach out to our support team.
              </p>
              <a
                href="mailto:support@ailegaladvisor.com"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                data-testid="link-contact-email"
              >
                <Mail className="w-4 h-4" />
                support@ailegaladvisor.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 AI Legal Advisor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/Lady_Justice_statue_hero_image_79df56c8.png";

export default function Hero({ onChatClick, onLoginClick, isLoggedIn }) {
  const handleClick = () => {
    if (isLoggedIn) {
      onChatClick();
    } else {
      onLoginClick();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-chart-2/85 to-primary/90" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-background/10 backdrop-blur-md rounded-full border border-primary-foreground/20">
          <Sparkles className="w-4 h-4 text-primary-foreground" />
          <span className="text-sm text-primary-foreground font-medium">Powered by AI Technology</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Your Personal AI<br />Legal Assistant
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Get instant legal insights, document drafts, and case clarifications — powered by AI.
        </p>

        <Button
          size="lg"
          onClick={handleClick}
          className="bg-background text-primary hover:bg-background/90 shadow-2xl text-lg px-8 py-6 h-auto gap-3"
          data-testid="button-chat-with-advisor"
        >
          <MessageSquare className="w-5 h-5" />
          Chat with Advisor
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

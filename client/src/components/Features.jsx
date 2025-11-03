import { Scale, MessageSquare, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Scale,
    title: "Get Case Law Insights",
    description: "Access relevant case law and legal precedents for your situation instantly.",
  },
  {
    icon: MessageSquare,
    title: "Chat with a Virtual Legal Expert",
    description: "Ask questions and get expert legal guidance through our AI-powered chat.",
  },
  {
    icon: Shield,
    title: "Your Data Stays Confidential",
    description: "End-to-end encryption ensures your legal matters remain completely private.",
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent mb-4">
            Powerful Legal AI Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for legal assistance, powered by AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-xl cursor-pointer border-card-border"
                data-testid={`card-feature-${index}`}
              >
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

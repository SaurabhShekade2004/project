import { MessageSquare, Brain, Download } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    icon: MessageSquare,
    title: "Ask your legal question",
    description: "Type your legal query in plain language",
  },
  {
    number: "2",
    icon: Brain,
    title: "AI analyzes and responds",
    description: "Our AI processes and provides expert insights",
  },
  {
    number: "3",
    icon: Download,
    title: "Download drafts or recommendations",
    description: "Get actionable documents and advice instantly",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get legal assistance in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card
                  className="hover-elevate transition-all duration-300 hover:shadow-lg cursor-pointer border-card-border"
                  data-testid={`card-step-${index}`}
                >
                  <CardHeader className="space-y-4 text-center">
                    <div className="relative mx-auto">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-chart-2 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {step.number}
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{step.title}</CardTitle>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-chart-2 transform -translate-y-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

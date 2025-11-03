import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Download, BookOpen, Building2, Landmark, Scale } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const constitutionalBodies = [
  {
    icon: Landmark,
    title: "Supreme Court of India",
    description: "The apex judicial body and the highest court of appeal. It ensures the protection of fundamental rights and interprets the Constitution.",
  },
  {
    icon: Building2,
    title: "High Courts",
    description: "Principal civil courts with jurisdiction over states and union territories. Each state has its own High Court with appellate jurisdiction.",
  },
  {
    icon: Scale,
    title: "Election Commission",
    description: "An autonomous constitutional body responsible for conducting free and fair elections in India.",
  },
  {
    icon: BookOpen,
    title: "Union Public Service Commission",
    description: "Conducts examinations for recruitment to various civil services and posts under the Government of India.",
  },
];

export default function AboutConstitution() {
  const { toast } = useToast();

  const handleDownload = () => {
    // todo: remove mock functionality - replace with actual constitution PDF download
    toast({
      title: "Download Started",
      description: "The Constitution of India PDF is being downloaded...",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-chart-2 to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 backdrop-blur-md rounded-full border border-primary-foreground/20 mb-6">
            <BookOpen className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm text-primary-foreground font-medium">The Supreme Law of India</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Indian Constitution
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            The Constitution of India is the supreme law of India. It lays down the framework defining fundamental political principles, establishes the structure, procedures, powers, and duties of government institutions.
          </p>

          <Button
            size="lg"
            onClick={handleDownload}
            className="bg-background text-primary hover:bg-background/90 shadow-2xl gap-2"
            data-testid="button-download-constitution"
          >
            <Download className="w-5 h-5" />
            Download Constitution PDF
          </Button>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              About the Constitution
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-4">
                The Constitution of India was adopted on 26th November 1949 and came into effect on 26th January 1950. 
                It is the longest written constitution of any sovereign country in the world.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The Constitution provides for a parliamentary system of government which is federal in structure with certain unitary features. 
                It establishes the framework for the governance of India.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              Constitutional Bodies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {constitutionalBodies.map((body, index) => {
                const Icon = body.icon;
                return (
                  <Card
                    key={index}
                    className="hover-elevate transition-all duration-300 hover:shadow-xl border-card-border"
                    data-testid={`card-body-${index}`}
                  >
                    <CardHeader className="space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{body.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {body.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

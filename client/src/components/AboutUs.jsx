import { Scale, Target, Users, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To democratize legal knowledge and make expert legal assistance accessible to everyone through AI technology.",
  },
  {
    icon: Users,
    title: "Our Team",
    description: "A dedicated team of legal experts, AI researchers, and developers committed to building the future of legal tech.",
  },
  {
    icon: Shield,
    title: "Our Commitment",
    description: "We are committed to providing accurate, reliable, and confidential legal assistance powered by cutting-edge AI.",
  },
];

export default function AboutUs() {
  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
            <Scale className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About AI Legal Advisor</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trusted AI-powered legal assistant for instant insights and document generation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-base text-foreground/80 leading-relaxed mb-6">
            AI Legal Advisor is a revolutionary platform that combines artificial intelligence with legal expertise 
            to provide instant, accurate, and confidential legal assistance. We understand that navigating the legal 
            system can be complex and overwhelming, which is why we've created an AI-powered solution that makes 
            legal help accessible to everyone.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed">
            Our platform is built on a deep understanding of Indian law and powered by advanced AI technology 
            that has been trained on thousands of legal precedents, constitutional articles, and legal documents. 
            Whether you need help understanding your rights, drafting legal documents, or getting insights on case law, 
            our AI assistant is here to help 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="hover-elevate transition-all duration-300 border-card-border"
                data-testid={`card-value-${index}`}
              >
                <CardHeader className="space-y-4 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
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

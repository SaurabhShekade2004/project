import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the AI legal advice?",
    answer: "Our AI is trained on Indian legal precedents and laws, providing highly accurate insights. However, we recommend consulting a licensed attorney for critical legal matters.",
  },
  {
    question: "Is my data secure and confidential?",
    answer: "Yes, we use end-to-end encryption to ensure all your legal queries and documents remain completely private and secure.",
  },
  {
    question: "What types of legal questions can I ask?",
    answer: "You can ask about Indian constitutional law, civil matters, criminal law, property disputes, contract law, and more. Our AI covers a wide range of legal topics.",
  },
  {
    question: "Can I download the Indian Constitution?",
    answer: "Yes, you can download a PDF copy of the Indian Constitution from the About Constitution page.",
  },
  {
    question: "Do I need to create an account?",
    answer: "Yes, you need to create an account to access the AI Legal Assistant chat feature. This helps us maintain security and provide personalized assistance.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about AI Legal Advisor
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-card-border rounded-lg px-6 hover-elevate transition-all duration-300"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

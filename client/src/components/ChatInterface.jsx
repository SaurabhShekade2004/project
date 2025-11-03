import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Scale, User } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI Legal Assistant. How can I help you with your legal questions today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages([...messages, userMessage]);
    setInput("");
    setIsLoading(true);

    // todo: remove mock functionality - replace with real Python script API call
    setTimeout(() => {
      const assistantMessage = {
        role: "assistant",
        content: `Thank you for your question. I'm analyzing your legal query and will provide detailed insights based on Indian law and legal precedents.

**Next Steps:**
1. Review the relevant legal provisions outlined below
2. Consult with a licensed attorney for case-specific advice
3. Gather supporting documents related to your query

**Relevant Articles/Laws:**
- Article 14 of the Indian Constitution (Right to Equality)
- Article 21 (Protection of Life and Personal Liberty)
- Code of Civil Procedure, 1908
- Indian Contract Act, 1872`,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            data-testid={`message-${message.role}-${index}`}
          >
            {message.role === "assistant" && (
              <Avatar className="w-10 h-10 bg-primary">
                <AvatarFallback>
                  <Scale className="w-5 h-5 text-primary-foreground" />
                </AvatarFallback>
              </Avatar>
            )}

            <div className={`flex-1 max-w-3xl ${message.role === "user" ? "flex justify-end" : ""}`}>
              {message.role === "user" ? (
                <div className="bg-primary text-primary-foreground rounded-2xl px-6 py-4 inline-block">
                  <p className="font-bold text-lg mb-1">Your Query:</p>
                  <p className="text-base">{message.content}</p>
                </div>
              ) : (
                <Card className="bg-card border-card-border p-6">
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    {message.content.split('\n').map((line, i) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return (
                          <h3 key={i} className="font-bold text-lg text-foreground mt-4 mb-2">
                            {line.replace(/\*\*/g, '')}
                          </h3>
                        );
                      }
                      if (line.startsWith('- ')) {
                        return (
                          <li key={i} className="text-muted-foreground ml-4">
                            {line.substring(2)}
                          </li>
                        );
                      }
                      if (line.match(/^\d+\./)) {
                        return (
                          <li key={i} className="text-muted-foreground ml-4">
                            {line.substring(line.indexOf('.') + 1).trim()}
                          </li>
                        );
                      }
                      return line ? (
                        <p key={i} className="text-foreground mb-2">
                          {line}
                        </p>
                      ) : null;
                    })}
                  </div>
                </Card>
              )}
            </div>

            {message.role === "user" && (
              <Avatar className="w-10 h-10 bg-chart-2">
                <AvatarFallback>
                  <User className="w-5 h-5 text-white" />
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-4">
            <Avatar className="w-10 h-10 bg-primary">
              <AvatarFallback>
                <Scale className="w-5 h-5 text-primary-foreground" />
              </AvatarFallback>
            </Avatar>
            <Card className="bg-card border-card-border p-6">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </Card>
          </div>
        )}
      </div>

      <div className="border-t border-border bg-card p-4 md:p-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-3">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask your legal question..."
              className="resize-none min-h-[60px] max-h-[200px]"
              data-testid="input-chat-message"
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              size="icon"
              className="h-[60px] w-[60px] flex-shrink-0"
              data-testid="button-send-message"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Press Enter to send, Shift + Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { MessageCircle, Send, X, Sparkles } from "lucide-react";

interface Msg { role: "bot" | "user"; text: string; }

export const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hi there! 🌸 I'm Anita's little assistant. Ask me anything about her work!" },
  ]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((m) => [...m, { role: "user", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "Thanks for your message! ✨ Anita will get back to you soon — feel free to use the contact form too." },
      ]);
    }, 700);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center text-primary-foreground transition-smooth hover:scale-110 animate-float"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed bottom-28 right-6 z-50 w-[90vw] max-w-sm h-[480px] glass-card flex flex-col overflow-hidden animate-scale-in">
          <div className="p-4 bg-gradient-primary text-primary-foreground flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-sm">Anita's Assistant</p>
              <p className="text-xs opacity-80">Online ✨</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`px-4 py-2.5 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-gradient-primary text-primary-foreground rounded-br-sm"
                      : "bg-pastel-lavender/60 text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-white/40 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2.5 rounded-full bg-white/70 text-sm outline-none focus:ring-2 focus:ring-primary/40 transition-smooth"
            />
            <button
              onClick={send}
              aria-label="Send"
              className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground transition-smooth hover:scale-110"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

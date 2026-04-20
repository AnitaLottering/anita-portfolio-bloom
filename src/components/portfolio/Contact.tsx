import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent ✨", description: "Thanks for reaching out — I'll reply soon!" });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Say hi</p>
          <h2 className="text-4xl md:text-5xl mb-4">Let's <span className="text-gradient">connect</span></h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a project in mind or just want to chat? My inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2 space-y-4 animate-fade-in-up">
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-pastel-pink flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-foreground/70" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">hello@anita.dev</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-pastel-lavender flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-foreground/70" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">South Africa 🌸</p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="md:col-span-3 glass-card p-8 space-y-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input required placeholder="Your name" className="rounded-2xl bg-white/60 border-white/60 h-12 focus-visible:ring-primary/40 focus-visible:shadow-soft transition-smooth" />
              <Input required type="email" placeholder="Your email" className="rounded-2xl bg-white/60 border-white/60 h-12 focus-visible:ring-primary/40 focus-visible:shadow-soft transition-smooth" />
            </div>
            <Input required placeholder="Subject" className="rounded-2xl bg-white/60 border-white/60 h-12 focus-visible:ring-primary/40 focus-visible:shadow-soft transition-smooth" />
            <Textarea required placeholder="Tell me about your project..." rows={5} className="rounded-2xl bg-white/60 border-white/60 focus-visible:ring-primary/40 focus-visible:shadow-soft transition-smooth resize-none" />
            <Button type="submit" size="lg" className="w-full rounded-2xl bg-gradient-primary hover:shadow-hover transition-smooth border-0 text-primary-foreground">
              <Send className="w-4 h-4 mr-2" /> Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

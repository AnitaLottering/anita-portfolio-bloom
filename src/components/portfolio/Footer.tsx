import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="px-6 pb-10 pt-6">
      <div className="max-w-5xl mx-auto glass-card p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Anita © {new Date().getFullYear()}
        </p>
        <div className="flex gap-3">
          {[Linkedin, Github, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full bg-white/60 hover:bg-pastel-pink flex items-center justify-center transition-smooth hover:scale-110"
            >
              <Icon className="w-4 h-4 text-foreground/70" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

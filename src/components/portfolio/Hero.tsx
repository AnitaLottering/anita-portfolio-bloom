import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Sparkles, Mail } from "lucide-react";
import profileImg from "@/assets/anita-profile.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-6"
    >
      {/* Floating blobs */}
      <div className="blob bg-pastel-pink w-[400px] h-[400px] -top-20 -left-20 animate-float-slow" />
      <div className="blob bg-pastel-lavender w-[500px] h-[500px] top-1/3 -right-32 animate-float-slow" style={{ animationDelay: "2s" }} />
      <div className="blob bg-pastel-blue w-[350px] h-[350px] bottom-0 left-1/3 animate-float-slow" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            Software Developer · Cape Town 🌸
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-gradient">Sibahle Josline Anita Lottering</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            A dedicated fourth-year ICT student at Cape Peninsula University of Technology,
            passionate about building clean, thoughtful web & mobile experiences with
            React, Angular, and React Native.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-primary hover:shadow-hover transition-smooth border-0 text-primary-foreground"
            >
              <a href="/Anita-Lottering-CV.pdf" download>
                <Download className="w-4 h-4 mr-2" /> Download CV
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-white/60 backdrop-blur-md border-white/60 hover:bg-white/80 transition-smooth">
              <a href="https://www.linkedin.com/in/anita-lottering-95989a347/" target="_blank" rel="noreferrer">
                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-white/60 backdrop-blur-md border-white/60 hover:bg-white/80 transition-smooth">
              <a href="https://github.com/AnitaLottering" target="_blank" rel="noreferrer">
                <Github className="w-4 h-4 mr-2" /> GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-white/60 backdrop-blur-md border-white/60 hover:bg-white/80 transition-smooth">
              <a href="mailto:anitalottering16@gmail.com">
                <Mail className="w-4 h-4 mr-2" /> Email
              </a>
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center animate-scale-in">
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-50 animate-pulse-soft" />
          <div className="relative w-72 h-80 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden border-8 border-white/70 shadow-glow">
            <img
              src={profileImg}
              alt="Sibahle Josline Anita Lottering portrait"
              className="w-full h-full object-cover"
              width={768}
              height={896}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

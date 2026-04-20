import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Sparkles } from "lucide-react";
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
            Welcome to my little corner
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-gradient">Anita</span>
            <br />
            <span className="text-3xl md:text-4xl font-medium text-muted-foreground">
              a creative developer ✨
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            I craft soft, thoughtful digital experiences — blending code,
            design, and a love for everything beautifully made.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" className="rounded-full bg-gradient-primary hover:shadow-hover transition-smooth border-0 text-primary-foreground">
              <Download className="w-4 h-4 mr-2" /> Download CV
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-white/60 backdrop-blur-md border-white/60 hover:bg-white/80 transition-smooth">
              <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-white/60 backdrop-blur-md border-white/60 hover:bg-white/80 transition-smooth">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center animate-scale-in">
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-50 animate-pulse-soft" />
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/70 shadow-glow animate-float">
            <img
              src={profileImg}
              alt="Anita portrait"
              className="w-full h-full object-cover"
              width={768}
              height={768}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import heroImg from "@/assets/hero-workspace.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 px-6 md:px-12 bg-background"
    >
      {/* Decorative pink accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-primary/10 hidden md:block" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-foreground">
              Portfolio · 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground">
            Welcome to <br />
            My <span className="text-primary">Portfolio</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            I'm <span className="font-semibold text-foreground">Anita Lottering</span> — a software developer crafting bold, modern web &amp; mobile experiences with React, Angular and React Native.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              asChild
              size="lg"
              className="rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-smooth border-0 px-8 h-12 font-semibold"
            >
              <a href="#projects">
                Explore Projects <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-2 border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background transition-smooth px-8 h-12 font-semibold"
            >
              <a href="/Anita-Lottering-CV.pdf" download>
                <Download className="w-4 h-4 mr-2" /> Download CV
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-5 pt-4">
            <a
              href="https://github.com/AnitaLottering"
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:text-primary transition-smooth"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anita-lottering-95989a347/"
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:text-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="w-8 h-px bg-border" />
            <a
              href="mailto:anitalottering16@gmail.com"
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
            >
              anitalottering16@gmail.com
            </a>
          </div>
        </div>

        <div className="relative animate-scale-in">
          {/* Pink offset accent block */}
          <div className="absolute -top-4 -right-4 w-full h-full bg-primary hidden md:block" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-foreground hidden md:block" />
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-foreground group">
            <img
              src={heroImg}
              alt="Modern developer workspace with bold pink and black design"
              className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              width={1080}
              height={1350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

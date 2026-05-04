import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Sparkles, Mail } from "lucide-react";
import profileImg from "@/assets/anita-profile.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-6"
    >
      {/* Subtle background blobs */}
      <div className="blob bg-pastel-pink w-[320px] h-[320px] -top-24 -left-24" />
      <div className="blob bg-pastel-lavender w-[380px] h-[380px] top-1/3 -right-28" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs text-muted-foreground">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Software Developer · Cape Town
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
            Hi, I'm <br className="hidden sm:block" />
            <span className="text-gradient">Anita Lottering</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
            Fourth-year ICT student at Cape Peninsula University of Technology,
            building clean, thoughtful web &amp; mobile experiences with React, Angular and React Native.
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

        <div className="relative flex justify-center md:justify-end animate-scale-in">
          <div className="absolute inset-8 bg-gradient-primary rounded-3xl blur-3xl opacity-30" />
          <div className="relative w-72 h-80 md:w-[22rem] md:h-[26rem] rounded-3xl overflow-hidden border-[6px] border-white shadow-card">
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

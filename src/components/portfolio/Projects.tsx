import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  { img: p1, title: "Bloom Web App", desc: "A soft, minimal web platform built with React & Tailwind.", tag: "Web" },
  { img: p2, title: "Petal Mobile UI", desc: "Mobile-first interface design with pastel theming.", tag: "Mobile" },
  { img: p3, title: "Aurora Multimedia", desc: "Visual identity and motion design exploration.", tag: "Design" },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Work</p>
          <h2 className="text-4xl md:text-5xl">Selected <span className="text-gradient">Projects</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group glass-card overflow-hidden transition-smooth hover:-translate-y-2 hover:shadow-hover animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs bg-white/80 backdrop-blur-md text-foreground/70">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-pastel-pink flex items-center justify-center flex-shrink-0 transition-smooth group-hover:rotate-45 group-hover:bg-primary/40">
                    <ArrowUpRight className="w-4 h-4 text-foreground/70" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

import { GraduationCap } from "lucide-react";

const items = [
  { year: "2021", title: "Matric", desc: "Completed senior secondary education.", color: "bg-pastel-pink" },
  { year: "2022", title: "Higher Certificate", desc: "Foundational studies in IT & business.", color: "bg-pastel-lavender" },
  { year: "2025", title: "Diploma in ICT — Applications Development", desc: "Hands-on training in modern software engineering.", color: "bg-pastel-blue" },
  { year: "2026", title: "Advanced Diploma in Multimedia Applications", desc: "Currently exploring design, media, and creative tech.", color: "bg-pastel-peach" },
];

export const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14 animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Journey</p>
          <h2 className="text-4xl md:text-5xl">My <span className="text-gradient">Education</span></h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pastel-pink via-pastel-lavender to-pastel-blue" />

          <div className="space-y-10">
            {items.map((it, i) => (
              <div
                key={it.year}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start animate-fade-in-up ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Dot */}
                <div className={`absolute left-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full ${it.color} border-4 border-background shadow-soft`} />

                <div className="md:w-1/2 pl-16 md:pl-0 md:px-8">
                  <div className="glass-card p-6 transition-smooth hover:-translate-y-1 hover:shadow-hover">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 ${it.color} rounded-xl flex items-center justify-center`}>
                        <GraduationCap className="w-5 h-5 text-foreground/70" />
                      </div>
                      <span className="text-sm font-semibold text-primary">{it.year}</span>
                    </div>
                    <h3 className="text-lg mb-2">{it.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

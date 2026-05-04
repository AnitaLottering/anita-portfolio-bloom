import { Heart, Palette, Code2 } from "lucide-react";

const traits = [
  { icon: Code2, title: "Developer", desc: "I build clean, thoughtful applications with care.", color: "bg-pastel-blue" },
  { icon: Palette, title: "Designer", desc: "I love pastel palettes, soft motion and gentle UX.", color: "bg-pastel-pink" },
  { icon: Heart, title: "Creator", desc: "Multimedia is my happy place — design meets code.", color: "bg-pastel-lavender" },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 animate-fade-in">
          <p className="section-eyebrow">About me</p>
          <h2 className="section-heading mb-4">A little about <span className="text-gradient">who I am</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm a multimedia &amp; ICT student with a love for soft design and clean code.
            I believe technology should feel calm, kind, and beautifully made.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {traits.map((t, i) => (
            <div
              key={t.title}
              className="glass-card p-8 transition-smooth hover:-translate-y-2 hover:shadow-hover animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`w-14 h-14 ${t.color} rounded-2xl flex items-center justify-center mb-5`}>
                <t.icon className="w-7 h-7 text-foreground/70" />
              </div>
              <h3 className="text-xl mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

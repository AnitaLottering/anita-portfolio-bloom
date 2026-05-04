const skillGroups = [
  {
    title: "Development",
    color: "bg-pastel-pink",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 80 },
      { name: "React Native", level: 72 },
      { name: "Angular", level: 70 },
      { name: "Java", level: 75 },
      { name: "Python", level: 70 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "Design",
    color: "bg-pastel-lavender",
    skills: [
      { name: "UI/UX Design", level: 80 },
      { name: "Figma", level: 85 },
      { name: "Multimedia", level: 78 },
    ],
  },
  {
    title: "Tools",
    color: "bg-pastel-blue",
    badges: ["Git", "GitHub", "GitLab", "VS Code", "IntelliJ IDEA", "Firebase", "Redux", "Node.js", "Tailwind"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 animate-fade-in">
          <p className="section-eyebrow">Toolbox</p>
          <h2 className="section-heading">Skills &amp; <span className="text-gradient">Expertise</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.slice(0, 2).map((group, gi) => (
            <div key={group.title} className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: `${gi * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full ${group.color}`} />
                <h3 className="text-xl">{group.title}</h3>
              </div>
              <div className="space-y-5">
                {group.skills?.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-foreground/80">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full ${group.color} rounded-full transition-smooth`}
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="glass-card p-8 md:col-span-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-3 h-3 rounded-full ${skillGroups[2].color}`} />
              <h3 className="text-xl">{skillGroups[2].title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skillGroups[2].badges?.map((b, i) => {
                const colors = ["bg-pastel-pink", "bg-pastel-lavender", "bg-pastel-blue", "bg-pastel-peach", "bg-pastel-mint", "bg-pastel-beige"];
                return (
                  <span
                    key={b}
                    className={`px-5 py-2 rounded-full text-sm font-medium ${colors[i % colors.length]} text-foreground/70 transition-smooth hover:scale-105 cursor-default`}
                  >
                    {b}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

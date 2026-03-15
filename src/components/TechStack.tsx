import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    label: "Backend",
    techs: ["Python (Frappe)", "REST APIs", "Custom Frappe Apps", "MariaDB", "SQL"],
  },
  {
    label: "ERPNext",
    techs: ["Workflow Configuration", "Custom Fields", "Server Scripts", "Doctype Design"],
  },
  {
    label: "AI & LLM",
    techs: ["LangChain", "OpenAI", "Gemini", "Perplexity", "Prompt Engineering", "AI Agents", "RAG Pipelines"],
  },
  {
    label: "Automation",
    techs: ["n8n", "Pabbly", "Google Apps Script", "Webhooks", "API Integrations"],
  },
  {
    label: "Frontend",
    techs: ["React", "JavaScript", "HTML/CSS", "Frappe React SDK", "TypeScript"],
  },
  {
    label: "Infrastructure",
    techs: ["Linux Servers", "Bench CLI", "Git", "Claude Code"],
  },
];

const TechStack = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-tight">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3">// TECH STACK</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Tools of the <span className="text-gradient">trade</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <ScrollReveal key={cat.label} delay={index * 100} direction="scale">
              <div className="p-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm h-full">
                <h3 className="text-sm font-mono text-primary mb-4">{cat.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-md border border-border bg-card/50 text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

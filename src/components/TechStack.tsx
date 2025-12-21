const technologies = [
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "HTML/CSS", category: "Languages" },
  { name: "Frappe Framework", category: "Frameworks" },
  { name: "ERPNext", category: "Platforms" },
  { name: "n8n", category: "Automation" },
  { name: "Pabbly", category: "Automation" },
  { name: "LangChain", category: "AI" },
  { name: "OpenAI API", category: "AI" },
  { name: "Gemini", category: "AI" },
  { name: "RAG Pipelines", category: "AI" },
  { name: "WhatsApp API", category: "Integration" },
  { name: "Telegram API", category: "Integration" },
  { name: "Google Apps Script", category: "Automation" },
  { name: "Meta API", category: "Integration" },
];

const TechStack = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-tight">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-primary mb-3">// TECH STACK</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Tools of the <span className="text-gradient">trade</span>
          </h2>
        </div>

        {/* Tech grid - animated marquee effect */}
        <div className="relative overflow-hidden py-8">
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="px-5 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm text-foreground font-medium transition-all duration-300 hover:border-primary/50 hover:bg-card cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core capabilities */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <p className="text-4xl font-mono text-primary mb-2">{"<>"}</p>
            <h3 className="text-lg font-semibold text-foreground mb-2">Clean Code</h3>
            <p className="text-sm text-muted-foreground">
              Maintainable, documented, and built to scale
            </p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-mono text-primary mb-2">⚡</p>
            <h3 className="text-lg font-semibold text-foreground mb-2">Fast Delivery</h3>
            <p className="text-sm text-muted-foreground">
              From concept to production in weeks, not months
            </p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-mono text-primary mb-2">∞</p>
            <h3 className="text-lg font-semibold text-foreground mb-2">Continuous Learning</h3>
            <p className="text-sm text-muted-foreground">
              Always exploring new tools and methodologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

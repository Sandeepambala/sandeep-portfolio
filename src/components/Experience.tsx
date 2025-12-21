import { Building2, Award } from "lucide-react";

const experiences = [
  {
    company: "FinByz Tech Pvt Ltd",
    role: "Software Developer",
    period: "Aug 2025 – Present",
    location: "Ahmedabad, Gujarat (Remote)",
    description: [
      "Designing AI automation workflows using n8n to streamline internal processes and enhance client delivery",
      "Developing AI-Powered Social Media Management Tool integrating Frappe with LangChain and LLMs",
      "Implementing LLM-based automation for multi-platform social engagement",
    ],
    current: true,
  },
  {
    company: "Valuepitch",
    role: "Solution Engineer | Client Solutions",
    period: "Apr 2025 – Aug 2025",
    location: "India",
    description: [
      "Led end-to-end product lifecycle: discovery, roadmap planning, stakeholder demos, and delivery coordination",
      "Managed cross-functional teams including automation engineers, UI/UX designers, and deployment specialists",
      "Promoted for exceptional problem-solving across technical and client-facing challenges",
    ],
    current: false,
  },
  {
    company: "Valuepitch",
    role: "Product Manager | ERPNext & Automation",
    period: "Jun 2023 – Apr 2025",
    location: "India",
    description: [
      "Built automation workflows using n8n, Pabbly, and Google Apps Script",
      "Integrated third-party APIs (Meta, WhatsApp) and customized ERPNext modules",
      "Trained 170+ team members in AI-powered data workflows and productivity tools",
    ],
    current: false,
    achievement: "Best Employee of the Month",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-tight">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-mono text-primary mb-3">// EXPERIENCE</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Building serious
            <br />
            <span className="text-gradient">systems since 2023</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${exp.current ? 'bg-primary border-primary' : 'bg-background border-border'}`}>
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                  )}
                </div>

                {/* Content */}
                <div className="group p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Building2 className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{exp.company}</span>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    </div>
                    <div className="text-sm text-muted-foreground text-left md:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.achievement && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                      <Award className="w-4 h-4" />
                      <span>{exp.achievement}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { Building2, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    company: "FinByz Tech Pvt Ltd",
    role: "Software Developer – ERPNext / Frappe / AI Automation",
    period: "Aug 2025 – Present",
    location: "Ahmedabad, Gujarat (Remote)",
    description: [
      "Building ERPNext and Frappe-based enterprise applications for 5+ clients including workflow automation, dashboards, and operational integrations",
      "Engineered custom ERPNext front-end interfaces using React and Frappe React SDK",
      "Integrated Large Language Models (LLMs) into ERP systems enabling AI-driven automation",
      "Developed automation pipelines using n8n to connect ERPNext with external APIs and messaging platforms",
      "Created operational dashboards and workspaces improving visibility for business teams",
    ],
    current: true,
    achievement: "Best AI & Client Success Champion (Feb 2026) — within 6 months of joining",
  },
  {
    company: "Valuepitch",
    role: "Product Manager & ERPNext Solution Engineer",
    period: "Oct 2024 – Mar 2025",
    location: "India",
    description: [
      "Led ERP product discovery, roadmap planning, and solution demonstrations for automation-driven enterprise platforms",
      "Managed cross-functional teams across development, automation, and UI/UX initiatives",
      "Built automation pipelines using n8n, Pabbly, and Google Apps Script",
      "Integrated Meta and WhatsApp APIs to automate CRM communication and lead engagement",
    ],
    current: false,
    achievement: "Promoted for exceptional problem-solving across technical and client-facing challenges",
  },
  {
    company: "Valuepitch",
    role: "AI Workflow Specialist & Trainer",
    period: "Jun 2023 – Sep 2024",
    location: "India",
    description: [
      "Trained 170+ professionals on AI-powered workflow automation and productivity tools",
      "Built internal dashboards and monitoring systems to improve operational tracking and reporting efficiency",
    ],
    current: false,
    achievement: "Best Employee of the Month",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-tight">
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-sm font-mono text-primary mb-3">// EXPERIENCE</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Building serious
              <br />
              <span className="text-gradient">systems since 2023</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="left">
                <div className="relative pl-8 md:pl-20">
                  <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${exp.current ? 'bg-primary border-primary' : 'bg-background border-border'}`}>
                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />}
                  </div>
                  <div className="group p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Building2 className="w-5 h-5 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{exp.company}</span>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">Current</span>
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

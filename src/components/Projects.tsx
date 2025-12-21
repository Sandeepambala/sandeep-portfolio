import { ArrowUpRight, Mic, Share2, MessageSquare, Users } from "lucide-react";

const projects = [
  {
    icon: Mic,
    title: "GTM Monitoring System",
    subtitle: "AI-Powered Sales Call Intelligence",
    description:
      "Built a custom ERPNext module where agents receive leads and initiate calls directly from the system. Integrated laptop microphone for real-time recording with automatic categorization. AI feedback pipeline processes recordings and generates conversational insights delivered instantly to agents and managers.",
    impact: "Improved decision-making and faster feedback loops across sales teams",
    technologies: ["ERPNext", "n8n", "AI/LLM", "Voice Processing"],
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: Share2,
    title: "AI Social Media Manager",
    subtitle: "Frappe + LangChain + RAG",
    description:
      "End-to-end automation of content creation, scheduling, and engagement across LinkedIn, X/Twitter, and Reddit. Implemented RAG pipeline with company knowledge base for brand-consistent content. Built AI agents for content generation, auto-scheduling, and intelligent commenting.",
    impact: "Automated multi-platform social presence with on-brand messaging",
    technologies: ["Frappe", "LangChain", "OpenAI", "RAG"],
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "Telegram Sales Approval",
    subtitle: "Real-time ERPNext Integration",
    description:
      "Integrated ERPNext with Telegram using Bot APIs and n8n for real-time workflow automation. Auto-generates detailed order summaries sent to approvers with inline Approve/Reject buttons. Bidirectional sync updates document workflow automatically.",
    impact: "Eliminated approval delays and accelerated order processing cycles",
    technologies: ["ERPNext", "Telegram API", "n8n", "Webhooks"],
    accent: "from-violet-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Vendor Onboarding Portal",
    subtitle: "Self-Service Registration System",
    description:
      "Streamlined vendor registration with OTP-based email authentication, dynamic form rendering based on vendor class, real-time application status tracking, and stage-wise permission controls. Built using Frappe Framework with custom doctypes.",
    impact: "Improved onboarding transparency and reduced communication overhead",
    technologies: ["Frappe", "Python", "Custom Doctypes", "Web Pages"],
    accent: "from-orange-500 to-amber-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-tight">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-mono text-primary mb-3">// PROJECTS</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Systems that solve
            <br />
            <span className="text-gradient">real problems</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            Not just features — these are complete solutions that eliminate manual work, 
            streamline processes, and let businesses focus on growth.
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative p-6 md:p-8 rounded-lg border border-border bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br opacity-90 flex items-center justify-center text-foreground" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}>
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.accent} flex items-center justify-center`}>
                      <project.icon className="w-7 h-7 text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <p className="text-sm text-primary font-medium mb-4">
                    ↳ {project.impact}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono text-muted-foreground bg-muted/50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

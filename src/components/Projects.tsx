import { ArrowUpRight, Mic, Share2, Users, GraduationCap, Mail, Cpu, Search, Bot } from "lucide-react";

const projects = [
  {
    icon: GraduationCap,
    title: "Shanthipath Yoga Learning Platform",
    subtitle: "End-to-End Online Learning & Booking System",
    description:
      "Built a complete yoga education platform with 24/7 live Zoom class integration and automated link handling. Customized Frappe LMS with retreat booking, secure payment processing, and cloud recording embeds — eliminating server storage overhead while providing seamless user access.",
    impact: "Enabled scalable online yoga education with zero manual intervention",
    technologies: ["React.js", "Frappe LMS", "Python", "Zoom API", "Payment Gateway"],
    accent: "from-primary to-accent",
  },
  {
    icon: Mic,
    title: "GTM Monitoring & Cold Call System",
    subtitle: "AI-Powered Lead Research & Script Generation",
    description:
      "Automated the entire cold calling workflow — leads flow from research team to callers with AI-generated scripts powered by Perplexity LLM. Real-time call recording with automatic categorization delivers instant insights to agents and managers.",
    impact: "Reduced call prep time by 70% and improved pitch quality across sales teams",
    technologies: ["ERPNext", "Perplexity API", "n8n", "Voice Processing", "AI/LLM"],
    accent: "from-primary to-accent",
  },
  {
    icon: Share2,
    title: "AI Social Media Manager",
    subtitle: "ERP-Integrated Content Automation",
    description:
      "Direct publishing from ERP to Twitter, LinkedIn, and Reddit with AI-generated content and images. Uses company knowledge base as context for brand-consistent messaging. Automated scheduling handles multi-platform presence without manual effort.",
    impact: "Eliminated hours of weekly content creation and scheduling work",
    technologies: ["Frappe", "LangChain", "OpenAI", "RAG", "Social APIs"],
    accent: "from-primary to-accent",
  },
  {
    icon: Cpu,
    title: "ERPNext + LangChain Integration",
    subtitle: "AI-Powered Task Execution Inside ERP",
    description:
      "Deep integration of LangChain within ERPNext server for intelligent automation. Capabilities include image generation, content creation, automated follow-up emails, and lead research via Perplexity — all with prompts and API keys managed securely inside ERP.",
    impact: "Brought AI capabilities directly into business workflows without external tools",
    technologies: ["ERPNext", "LangChain", "Perplexity", "Python", "AI Agents"],
    accent: "from-primary to-accent",
  },
  {
    icon: Mail,
    title: "Email Classification & SEO Automation",
    subtitle: "Intelligent Email Processing & Content Generation",
    description:
      "Automated email classification with custom rules per client. Enquiry emails auto-create opportunities in ERP and notify relevant team members. Integrated SEO content and FAQ generation with intelligent web scraping for blogs, webpages, and product descriptions.",
    impact: "Zero missed leads and consistent SEO content without manual research",
    technologies: ["ERPNext", "AI Classification", "Web Scraping", "SEO Tools", "n8n"],
    accent: "from-primary to-accent",
  },
  {
    icon: Users,
    title: "Vendor Onboarding Portal",
    subtitle: "Self-Service Registration System",
    description:
      "Streamlined vendor registration with OTP-based email authentication, dynamic form rendering based on vendor class, real-time application status tracking, and stage-wise permission controls. Built using Frappe Framework with custom doctypes.",
    impact: "Improved onboarding transparency and reduced communication overhead",
    technologies: ["Frappe", "Python", "Custom Doctypes", "Web Pages"],
    accent: "from-primary to-accent",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-tight">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-mono text-primary mb-3">// AUTOMATION PROJECTS</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Systems that eliminate
            <br />
            <span className="text-gradient">manual work</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            Not just features — complete business automation solutions that streamline operations, 
            reduce errors, and let teams focus on growth instead of repetitive tasks.
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
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <project.icon className="w-7 h-7 text-primary-foreground" />
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

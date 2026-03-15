import { ArrowUpRight, Mic, Share2, Users, GraduationCap, Mail, Cpu, Bot, Container, MessageSquare } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    icon: GraduationCap,
    title: "Shanthipath Yoga Learning Platform",
    subtitle: "End-to-End Online Learning & Booking System",
    description:
      "Built a complete yoga education platform with 24/7 live Zoom class integration and automated link handling. Customized Frappe LMS with retreat booking, secure payment processing, and cloud recording embeds — eliminating server storage overhead.",
    impact: "Enabled scalable online yoga education with zero manual intervention",
    technologies: ["React.js", "Frappe LMS", "Python", "Zoom API", "Payment Gateway"],
  },
  {
    icon: GraduationCap,
    title: "Learning Management System",
    subtitle: "Complete LMS on Frappe Framework",
    description:
      "Built a full LMS platform supporting course enrollment, assessments, scoring systems, learning streak tracking, and certification workflows. Includes learner dashboards, performance analytics, and automated certificate generation for 100+ learners.",
    impact: "End-to-end education delivery with automated progress tracking and certification",
    technologies: ["ERPNext", "Frappe", "Python", "Custom Doctypes"],
    link: "Demo Video",
  },
  {
    icon: Container,
    title: "ICD Logistics Platform",
    subtitle: "Container Yard Management System",
    description:
      "Implemented an ERPNext-based logistics platform for an Inland Container Depot. Built a React-based container yard map for real-time visualization. Integrated AI voice agents and WhatsApp payment reminder systems to automate customer communication.",
    impact: "Real-time container tracking with automated billing follow-ups",
    technologies: ["ERPNext", "React", "AI Voice Agents", "WhatsApp API", "Frappe React SDK"],
  },
  {
    icon: Mic,
    title: "GTM Monitoring & Cold Call System",
    subtitle: "AI-Powered Lead Research & Script Generation",
    description:
      "Automated the entire cold calling workflow — leads flow from research team to callers with AI-generated scripts powered by Perplexity LLM. Real-time call recording with automatic categorization delivers instant insights.",
    impact: "Reduced call prep time by 70% and improved pitch quality across sales teams",
    technologies: ["ERPNext", "Perplexity API", "n8n", "Voice Processing", "AI/LLM"],
  },
  {
    icon: Share2,
    title: "AI Social Media Manager",
    subtitle: "ERP-Integrated Content Automation",
    description:
      "Direct publishing from ERP to Twitter, LinkedIn, and Reddit with AI-generated content and images. Uses company knowledge base as context for brand-consistent messaging with automated scheduling.",
    impact: "Eliminated hours of weekly content creation and scheduling work",
    technologies: ["Frappe", "LangChain", "OpenAI", "RAG", "Social APIs"],
  },
  {
    icon: Cpu,
    title: "AI Integration App for ERPNext",
    subtitle: "Reusable Frappe + LangChain Framework",
    description:
      "Created a reusable Frappe application enabling seamless LLM integration into ERPNext. Built an AI agent framework supporting multiple providers for research automation, content generation, image generation, and audio processing.",
    impact: "Brought AI capabilities directly into ERP workflows without external tools",
    technologies: ["ERPNext", "LangChain", "Perplexity", "Python", "AI Agents"],
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot SaaS Platform",
    subtitle: "Website AI Assistant with CRM Integration",
    description:
      "Built a SaaS chatbot platform where websites integrate an AI assistant using a single JavaScript snippet. Captures visitor conversations, timelines, and analytics directly into ERPNext. Auto-generates CRM leads and opportunities.",
    impact: "Scalable SaaS architecture enabling deployment across multiple websites",
    technologies: ["Frappe", "AI/LLM", "JavaScript", "ERPNext CRM", "Analytics"],
  },
  {
    icon: Mail,
    title: "Email Classification & SEO Automation",
    subtitle: "Intelligent Email Processing & Content Generation",
    description:
      "Automated email classification with custom rules per client. Enquiry emails auto-create opportunities in ERP. Integrated SEO content and FAQ generation with intelligent web scraping for blogs and product descriptions.",
    impact: "Zero missed leads and consistent SEO content without manual research",
    technologies: ["ERPNext", "AI Classification", "Web Scraping", "SEO Tools", "n8n"],
  },
  {
    icon: Users,
    title: "Vendor Onboarding Portal",
    subtitle: "Self-Service Registration System",
    description:
      "Streamlined vendor registration with OTP-based email authentication, dynamic form rendering based on vendor class, real-time status tracking, and stage-wise permission controls.",
    impact: "Improved onboarding transparency and reduced communication overhead",
    technologies: ["Frappe", "Python", "Custom Doctypes", "Web Pages"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-tight">
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-sm font-mono text-primary mb-3">// PROJECTS</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Systems that eliminate
              <br />
              <span className="text-gradient">manual work</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground text-lg">
              Complete business automation solutions — from AI-powered SaaS platforms to enterprise logistics systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 80}>
              <div className="group relative p-6 md:p-8 rounded-lg border border-border bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <project.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
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
                    <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                    <p className="text-sm text-primary font-medium mb-4">↳ {project.impact}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-mono text-muted-foreground bg-muted/50 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

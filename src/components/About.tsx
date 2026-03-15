import { Zap, Bot, Database, Workflow } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const capabilities = [
  {
    icon: Bot,
    title: "AI Agents & LLM Integration",
    description: "Building intelligent AI agents with LangChain inside ERPNext for research automation, content generation, and workflow processing.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Designing end-to-end automation using n8n, Pabbly, and custom scripts to eliminate manual processes across operations.",
  },
  {
    icon: Database,
    title: "ERPNext & Frappe Solutions",
    description: "Custom ERPNext modules, Frappe applications, React frontends with Frappe SDK — tailored to specific business requirements.",
  },
  {
    icon: Zap,
    title: "System Integration & APIs",
    description: "Seamless integration via REST APIs, webhooks — WhatsApp, Meta, Telegram, Zoom, payment gateways, and more.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-tight">
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-sm font-mono text-primary mb-3">// ABOUT</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Turning complexity into
              <br />
              <span className="text-gradient">automated simplicity</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
              I specialize in solving real-world business problems using open-source tools like Frappe, ERPNext, and n8n.
              From AI-powered cold calling systems to complete SaaS platforms — I build automation that acts as a true painkiller for operations teams.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <ScrollReveal key={capability.title} delay={index * 100}>
              <div className="group p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/50 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    <capability.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{capability.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats */}
        <ScrollReveal delay={200}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border">
            {[
              { value: "2+", label: "Years Experience" },
              { value: "170+", label: "Professionals Trained" },
              { value: "10+", label: "Projects Delivered" },
              { value: "5+", label: "Enterprise Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-semibold text-gradient mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;

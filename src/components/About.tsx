import { Zap, Bot, Database, Workflow } from "lucide-react";

const capabilities = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Building intelligent AI agents that automate complex workflows and deliver real business outcomes.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Designing end-to-end automation using n8n, Pabbly, and custom scripts to eliminate manual processes.",
  },
  {
    icon: Database,
    title: "ERP Solutions",
    description: "Custom ERPNext modules and Frappe applications tailored to specific business requirements.",
  },
  {
    icon: Zap,
    title: "System Integration",
    description: "Seamless integration of disparate systems via APIs — WhatsApp, Telegram, social platforms, and more.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-tight">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-mono text-primary mb-3">// ABOUT</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Turning complexity into
            <br />
            <span className="text-gradient">automated simplicity</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Many time-consuming business tasks can be automated with the right approach. 
            I focus on solving real-world problems using open-source tools like Frappe and n8n, 
            creating AI agents that act as true painkillers — not just features.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group p-6 rounded-lg border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                  <capability.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border">
          <div className="text-center">
            <p className="text-4xl font-semibold text-gradient mb-2">2+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-semibold text-gradient mb-2">170+</p>
            <p className="text-sm text-muted-foreground">Team Members Trained</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-semibold text-gradient mb-2">10+</p>
            <p className="text-sm text-muted-foreground">Projects Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-semibold text-gradient mb-2">100%</p>
            <p className="text-sm text-muted-foreground">Remote Ready</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

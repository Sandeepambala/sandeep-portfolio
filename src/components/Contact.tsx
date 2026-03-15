import { useState } from "react";
import { Mail, Linkedin, Phone, MapPin, ArrowUpRight, Send, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form data
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service || "Business Automation"}`);
    const body = encodeURIComponent(
      `Hi Sandeep,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:sandeepambala31@gmail.com?subject=${subject}&body=${body}`, "_self");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />

      <div className="container-tight relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3">// LET'S CONNECT</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
              Ready to automate your
              <br />
              <span className="text-gradient">business operations?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Tell me about your project. I'll get back to you within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Form — unique terminal-style */}
          <ScrollReveal delay={100} className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/80">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="ml-3 text-xs font-mono text-muted-foreground">contact_form.sh</span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-mono text-primary mb-2">
                      <span className="text-muted-foreground">$</span> your_name
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-primary mb-2">
                      <span className="text-muted-foreground">$</span> email
                    </label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-mono text-primary mb-2">
                    <span className="text-muted-foreground">$</span> service_needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="AI Automation">AI Automation & Agents</option>
                    <option value="ERPNext Implementation">ERPNext Implementation</option>
                    <option value="Workflow Automation">Workflow Automation (n8n)</option>
                    <option value="Custom Frappe App">Custom Frappe Application</option>
                    <option value="API Integration">API & System Integration</option>
                    <option value="Consulting">General Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-mono text-primary mb-2">
                    <span className="text-muted-foreground">$</span> message
                  </label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    placeholder="Tell me about your project, challenges, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={250} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Direct email CTA */}
              <a
                href="mailto:sandeepambala31@gmail.com"
                className="group flex items-center gap-4 p-5 rounded-xl border border-primary/30 bg-primary/5 transition-all duration-300 hover:bg-primary/10 hover:border-primary/50"
              >
                <div className="p-3 rounded-lg bg-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-foreground font-semibold">Email me directly</p>
                  <p className="text-sm text-primary truncate">sandeepambala31@gmail.com</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Other contacts */}
              {[
                { icon: Phone, label: "Phone", value: "+91 9515187680", href: "tel:+919515187680" },
                { icon: Linkedin, label: "LinkedIn", value: "sandeep-ambala", href: "https://linkedin.com/in/sandeep-ambala" },
                { icon: MapPin, label: "Location", value: "Hyderabad, India" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/30 transition-all duration-300 hover:border-primary/30">
                  <div className="p-2.5 rounded-lg bg-card border border-border">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Portfolio link */}
              <a
                href="https://sandeepambala.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm text-muted-foreground hover:text-primary transition-colors py-3 font-mono"
              >
                sandeepambala.lovable.app
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;

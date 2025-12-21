import { Mail, Linkedin, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <p className="text-sm font-mono text-primary mb-3">// CONTACT</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Let's build something
            <br />
            <span className="text-gradient">together</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Looking for an automation specialist or ERP engineer? 
            Let's discuss how I can help streamline your business processes.
          </p>

          {/* CTA Button */}
          <a
            href="mailto:sandeepambala31@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 mb-16"
          >
            <Mail className="w-5 h-5" />
            sandeepambala31@gmail.com
            <ArrowUpRight className="w-5 h-5" />
          </a>

          {/* Contact details */}
          <div className="grid sm:grid-cols-3 gap-8 pt-12 border-t border-border">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 rounded-lg bg-card border border-border">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="text-foreground font-medium">+91 9515187680</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <a
                href="https://linkedin.com/in/sandeep-ambala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <div>
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/sandeep-ambala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  sandeep-ambala
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 rounded-lg bg-card border border-border">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-foreground font-medium">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

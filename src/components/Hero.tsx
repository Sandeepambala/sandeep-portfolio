import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Spotlight } from "@/components/ui/spotlight";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Hero">
      {/* WebGL Shader Background */}
      <div className="absolute inset-0 z-0">
        <WebGLShader />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(142 71% 45%)" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 min-h-screen px-6 max-w-6xl mx-auto">
        {/* Left content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 pt-24 lg:pt-0">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm text-muted-foreground">Available for Consulting & Projects</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 max-w-4xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="block text-foreground">From Manual Chaos</span>
            <span className="block text-gradient mt-2">To Automated Systems</span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            I help growing businesses eliminate manual work and scale operations through intelligent automation, AI workflows, and custom ERP solutions.
          </p>

          <p className="text-primary font-medium text-sm sm:text-base mb-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            Business Automation Specialist · ERPNext & AI Integration Expert
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#contact">
              <LiquidButton size="lg" className="text-primary font-semibold text-base">
                Let's Talk Automation
              </LiquidButton>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card/50 backdrop-blur-sm text-foreground font-medium rounded-lg transition-all duration-300 hover:border-primary/50 hover:bg-card"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 sm:gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { href: "mailto:sandeepambala31@gmail.com", icon: Mail, label: "Email" },
              { href: "https://linkedin.com/in/sandeep-ambala", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/sandeepambala", icon: Github, label: "GitHub" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-3 rounded-full border border-border bg-card/30 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-card/50"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Profile Image Placeholder */}
        <div className="hidden lg:flex flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="relative">
            <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-2xl border-2 border-primary/30 overflow-hidden bg-card/50 backdrop-blur-sm glow">
              {/* Replace src with your actual photo */}
              <img
                src="sandeepambala.png"
                alt="Sandeep Ambala - Business Automation Specialist"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-3 -right-3 w-72 h-72 xl:w-80 xl:h-80 rounded-2xl border border-primary/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-mono text-sm font-bold">SA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;

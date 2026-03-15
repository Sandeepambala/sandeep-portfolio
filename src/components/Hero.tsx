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
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(142 71% 45%)"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs sm:text-sm text-muted-foreground">Available for Consulting & Projects</span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 max-w-4xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="block text-foreground">From Manual Chaos</span>
          <span className="block text-gradient mt-2">To Automated Systems</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          I help growing businesses eliminate manual work and scale operations through intelligent automation, AI workflows, and custom ERP solutions.
        </p>

        {/* Tagline */}
        <p className="text-primary font-medium text-sm sm:text-base mb-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
          Business Automation Specialist · ERPNext & AI Integration Expert
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a href="#projects">
            <LiquidButton size="lg" className="text-primary font-semibold text-base">
              See How I Automate
              <ArrowDown className="w-4 h-4" />
            </LiquidButton>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card/50 backdrop-blur-sm text-foreground font-medium rounded-lg transition-all duration-300 hover:border-primary/50 hover:bg-card"
          >
            Let's Talk Automation
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 sm:gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="mailto:sandeepambala31@gmail.com"
            className="p-3 rounded-full border border-border bg-card/30 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-card/50"
            aria-label="Email Sandeep Ambala"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/sandeep-ambala"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border bg-card/30 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-card/50"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full border border-border bg-card/30 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-card/50"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
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

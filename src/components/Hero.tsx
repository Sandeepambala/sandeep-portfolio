import { ArrowDown, Mail, Linkedin, Github, Zap } from "lucide-react";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Spotlight } from "@/components/ui/spotlight";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Hero">
      {/* WebGL Shader Background */}
      <div className="absolute inset-0 z-0">
        <WebGLShader />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* AI Grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(142 71% 45%)" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-16 min-h-screen px-6 max-w-6xl mx-auto">
        {/* Left content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 pt-28 lg:pt-0">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-xs sm:text-sm font-medium text-primary">Available for Consulting & Projects</span>
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-foreground">Turn Manual Work</span>
            <span className="block text-gradient mt-2">Into Intelligent Automation</span>
          </h1>

          {/* Subtitle */}
          <p
            className="max-w-xl text-base sm:text-lg md:text-xl text-muted-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Helping businesses eliminate manual work using AI automation and ERP systems.
          </p>

          {/* Credibility stat */}
          <div
            className="inline-flex items-center gap-2 mb-10 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">50+ automation workflows built</span>
            <span className="text-muted-foreground text-sm">· Business Automation Specialist</span>
          </div>

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
          <div className="flex items-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
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

        {/* Right: Profile Card with floating animation */}
        <div className="hidden lg:flex flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="relative animate-float">
            {/* Main card */}
            <div className="w-72 h-80 xl:w-80 xl:h-[22rem] rounded-2xl border border-primary/20 overflow-hidden bg-card/60 backdrop-blur-xl shadow-[0_0_60px_-15px_hsl(var(--primary)/0.3)]">
              <div className="w-full h-[70%] bg-muted/30 relative overflow-hidden">
                {/* Replace src with your actual photo */}
                <img
                  src="/placeholder.svg"
                  alt="Sandeep Ambala - Business Automation Specialist"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-foreground font-semibold text-lg">Sandeep Ambala</p>
                <p className="text-primary text-sm font-medium">Automation Specialist</p>
                <p className="text-muted-foreground text-xs mt-1">AI · ERPNext · Workflows</p>
              </div>
            </div>

            {/* Decorative border offset */}
            <div className="absolute -bottom-3 -right-3 w-72 h-80 xl:w-80 xl:h-[22rem] rounded-2xl border border-primary/10 -z-10" />

            {/* Initials badge */}
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
              <span className="text-primary font-mono text-sm font-bold">SA</span>
            </div>

            {/* Status dot */}
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
              <Zap className="w-3 h-3 text-primary-foreground" />
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

import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { SplineScene } from "@/components/ui/spline-scene";
import { Spotlight } from "@/components/ui/spotlight";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(142 76% 36%)"
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />

      {/* Main content card */}
      <Card className="relative w-full h-screen bg-card/20 border-0 overflow-hidden">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left content */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 w-fit animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="block text-foreground">Sandeep Ambala</span>
              <span className="block text-gradient mt-2">AI & Automation Engineer</span>
            </h1>

            {/* Subheading */}
            <p className="max-w-xl text-lg md:text-xl text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              I build intelligent systems that eliminate manual work. From custom ERP solutions to AI-powered automation workflows — turning complex business requirements into clean, scalable solutions.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                View My Work
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card/50 backdrop-blur-sm text-foreground font-medium rounded-lg transition-all duration-300 hover:border-primary/50 hover:bg-card"
              >
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <a
                href="mailto:sandeepambala31@gmail.com"
                className="p-3 rounded-full border border-border bg-card/30 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-card/50"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sandeep-ambala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-card/30 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-card/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full border border-border bg-card/30 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-card/50"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right content - 3D Robot */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-0">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;

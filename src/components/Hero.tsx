import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import { SplineScene } from "@/components/ui/spline-scene";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(142 76% 36%)"
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />

      {/* 3D Robot - Full screen background, centered */}
      <div className="absolute inset-0 z-0">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent z-[1]" />

      {/* Main content - Centered over robot */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Main heading - Robot style */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
          >
            <span className="block text-foreground font-mono uppercase" style={{ 
              textShadow: "0 0 40px hsl(142 76% 36% / 0.5), 0 0 80px hsl(142 76% 36% / 0.3)" 
            }}>
              Sandeep
            </span>
            <span className="block text-gradient font-mono uppercase mt-2" style={{ 
              textShadow: "0 0 60px hsl(142 76% 36% / 0.6)" 
            }}>
              Ambala
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary font-mono tracking-wider mb-6"
          >
            AI & AUTOMATION ENGINEER
          </motion.p>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10"
          >
            Building intelligent systems that eliminate manual work. From custom ERP solutions to AI-powered automation workflows.
          </motion.p>

          {/* CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border bg-card/50 backdrop-blur-sm text-foreground font-medium rounded-lg transition-all duration-300 hover:border-primary/50 hover:bg-card"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-6"
          >
            <a
              href="mailto:sandeepambala31@gmail.com"
              className="p-3 rounded-full border border-border bg-card/30 backdrop-blur-sm text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-card/50"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sandeep-ambala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/30 backdrop-blur-sm text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-card/50"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full border border-border bg-card/30 backdrop-blur-sm text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-card/50"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;

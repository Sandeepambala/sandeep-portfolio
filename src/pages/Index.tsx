import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sandeep Ambala | AI & Automation Engineer</title>
        <meta 
          name="description" 
          content="AI/Automation specialist and ERP solution engineer. Building intelligent workflows, custom ERP modules, and AI-powered tools using Frappe Framework and n8n." 
        />
        <meta name="keywords" content="AI automation, ERP developer, ERPNext, Frappe Framework, n8n, workflow automation, AI engineer, Python developer" />
        <meta property="og:title" content="Sandeep Ambala | AI & Automation Engineer" />
        <meta property="og:description" content="Building intelligent systems that eliminate manual work. From custom ERP solutions to AI-powered automation workflows." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sandeep Ambala | AI & Automation Engineer" />
        <meta name="twitter:description" content="Building intelligent systems that eliminate manual work." />
        <link rel="canonical" href="https://sandeepambala.dev" />
      </Helmet>
      
      {/* Custom cursor */}
      <CursorFollower />
      
      <div className="min-h-screen bg-background text-foreground cursor-none">
        <Navigation />
        <main>
          <Hero />
          <ScrollAnimationWrapper>
            <About />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={0.1}>
            <Projects />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={0.1}>
            <Experience />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={0.1}>
            <TechStack />
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={0.1}>
            <Contact />
          </ScrollAnimationWrapper>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

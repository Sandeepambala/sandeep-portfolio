import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sandeep Ambala | Business Automation Specialist – AI, ERPNext & Workflow Automation</title>
        <meta
          name="description"
          content="Business automation specialist helping companies eliminate manual work with AI agents, ERPNext solutions, and workflow automation using Frappe, LangChain, and n8n."
        />
        <meta name="keywords" content="AI automation, business automation, ERPNext developer, Frappe Framework, n8n workflow automation, AI agents, LangChain, automation consulting, ERP solutions, Python developer" />
        <meta property="og:title" content="Sandeep Ambala | Business Automation Specialist" />
        <meta property="og:description" content="From manual chaos to automated systems. AI workflows, ERPNext solutions, and business automation." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sandeep Ambala | Business Automation Specialist" />
        <meta name="twitter:description" content="Helping businesses eliminate manual work with AI & automation." />
        <link rel="canonical" href="https://sandeepambala.lovable.app" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <TechStack />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

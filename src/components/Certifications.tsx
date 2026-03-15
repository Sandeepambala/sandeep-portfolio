import { Award, Trophy, GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const certifications = [
  { title: "HackWithHyderabad", issuer: "HackWithIndia – Certificate of Participation" },
  { title: "Prompt Engineering for ChatGPT", issuer: "Great Learning" },
  { title: "Python Programming Workshop", issuer: "Be10x" },
];

const achievements = [
  {
    icon: Trophy,
    text: "Best AI & Client Success Champion at FinByz Tech — within 6 months of joining (Feb 2026)",
  },
  {
    icon: Award,
    text: "Best Employee of the Month at Valuepitch for high-impact automation delivery",
  },
  {
    icon: Award,
    text: "Promoted to ERPNext Solution Engineer at Valuepitch for solving complex technical & client-facing challenges",
  },
];

const education = [
  { course: "B.Com (Computer Applications)", institution: "Bhavitha Degree College, Bellampalli", year: "2022–2025" },
  { course: "Inter (CEC)", institution: "MIMS Junior College, Mancherial", year: "2019–2021" },
  { course: "SSC (10th)", institution: "Yuva Sangatan High School, Bellampalli", year: "2018–2019" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-tight">
        {/* Achievements */}
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-sm font-mono text-primary mb-3">// ACHIEVEMENTS & CERTIFICATIONS</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Recognition &<br />
              <span className="text-gradient">credentials</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Achievements */}
          <ScrollReveal delay={100}>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card/30 transition-all duration-300 hover:border-primary/30"
                  >
                    <a.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{a.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal delay={200}>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border border-border bg-card/30 transition-all duration-300 hover:border-primary/30"
                  >
                    <p className="font-medium text-foreground">{cert.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Education */}
        <ScrollReveal delay={300}>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border border-border bg-card/30 transition-all duration-300 hover:border-primary/30"
                >
                  <p className="font-medium text-foreground text-sm">{edu.course}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                  <p className="text-xs font-mono text-primary mt-2">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Certifications;

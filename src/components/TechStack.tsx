import ScrollReveal from "./ScrollReveal";

const techIcons = [
  { name: "Frappe", icon: "https://frappe.io/files/frappe.png", url: "https://frappe.io" },
  { name: "ERPNext", icon: "https://erpnext.com/files/erpnext-logo.png", url: "https://erpnext.com" },
  { name: "Raven", icon: "/raven.jpg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "MariaDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Bench", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gnubash.svg", invert: true },
  { name: "n8n", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/n8n.svg", invert: true },
  { name: "LangChain", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/langchain.svg", invert: true },
  { name: "OpenAI", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg", invert: true },
  { name: "Claude", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg", invert: true },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Lovable", icon: "https://lovable.dev/favicon.ico" },
  { name: "Cursor", icon: "https://cursor.sh/favicon.ico" },
  { name: "Claude", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg", invert: true },
  { name: "LangChain", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/langchain.svg", invert: true },
  { name: "MariaDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg", invert: true },
  { name: "Google Apps Script", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
];

const row1 = techIcons.slice(0, 10);
const row2 = techIcons.slice(10);

const IconCard = ({ name, icon, invert }: { name: string; icon: string; invert?: boolean }) => (
  <div className="group flex-shrink-0 flex flex-col items-center gap-2">
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] group-hover:bg-card/80 group-hover:scale-110">
      <img
        src={icon}
        alt={name}
        className={`w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-500 group-hover:scale-110 ${invert ? "invert brightness-0 dark:invert dark:brightness-200 opacity-70 group-hover:opacity-100" : ""
          }`}
        loading="lazy"
      />
    </div>
    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300 font-medium whitespace-nowrap">
      {name}
    </span>
  </div>
);

const TechStack = () => {
  return (
    <section className="section-padding bg-card/30 overflow-hidden">
      <div className="container-tight">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-mono text-primary mb-3">// TECH STACK</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Tools I Work <span className="text-gradient">With</span>
            </h2>
          </div>
        </ScrollReveal>
      </div>

      <div className="space-y-8">
        {/* Row 1: Left to Right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex gap-8 animate-marquee-left">
            {[...row1, ...row1, ...row1].map((tech, i) => (
              <IconCard key={`r1-${i}`} {...tech} />
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex gap-8 animate-marquee-right">
            {[...row2, ...row2, ...row2].map((tech, i) => (
              <IconCard key={`r2-${i}`} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

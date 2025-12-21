import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="container-tight flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-semibold text-foreground">
          SA<span className="text-primary">.</span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground link-underline"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:sandeepambala31@gmail.com"
              className="inline-flex items-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border">
          <ul className="container-tight py-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg text-foreground py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="mailto:sandeepambala31@gmail.com"
                className="inline-flex items-center px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded-lg"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;

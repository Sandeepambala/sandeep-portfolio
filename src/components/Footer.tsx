const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear}</span>
            <span className="text-foreground font-medium">Sandeep Ambala</span>
            <span>·</span>
            <span>Built with precision</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-mono text-primary">{"// "}</span>
            Available for new opportunities
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

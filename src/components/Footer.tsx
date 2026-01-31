const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading text-lg font-bold text-gradient-neon">
            JGA
          </p>
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Jhon Gennes Alain. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <span>Data Analyst</span>
            <span className="text-primary">•</span>
            <span>AI Automation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

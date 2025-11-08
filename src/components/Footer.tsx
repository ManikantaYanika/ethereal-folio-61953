import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="container mx-auto">
        {/* Large CTA */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Let's Connect
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a
              href="mailto:yanikamanikanta24@gmail.com"
              className="text-lg md:text-2xl text-muted-foreground hover:text-foreground transition-colors underline-animation"
            >
              Email
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://www.linkedin.com/in/manikanta-yanika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-2xl text-muted-foreground hover:text-foreground transition-colors underline-animation"
            >
              LinkedIn
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://github.com/ManikantaYanika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-2xl text-muted-foreground hover:text-foreground transition-colors underline-animation"
            >
              GitHub
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://instagram.com/mani_2k4_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-2xl text-muted-foreground hover:text-foreground transition-colors underline-animation"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Manikanta Yanika. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-animation"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

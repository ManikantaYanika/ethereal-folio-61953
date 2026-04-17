import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const NAME_LINE_1 = 'MANIKANTA YANIKA';
const NAME_LINE_2 = 'AI Product Builder & LLM Systems Developer';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setButtonPosition({
      x: Math.max(-10, Math.min(10, x * 0.3)),
      y: Math.max(-10, Math.min(10, y * 0.3)),
    });
  };

  const handleMouseLeave = () => setButtonPosition({ x: 0, y: 0 });

  // Render line letter-by-letter for stagger reveal
  const renderLine = (text: string, baseDelay: number) => (
    <span className="inline-block">
      {text.split('').map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: '0.6em' }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: baseDelay + i * 0.025,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 grain-texture overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Soft hero orb behind avatar */}
      <motion.div
        aria-hidden
        className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'var(--gradient-orb)' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="container mx-auto text-center relative">
        {/* Profile Photo with rotating gradient ring */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.85 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <motion.div
              aria-hidden
              className="absolute -inset-1.5 rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg, hsl(var(--foreground) / 0.4), hsl(var(--foreground) / 0.05), hsl(var(--foreground) / 0.4))',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative rounded-full p-[2px] bg-background">
              <Avatar className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] shadow-[var(--shadow-glow)]">
                <AvatarImage src="/hero-profile.jpg" alt="Manikanta Yanika" />
                <AvatarFallback className="text-2xl md:text-3xl lg:text-4xl font-display">
                  MY
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 12 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex justify-center mb-8"
        >
          <span className="eyebrow">Portfolio 2025</span>
        </motion.div>

        <h1 className="font-display fluid-display font-bold mb-8">
          {renderLine(NAME_LINE_1, 0.4)}
          <br />
          <span className="block mt-2 text-foreground/85">
            {renderLine(NAME_LINE_2, 0.4 + NAME_LINE_1.length * 0.025 + 0.1)}
          </span>
        </h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 body-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Building and scaling AI-powered products using LLMs, RAG, and AI agents — integrating modern AI tools, workflow automation (n8n), and vibe coding to rapidly ship real-world solutions.

        </motion.p>

        <motion.button
          ref={buttonRef}
          onClick={scrollToWork}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm font-medium tracking-wide rounded-full shadow-[var(--shadow-elegant)]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            x: buttonPosition.x,
            y: buttonPosition.y,
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1.6 },
            x: { duration: 0.2 },
            y: { duration: 0.2 },
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          View Work
          <motion.span
            className="inline-flex"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.span>
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

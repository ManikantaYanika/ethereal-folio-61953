import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Limit movement to 10px in each direction
    const limitedX = Math.max(-10, Math.min(10, x * 0.3));
    const limitedY = Math.max(-10, Math.min(10, y * 0.3));
    
    setButtonPosition({ x: limitedX, y: limitedY });
  };

  const handleMouseLeave = () => {
    setButtonPosition({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 grain-texture overflow-hidden">
      {/* Content */}
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Portfolio 2025
          </p>
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-display-xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          CREATIVE
          <br />
          DEVELOPER
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 body-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Building digital experiences that merge design with functionality
        </motion.p>

        <motion.button
          ref={buttonRef}
          onClick={scrollToWork}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm font-medium tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isVisible ? 1 : 0,
            x: buttonPosition.x,
            y: buttonPosition.y
          }}
          transition={{ 
            opacity: { duration: 0.6, delay: 0.8 },
            x: { duration: 0.2 },
            y: { duration: 0.2 }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Work
          <ArrowDown size={16} />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <span className="text-xs uppercase tracking-wider text-muted-foreground">Scroll</span>
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

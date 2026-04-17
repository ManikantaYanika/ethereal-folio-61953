import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Mehta',
    role: 'Product Manager',
    content:
      'Exceptional experience! The project was delivered with precision, creativity, and clear communication throughout.',
  },
  {
    name: 'Kailash K',
    role: 'Revify, Manager',
    content:
      'Very professional and reliable. The final product perfectly matched our vision — highly recommend working with them!',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 110,
      damping: 16,
    },
  },
};

export const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="testimonials"
      className="relative py-32 px-6"
      style={{ background: 'var(--gradient-section)' }}
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span className="eyebrow mb-5">Testimonials</span>
          <motion.div
            className="h-px bg-foreground origin-left mt-5"
            initial={{ scaleX: 0, width: 96 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card p-9 md:p-10 relative overflow-hidden group cursor-default"
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { type: 'spring', stiffness: 300, damping: 22 },
              }}
            >
              {/* Big background quote */}
              <Quote
                aria-hidden
                size={140}
                strokeWidth={1}
                className="absolute -top-4 -right-4 text-foreground/[0.05] pointer-events-none"
              />

              <motion.p
                className="text-lg md:text-xl mb-8 font-serif leading-relaxed relative z-10 text-foreground/90"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.18 }}
              >
                "{testimonial.content}"
              </motion.p>

              <motion.div
                className="pt-5 border-t border-border-subtle relative z-10"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.55 + index * 0.18 }}
              >
                <p className="font-medium mb-1 transition-colors duration-300 group-hover:text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

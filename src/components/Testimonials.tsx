import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Mehta',
    role: 'Product Manager',
    content: 'Exceptional experience! The project was delivered with precision, creativity, and clear communication throughout.',
  },
  {
    name: 'Kailash K',
    role: 'Revify, Manager',
    content: 'Very professional and reliable. The final product perfectly matched our vision — highly recommend working with them!',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

const quoteVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: { 
    opacity: 0.1, 
    scale: 1, 
    rotate: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 20,
      delay: 0.2,
    },
  },
};

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-32 px-6 bg-muted" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Testimonials
          </h2>
          <motion.div 
            className="h-px bg-foreground origin-left"
            initial={{ scaleX: 0, width: 96 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="minimal-card p-8 relative overflow-hidden group cursor-default"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
            >
              {/* Animated quote icon */}
              <motion.div 
                className="absolute top-4 right-4 text-foreground"
                variants={quoteVariants}
              >
                <Quote size={64} strokeWidth={1} />
              </motion.div>

              {/* Quote content with staggered text */}
              <motion.p 
                className="text-xl mb-8 font-serif leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                "{testimonial.content}"
              </motion.p>
              
              {/* Client info with slide-up animation */}
              <motion.div 
                className="pt-6 border-t border-border relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              >
                <p className="font-medium mb-1 group-hover:text-primary transition-colors duration-300">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </motion.div>

              {/* Subtle background gradient on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

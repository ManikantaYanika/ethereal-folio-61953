import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, StartupCo',
    content: 'Outstanding work! The website exceeded our expectations. Professional, responsive, and delivered on time.',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, TechFlow',
    content: 'Incredible attention to detail and excellent communication throughout the project. Highly recommend!',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, DesignHub',
    content: 'Best developer I\'ve worked with. Clean code, beautiful design, and great problem-solving skills.',
  },
];

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="testimonials" className="py-32 px-6 bg-muted" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Testimonials
          </h2>
          <div className="h-px w-24 bg-foreground" />
        </motion.div>

        {/* Grid of testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="minimal-card p-8"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Quote in large serif font */}
              <p className="text-xl mb-8 font-serif leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Client info */}
              <div className="pt-6 border-t border-border">
                <p className="font-medium mb-1">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

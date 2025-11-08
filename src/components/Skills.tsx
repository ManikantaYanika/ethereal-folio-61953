import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// TODO: Replace with your actual skills
// Recommended: 12-20 skills for optimal visual balance
// Categories: Frontend, Backend, Tools, Databases, etc.
const skills = [
  'React',
  'TypeScript',
  'Java ',
  'Python',
  'supabase',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Tailwind CSS',
  'Figma',
  'Git',
  'REST APIs',
  
  
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-32 px-6 bg-muted" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="h-px w-24 bg-foreground" />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="minimal-card p-6 text-center group hover:bg-foreground hover:text-background transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span className="text-sm font-medium">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

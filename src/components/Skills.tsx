import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  'OpenAI APT',
  'LLMs',
  'RAG',
  'AI Agents',
  'Lang Chain',
  'n8n',
  'Lamg Graph',
  'Prompt Engineering',
  'Gradito',
  'Streamlit',
  'Ai assited Development',
  'Product Bulding',
  

];

export const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
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
          <span className="eyebrow mb-5">Skills & Technologies</span>
          <div className="h-px w-24 bg-foreground mt-5" />
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="skill-chip"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.25 + index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -3 }}
            >
              {skill.trim()}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

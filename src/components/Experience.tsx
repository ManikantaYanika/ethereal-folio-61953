import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description:
      'Leading development of scalable web applications and mentoring junior developers.',
    achievements: [
      'Architected and launched 3 major products serving 100K+ users',
      'Improved application performance by 60% through optimization',
      'Led team of 5 developers in agile environment',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description:
      'Developed and maintained client projects using modern JavaScript frameworks.',
    achievements: [
      'Built 15+ client websites and web applications',
      'Implemented CI/CD pipelines reducing deployment time by 40%',
      'Collaborated with design team on UI/UX improvements',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Agency',
    period: '2019 - 2020',
    description:
      'Created responsive and interactive user interfaces for various clients.',
    achievements: [
      'Developed pixel-perfect implementations from designs',
      'Improved site speed by 50% through optimization techniques',
      'Implemented accessibility standards across all projects',
    ],
  },
];

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Experience
          </h2>
          <div className="h-px w-24 bg-foreground" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative md:pl-12"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-2 h-2 bg-foreground rounded-full -translate-x-[3.5px] hidden md:block" />

                <div className="minimal-card p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-2">{exp.title}</h3>
                      <p className="text-lg text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 body-text">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-sm text-muted-foreground flex items-start gap-3"
                      >
                        <span className="text-foreground mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

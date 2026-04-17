import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Product Developer',
    company: 'REVIFY PRIVATE LIMITED · Self-employed.',
    period: 'Jan 2025 - Present | Bengaluru, Karnataka, India (Remote)',
    description:
      'Part of the founding team developing innovative digital products for clients and internal ventures..',
    achievements: [
      'Designed and built scalable front-end components using React and TypeScript',
      'Collaborated with 7+ core team members to develop full-cycle product prototypes',
      'Integrated REST APIs and optimized application performance for responsiveness',
      'Contributed to strategic planning and UI/UX improvements to enhance product usability',
    ],
  },
  {
    title: 'AWS Intern',
    company: 'Codeworks EduTech Services Pvt Ltd · Internship.',
    period: 'Jan 2024 – Apr 2024 | Hyderabad, Telangana, India (Hybrid)',
    description:
      'Gained hands-on experience in AWS cloud technologies while supporting client infrastructure projects..',
    achievements: [
      'Worked with AWS services such as EC2, S3, and Lambda for deployment and automation',
      'Developed Python-based automation scripts for cloud resource management',
      'Configured CI/CD pipelines to streamline deployments and reduce downtime',
      'Documented and presented cloud architecture solutions to senior engineers',
    ],
  },
  {
    title: 'Java Full Stack Intern',
    company: 'JSpiders Training and Development Center · Internship',
    period: 'June 2024 – Dec 2024 | Bengaluru, Karnatka, India (On-site)',
    description:
      'Completed comprehensive Java Full Stack Development training and hands-on projects..',
    achievements: [
      'Gained expertise in Core Java, JDBC, Servlets, JSP, and Hibernate',
      'Built end-to-end full stack web applications using Java, MySQL, and React.js',
      'Worked on CRUD-based project modules focusing on backend integration',
      'trengthened debugging, database handling, and deployment skills',
    ],
  },
  {
    title: 'Front-End Developer Intern',
    company: 'AK Technologies Pvt Ltd · Internship.',
    period: 'Sep 2023 – Dec 2023 | Hyderabad, Telangana, India',
    description:
      'Focused on building interactive and optimized web interfaces for client-based applications.',
    achievements: [
      'Developed responsive UI components using HTML, CSS, JavaScript, and React.js',
      'Enhanced site speed and performance through efficient component design',
      'Integrated APIs and ensured seamless communication between front-end and back-end',
      'Worked closely with designers and developers in an Agile environment',
    ],
  },
];

export const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="relative py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="eyebrow mb-5">Experience</span>
          <div className="h-px w-24 bg-foreground mt-5" />
        </motion.div>

        <div className="relative">
          {/* Timeline gradient line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                'linear-gradient(180deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.3) 60%, transparent 100%)',
            }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative md:pl-12 group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Timeline dot with ring */}
                <div className="absolute left-0 top-7 hidden md:block -translate-x-[5px]">
                  <span className="block w-2.5 h-2.5 rounded-full bg-foreground" />
                  <span className="absolute inset-0 -m-1.5 rounded-full border border-foreground/30 scale-0 group-hover:scale-100 transition-transform duration-500" />
                </div>

                <div className="minimal-card p-7 md:p-8 transition-all duration-500 group-hover:border-l-2 group-hover:border-l-foreground">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold mb-1.5 tracking-tight">
                        {exp.title}
                      </h3>
                      <p className="text-base text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center self-start text-[11px] uppercase tracking-[0.18em] text-muted-foreground border border-border-subtle bg-secondary/60 rounded-full px-3 py-1">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 body-text">
                    {exp.description}
                  </p>

                  <ul className="space-y-2.5">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-sm text-muted-foreground flex items-start gap-3"
                      >
                        <span className="text-foreground mt-2 inline-block w-1 h-1 rounded-full bg-foreground shrink-0" />
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

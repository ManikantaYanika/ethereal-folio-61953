import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const stats = [
  { label: 'Year Experience', value: 1, suffix: '+' },
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Happy Clients', value: 10, suffix: '+' },
];

const Counter = ({
  to,
  suffix,
  start,
}: {
  to: number;
  suffix: string;
  start: boolean;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!start) return;
    const controls = animate(count, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [start, to, count]);

  return <motion.span>{rounded}</motion.span>;
};

export const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="eyebrow mb-5">About Me</span>
          <div className="h-px w-24 bg-foreground mt-5" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Bio */}
          <motion.div
            className="md:col-span-3 relative pl-6 md:pl-8"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              aria-hidden
              className="absolute left-0 top-2 bottom-2 w-px accent-line"
            />
            <p className="text-2xl md:text-3xl lg:text-[2.5rem] body-text leading-tight tracking-tight mb-8">
              I'm an<strong className="font-semibold">Ai Product Builder</strong> focused{' '}
              <strong className="font-semibold">on creating real-world applications</strong>,
              using LLMs, RAG, and agent-based systems.
            </p>
            <p className="text-base md:text-lg text-muted-foreground body-text">
              I build end-to-end products — from idea and architecture to deployment — combining modern AI tools, automation workflows (n8n), and scalable full-stack systems.
              My work focuses on solving practical problems through intelligent systems, rapid prototyping, and clean, production-ready solutions.
              
              <br />
              <br />
              Throughout my journey, I've collaborated with startups and tech
              teams to deliver 10+ projects and support 10+ happy clients,
              focusing on performance, design precision, and innovation. My
              approach blends technology with thoughtful design — ensuring every
              product is efficient, engaging, and future-ready.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="md:col-span-2 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="minimal-card p-6 md:p-7"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold mb-2 tracking-tight">
                  <Counter to={stat.value} suffix={stat.suffix} start={inView} />
                </div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

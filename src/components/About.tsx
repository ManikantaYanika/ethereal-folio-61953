import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { label: 'Year Experience', value: '1+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Happy Clients', value: '10+' },
  ];

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            About Me
          </h2>
          <div className="h-px w-24 bg-foreground mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Left Column - About Text */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl body-text leading-relaxed mb-6">
              I'm a <strong className="font-semibold">full-stack developer</strong> and{' '}
              <strong className="font-semibold"> passionate about building scalable</strong> , user-focused web and app solutions that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground body-text leading-relaxed">
             With nearly one year of professional experience, I’ve worked across multiple projects in Java, Spring Boot, React, and AWS, combining front-end creativity with robust back-end logic. I enjoy crafting clean, maintainable code and designing intuitive digital experiences that users love.

Throughout my journey, I’ve collaborated with startups and tech teams to deliver 10+ projects and support 10+ happy clients, focusing on performance, design precision, and innovation. My approach blends technology with thoughtful design — ensuring every product is efficient, engaging, and future-ready.
            </p>
          </motion.div>

          {/* Right Column - Quick Stats */}
          <motion.div
            className="md:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="border-l-2 border-foreground pl-6">
                <div className="text-4xl font-display font-bold mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
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
              <strong className="font-semibold">UI designer</strong> passionate about creating
              seamless digital experiences that solve real problems.
            </p>
            <p className="text-lg text-muted-foreground body-text leading-relaxed">
              With expertise in modern web technologies, I specialize in building scalable
              applications that balance aesthetics with functionality. My approach combines
              clean code with thoughtful design to deliver products that users love.
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

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { Description } from '@radix-ui/react-toast';

const projects = [

  {
    id: 0,
    title: 'brsrnext — AI Product Platform',
    year: '2026',
    description:
      'An AI-powered platform designed to build and automate real-world workflows using LLMs, RAG, and agent-based systemss, Built end-to-end using React, Supabase, and LLM systems,Implemented RAG pipelines, LangChain, LangGraph, and autonomous agents,Enables intelligent automation and scalable product workflows,Designed for rapid product development from idea to deployment,',
    tags: ['React','python','supabase','Agents','LLm','RAG','vibe coding'],
    image:'https://media.istockphoto.com/id/1410400348/photo/the-hand-holds-a-neon-icon-on-the-theme-of-eco-eco-friendly-concept-3d-render.jpg?s=2048x2048&w=is&k=20&c=sxZiLsSZ7bXZXU93xEWcYI4hzZFCvhJW5CvvGU9IpHo=',
    live : 'https://brsrnext.com',

  },
  {
    id :1,
    title : '⚡ Consysto — AI Workflow & Habit System',
    year: '2026',
    description:
      'A productivity-focused AI platform for habit tracking, daily check-ins, and workflow automation.',
    tags : ['Supabase','LLMS','react','python','vibe coding'],
    image:
      'https://plus.unsplash.com/premium_photo-1684356819140-e82e7446b600?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fCVFMiU5QSVBMSUyMENvbnN5c3RvJTIwJUUyJTgwJTk0JTIwQUklMjBXb3JrZmxvdyUyMCUyNiUyMEhhYml0JTIwU3lzdGVtJTIwYmFzZWQlMjBvbiUyMHRoaXMlMjBhcHAlMjBkZXNpZ24lMjBhJTIwb25lJTIwb3V0bGV0fGVufDB8fDB8fHww',
    live : 'https://consysto.netlify.app',

  },
  {
    id:2,
    title : '🤖 ManiAssist — AI Assistant Platform',
    year: '2026',
    description:
      'An AI-powered assistant for real-time interaction, task automation, and intelligent query handling.',
    tags: ['React', 'AI', 'automation', 'assistant', 'Supabase', 'UX'],
    image :
      'https://plus.unsplash.com/premium_photo-1725907643560-8d2dc0124337?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW4lMjBBSS1wb3dlcmVkJTIwYXNzaXN0YW50JTIwZm9yJTIwcmVhbC10aW1lJTIwaW50ZXJhY3Rpb24lMkMlMjB0YXNrJTIwYXV0b21hdGlvbiUyQyUyMGFuZCUyMGludGVsbGlnZW50JTIwcXVlcnklMjBoYW5kbGluZy4lMjBvbiUyMHRoaXMlMjBhcHAlMjBkZXNpZ24lMjBhJTIwb25lJTIwb3V0bGV0fGVufDB8fDB8fHww',
    live: 'https://maniassist.netlify.app',

  },
  {
    id: 3,
    title: 'Ecommerce Development & Web Solutions',
    year: '2025',
    description:
      'Specializing in building efficient and scalable eCommerce platforms. Focused on delivering seamless online shopping experiences with modern, user-friendly designs..',
    tags: ['React', 'Node.js', 'Supabase', 'Tailwand CSS', 'PostgreSQL', 'Stripe'],
    image:
      'https://media.istockphoto.com/id/2219589773/photo/a-tanker-truck-drives-along-a-highway-outside-the-city.jpg?s=2048x2048&w=is&k=20&c=TNiJLRKl_7GTzzffUkJGzoYilEpONl4hMCcCEA0Yuy0=',
    github: 'https://github.com/ManikantaYanika/aqua-tank-connect',
    live: 'https://aqua-tank-connect.lovable.app/',
  },
  {
    id: 4,
    title: 'SmartCommerce — Modern Web Store Solution',
    year: '2025',
    description:
      'A cloud-based e-commerce solution enabling businesses to launch and scale online stores effortlessly with real-time analytics, modern UI, and integrated payment systems.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    image:
      'https://images.unsplash.com/photo-1644416250692-2596ef185bc5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
    github: 'https://github.com/KailashNathh/Teaday-Websitr',
    live: 'https://glistening-tanuki-03ed3d.netlify.app',
  },
  {
    id: 5,
    title: '“Learn • Tune • Deploy — Adaptive Online Learning Platform”',
    year: '2025',
    description:
      '"Designed to empower learners of all levels, Learn • Tune • Deploy is a web-based learning platform that offers personalised learning paths, interactive lessons, real-time progress tracking, and secure payment integration. Built with modern full-stack technologies to scale effortlessly and deliver a smooth UI/UX for both students and instructors.".',
    tags: [
      'React',
      'Node.js',
      'supabase',
      'PostgresSQl',
      'Tailwand CSs',
      'Stripe (for payments)',
      'Vercel/Netlify (for deployment)',
    ],
    image:
      'https://images.unsplash.com/photo-1758876016923-c4e2f72983bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500',
    github: 'https://github.com/ManikantaYanika/learn-tune-deploy',
    live: 'https://learn-tune-deploy.lovable.app',
  },
  {
    id: 6,
    title: 'Mobile Adventure Game UI (On-the-Go)',
    year: '2024',
    description:
      'Dive into a neon-soaked cityscape where you become the BeastRunner. Equipped with glowing gadgets, you streak through towering skyscrapers, dodge laser fences and outsmart security drones. Your mission? Recover the stolen energy cores and ignite the city’s pulse again. With slick animations, reactive HUD, and immersive sound design, every run feels electric',
    tags: [
      'React',
      'Node.js',
      'supabase',
      'PostgresSQl',
      'Tailwand CSs',
      'Stripe (for payments)',
      'Maps',
      'Vercel/lovable (for deployment)',
    ],
    image:
      'https://media.istockphoto.com/id/1142340485/photo/automatic-electric-car-traffic-jam-in-china.jpg?s=1024x1024&w=is&k=20&c=HlcYtydj29_QgrdICywn8TxXgRo3n1anvykGkFeMulY=',
    live: 'https://beastdrive-glow-ui-kit.lovable.app',
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -620, behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 620, behavior: 'smooth' });
  };

  return (
    <section id="work" className="relative py-32 px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <span className="eyebrow mb-5">Selected Work</span>
          <div className="h-px w-24 bg-foreground mt-5 mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of projects that showcase my skills in design and
            development
          </p>
        </motion.div>

        <div className="relative -mx-6 px-6">
          {/* Nav buttons */}
          <div className="flex items-center justify-end gap-3 mb-8">
            <button
              onClick={scrollLeft}
              className="group relative w-12 h-12 rounded-full border border-border bg-surface-elevated hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollRight}
              className="group relative w-12 h-12 rounded-full border border-border bg-surface-elevated hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <motion.div
            ref={scrollContainerRef}
            className="horizontal-scroll gap-8 pb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="w-[85vw] md:w-[600px] group relative"
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className="relative overflow-hidden bg-muted aspect-[3/2] rounded-[var(--radius)] shadow-[var(--shadow-elegant)] transition-shadow duration-500 group-hover:shadow-[var(--shadow-elevated)]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-\[1200ms\] ease-\[cubic-bezier(0.16,1,0.3,1)\] group-hover:scale-110"
                  />

                  {/* Glassmorphic overlay */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      background:
                        'linear-gradient(180deg, hsl(230 35% 12% / 0.55) 0%, hsl(230 35% 12% / 0.85) 100%)',
                      backdropFilter: 'blur(8px) saturate(140%)',
                      WebkitBackdropFilter: 'blur(8px) saturate(140%)',
                    }}
                  >
                    <div className="h-full flex flex-col justify-between p-8 text-background">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] mb-3 opacity-70">
                          {project.year} / 0{index + 1}
                        </div>
                        <p className="text-base md:text-lg body-text mb-6 max-w-md">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-5">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                          >
                            <Github size={16} />
                            Code
                          </a>
                        )}
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                        >
                          <ExternalLink size={16} />
                          Live Site
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Project info */}
                <div className="mt-6">
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-border-subtle bg-surface-elevated text-muted-foreground transition-colors duration-300 hover:text-foreground hover:border-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile-only action links */}
                <div className="mt-4 flex flex-wrap gap-3 md:hidden">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-border-subtle bg-surface-elevated px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                    >
                      Code
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border-subtle bg-surface-elevated px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    Live Site
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-6 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              ← Scroll to explore →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

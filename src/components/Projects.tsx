import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    year: '2024',
    description: 'Full-stack e-commerce solution with payment integration and real-time inventory management.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 2,
    title: 'Portfolio CMS',
    year: '2024',
    description: 'Headless CMS for portfolio websites with drag-and-drop builder and live preview.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    year: '2023',
    description: 'Real-time analytics dashboard with customizable widgets and data visualization.',
    tags: ['React', 'D3.js', 'Firebase', 'Material-UI'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 4,
    title: 'Social Media App',
    year: '2023',
    description: 'Social networking platform with real-time messaging and content sharing.',
    tags: ['React Native', 'GraphQL', 'MongoDB', 'AWS'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 5,
    title: 'Task Management Tool',
    year: '2023',
    description: 'Collaborative task management with kanban boards and team analytics.',
    tags: ['Vue.js', 'Express', 'MySQL', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 6,
    title: 'AI Content Generator',
    year: '2024',
    description: 'AI-powered content generation tool for marketing and social media.',
    tags: ['Python', 'OpenAI', 'FastAPI', 'React'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -620, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 620, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Selected Work
          </h2>
          <div className="h-px w-24 bg-foreground mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of projects that showcase my skills in design and development
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative -mx-6 px-6">
          {/* Navigation Buttons */}
          <div className="flex items-center justify-end gap-4 mb-8">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
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
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Project Card */}
                <div className="relative overflow-hidden bg-muted aspect-[3/2]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-foreground/90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="h-full flex flex-col justify-between p-8 text-background">
                      <div>
                        <div className="text-sm uppercase tracking-wider mb-2 opacity-70">
                          {project.year} / 0{index + 1}
                        </div>
                        <p className="text-lg body-text mb-6">{project.description}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                        >
                          <Github size={18} />
                          Code
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                        >
                          <ExternalLink size={18} />
                          Live Site
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="mt-6">
                  <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Hint */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">← Scroll horizontally to explore →</p>
          </div>
        </div>
      </div>
    </section>
  );
};

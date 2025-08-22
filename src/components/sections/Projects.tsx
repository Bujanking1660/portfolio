import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../ui/button';
import { Scene3D } from '../3d/Scene3D';
import { Laptop3D } from '../3d/Laptop3D';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '/api/placeholder/600/400',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    image: '/api/placeholder/600/400',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false
  },
  {
    title: 'AI Dashboard',
    description: 'Analytics dashboard with AI-powered insights, data visualization, and predictive analytics for business intelligence.',
    tech: ['Next.js', 'Python', 'Chart.js', 'TensorFlow'],
    image: '/api/placeholder/600/400',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true
  },
  {
    title: 'Social Media App',
    description: 'Modern social media platform with real-time messaging, image sharing, and social networking features.',
    tech: ['React Native', 'GraphQL', 'MongoDB'],
    image: '/api/placeholder/600/400',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
      
      {/* 3D Element */}
      <div className="absolute top-10 right-10 w-48 h-48 opacity-40 hidden lg:block">
        <Scene3D>
          <Laptop3D />
        </Scene3D>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-poppins font-bold mb-6 gradient-text"
          >
            Featured Projects
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-foreground-muted max-w-3xl mx-auto leading-relaxed"
          >
            Here are some of my favorite projects that showcase my skills and passion for creating 
            exceptional digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
              className={`glass rounded-2xl overflow-hidden hover-lift group ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-secondary flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <div className="text-4xl font-poppins font-bold mb-2">
                      {project.title}
                    </div>
                    <div className="text-sm opacity-80">Project Preview</div>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    className="glass bg-surface text-foreground hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="glass bg-surface text-foreground hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3 text-foreground group-hover:gradient-text transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground-muted mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium glass rounded-full text-foreground-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass border-glass-border hover:bg-surface"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-primary text-primary-foreground"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="glass border-glass-border hover:bg-surface px-8 py-3"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View More Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
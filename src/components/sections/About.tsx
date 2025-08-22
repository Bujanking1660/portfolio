import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, TypeScript, Next.js, Tailwind CSS',
    color: 'text-primary'
  },
  {
    icon: Palette,
    title: 'UI/UX Design', 
    description: 'Figma, Adobe XD, Responsive Design',
    color: 'text-secondary'
  },
  {
    icon: Rocket,
    title: 'Backend Development',
    description: 'Node.js, Python, PostgreSQL, MongoDB',
    color: 'text-accent'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Agile, Git, Team Leadership, Mentoring',
    color: 'text-primary'
  }
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            About Me
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-foreground-muted max-w-3xl mx-auto leading-relaxed"
          >
            I'm a passionate full-stack developer with over 5 years of experience creating 
            digital solutions that blend functionality with beautiful design. I love turning 
            complex problems into simple, elegant solutions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-poppins font-semibold mb-4 text-foreground">
                My Journey
              </h3>
              <p className="text-foreground-muted leading-relaxed mb-4">
                Started as a curious student who fell in love with code, I've evolved into 
                a seasoned developer who thrives on creating innovative solutions. My experience 
                spans from startups to enterprise-level applications.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies 
                while maintaining a strong foundation in fundamental programming principles.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass p-6 rounded-2xl"
            >
              <h4 className="font-poppins font-semibold mb-3 text-foreground">
                When I'm not coding...
              </h4>
              <p className="text-foreground-muted text-sm leading-relaxed">
                You'll find me exploring new technologies, contributing to open source projects, 
                or enjoying outdoor adventures. I believe a balanced lifestyle fuels creativity 
                and innovation.
              </p>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + (index * 0.1) }}
                className="glass p-6 rounded-xl hover-lift group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:animate-pulse-glow`}>
                  <skill.icon className={`w-6 h-6 text-primary-foreground`} />
                </div>
                <h4 className="font-poppins font-semibold mb-2 text-foreground">
                  {skill.title}
                </h4>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Scene3D } from '../3d/Scene3D';
import { FloatingGeometry } from '../3d/FloatingGeometry';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      {/* Parallax Background Shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* 3D Element */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-60">
        <Scene3D>
          <FloatingGeometry />
        </Scene3D>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-muted font-medium"
          >
            Hi there! I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-poppins font-bold gradient-text"
          >
            Rizkya Gusnaldy Kalia
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-4xl font-poppins font-medium text-foreground-muted"
          >
            Junior Web Developer & Informatics Student
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto text-lg text-foreground-subtle leading-relaxed"
          >
            Informatics undergraduate with a Software Engineering (RPL) background. Skilled in <strong>HTML, CSS, JavaScript, PHP, MySQL, TailwindCSS, and Bootstrap</strong>, with additional experience in React Native, MongoDB, Python, and Java.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection('#projects')}
              className="glass hover-lift bg-gradient-primary text-primary-foreground px-8 py-3 text-lg font-medium"
            >
              See My Projects
            </Button>
            
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="glass border-glass-border hover:bg-surface px-8 py-3 text-lg font-medium"
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/Bujanking1660', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/rizkya-gusnaldy-kalia/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:rizkyagusnaldykaliaa@gmail.com', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover-lift transition-colors hover:bg-surface"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + (index * 0.1) }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center space-y-2 text-foreground-muted hover:text-foreground transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

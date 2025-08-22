import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Bujanking1660', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rizkya-gusnaldy-kalia/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:rizkyagusnaldykaliaa@gmail.com', label: 'Email' }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-glass-border/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <span className="text-xl font-poppins font-bold gradient-text">
              Rizkya Gusnaldy
            </span>
            <span className="text-foreground-muted">•</span>
            <span className="text-foreground-muted">Junior Web Developer</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-lg hover-lift transition-colors hover:bg-surface group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              >
                <social.icon className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-glass-border/30 text-center"
        >
          <p className="text-foreground-muted text-sm flex items-center justify-center space-x-1">
            <span>© {currentYear} Rizkya Gusnaldy. Built with passion,</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and continuous learning.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
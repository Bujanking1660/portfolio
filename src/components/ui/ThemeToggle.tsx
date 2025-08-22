import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 glass rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-primary"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-4 h-4 bg-gradient-primary rounded-full flex items-center justify-center"
        initial={false}
        animate={{
          x: theme === 'light' ? 0 : 20,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === 'light' ? (
          <Sun className="w-3 h-3 text-foreground" />
        ) : (
          <Moon className="w-3 h-3 text-foreground" />
        )}
      </motion.div>
    </motion.button>
  );
}
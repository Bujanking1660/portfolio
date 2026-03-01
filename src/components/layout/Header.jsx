import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tighter">
          Bg<span className="text-muted-foreground">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a
            href="#projects"
            className="hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-foreground transition-colors"
          >
            Experience
          </a>
        </nav>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
      </div>
    </header>
  );
}

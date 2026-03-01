import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "../ui/Animations";
import { ArrowRight, Github } from "lucide-react";

const name = "Rizkya Gusnaldy Kalia";

export function Hero() {
  const letters = name.split("");

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <StaggerContainer className="flex flex-col items-center gap-6 max-w-5xl">
          {/* Name — letter-by-letter 3D reveal */}
          <StaggerItem>
            <motion.div
              className="flex flex-wrap justify-center"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.03, delayChildren: 0.2 },
                },
              }}
            >
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight"
                  style={{ display: "inline-block" }}
                  variants={{
                    hidden: { opacity: 0, y: 50, rotateX: -40 },
                    show: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      },
                    },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </StaggerItem>

          {/* Tagline */}
          <StaggerItem>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-muted-foreground">
              Crafting <span className="text-foreground">Digital</span>{" "}
              <br className="hidden md:block" />
              Experiences.
            </h1>
          </StaggerItem>

          {/* Description */}
          <StaggerItem>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light">
              Web Developer specializing in high-performance, accessible, and
              aesthetically driven interfaces.
            </p>
          </StaggerItem>

          {/* CTA Buttons */}
          <StaggerItem>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-3 text-sm font-semibold gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                View Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="https://github.com/Bujanking1660"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-8 py-3 text-sm font-semibold gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Github className="h-4 w-4" />
                GitHub
              </motion.a>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Animated scroll indicator */}
      <FadeIn
        delay={1.6}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest font-medium">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-border relative overflow-hidden">
            <motion.div
              className="absolute top-0 w-full h-1/2 bg-foreground"
              animate={{ y: ["-100%", "200%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

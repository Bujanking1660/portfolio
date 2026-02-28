import {
  SlideUp,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  RevealText,
  DrawLine,
  CountUp,
} from "../ui/Animations";
import { Code2, Sparkles, Layers, Zap, Globe, Github } from "lucide-react";

const skills = [
  { name: "React / Next.js", icon: <Code2 className="h-4 w-4" /> },
  { name: "SQL", icon: <Zap className="h-4 w-4" /> },
  { name: "Tailwind CSS", icon: <Sparkles className="h-4 w-4" /> },
  { name: "PHP", icon: <Layers className="h-4 w-4" /> },
  { name: "REST APIs", icon: <Globe className="h-4 w-4" /> },
  { name: "Git & GitHub", icon: <Github className="h-4 w-4" /> },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text & Stats */}
          <div>
            {/* Section label + draw line */}
            <SlideUp>
              <p className="text-sm uppercase tracking-widest font-semibold text-muted-foreground mb-3">
                About Me
              </p>
              <DrawLine className="mb-6 w-12" delay={0.2} />
            </SlideUp>

            {/* Word-by-word heading reveal */}
            <RevealText
              as="h2"
              className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight"
              delay={0.05}
            >
              Passionate about the craft of building for the web.
            </RevealText>

            <SlideUp delay={0.15}>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg max-w-lg">
                <p>
                  I am a frontend developer with a deep love for clean code and
                  beautiful interfaces. I obsess over the details — from
                  micro-animations to load-time performance.
                </p>
                <p>
                  When I am not coding, I am exploring the latest in design
                  systems, contributing to open-source, and pushing the
                  boundaries of what is possible in the browser.
                </p>
              </div>
            </SlideUp>

            {/* Animated CountUp stats */}
            <SlideUp delay={0.2}>
              <div className="flex gap-4 mt-10">
                <HoverCard>
                  <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent flex flex-col items-center justify-center border border-border cursor-default">
                    <span className="text-3xl font-black">
                      <CountUp to={4} suffix="+" duration={1.4} delay={0.3} />
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      Years
                    </span>
                  </div>
                </HoverCard>
                <HoverCard>
                  <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent flex flex-col items-center justify-center border border-border cursor-default">
                    <span className="text-3xl font-black">
                      <CountUp to={10} suffix="+" duration={1.4} delay={0.5} />
                    </span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      Projects
                    </span>
                  </div>
                </HoverCard>
              </div>
            </SlideUp>
          </div>

          {/* Right: Skills Grid with spring-lift hover */}
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <StaggerItem key={skill.name}>
                <HoverCard className="h-full">
                  <div className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-border/50 bg-muted/30 text-center cursor-default h-full">
                    <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center border border-border text-muted-foreground">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

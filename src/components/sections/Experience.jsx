import {
  SlideUp,
  StaggerContainer,
  StaggerItem,
  DrawLine,
  RevealText,
} from "../ui/Animations";
import { Code2, PenTool, Terminal } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Junior Web Developer",
      company: "Digital Agency",
      period: "Jul 2023 - Dec 2023",
      description:
        "Saat ini, saya sedang merancang wireframe situs web pendidikan sambil mendalami pengembangan frontend menggunakan React dan Next.js untuk menciptakan performa yang optimal. Di sisi kreatif, saya juga aktif mengeksplorasi desain grafis dengan membuat desain kaos melalui template Figma, guna memperluas kemampuan visual dan tata letak saya.",
      icon: <Code2 className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30 px-6">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <SlideUp className="mb-4">
          <p className="text-sm uppercase tracking-widest font-semibold text-muted-foreground mb-3">
            Experience
          </p>
          <DrawLine className="w-12 mb-6" delay={0.15} />
        </SlideUp>

        <RevealText
          as="h2"
          className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 leading-tight"
          delay={0.04}
        >
          Career Timeline.
        </RevealText>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical connector line */}
          <div className="absolute left-6 top-0 bottom-0 w-px hidden sm:block">
            <DrawLine direction="vertical" className="h-full" delay={0.2} />
          </div>

          <StaggerContainer className="flex flex-col gap-6 w-full">
            {experiences.map((exp) => (
              <StaggerItem key={exp.id}>
                <div className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 rounded-2xl border border-transparent hover:border-border/50 hover:bg-card hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all sm:pl-16">
                  {/* Icon — sits on top of the vertical line on desktop */}
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors sm:absolute sm:left-0 relative z-10">
                    {exp.icon}
                  </div>

                  <div className="flex-1 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2 gap-2">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="text-xs sm:text-sm text-muted-foreground font-mono bg-muted/50 px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-primary/80 mb-3">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

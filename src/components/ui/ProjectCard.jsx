import { ScaleIn, HoverCard } from "./Animations";
import { Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectCard({ project, indexStr }) {
  const formattedDate = new Date(project.updated_at).toLocaleDateString(
    "en-US",
    { month: "short", year: "numeric" },
  );

  return (
    <ScaleIn delay={0.07 * indexStr} className="h-full">
      <HoverCard className="h-full">
        <motion.a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block h-full rounded-2xl border border-border/50 bg-card p-6 relative overflow-hidden"
          whileHover={{ borderColor: "var(--border)" }}
          transition={{ duration: 0.2 }}
        >
          {/* Gradient shimmer on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5 rounded-2xl pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          <div className="flex flex-col h-full relative z-10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-lg tracking-tight group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="text-muted-foreground"
              >
                <ExternalLink className="h-4 w-4" />
              </motion.div>
            </div>

            <p className="text-muted-foreground text-sm flex-grow mb-6 line-clamp-3">
              {project.description || "No description provided."}
            </p>

            <div>
              {project.topics && project.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border"
                    >
                      {topic}
                    </span>
                  ))}
                  {project.topics.length > 3 && (
                    <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">
                      +{project.topics.length - 3}
                    </span>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border/50">
                <div className="flex items-center gap-4">
                  {project.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {project.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5" />
                    {project.stargazers_count}
                  </span>
                </div>
                <span>Updated {formattedDate}</span>
              </div>
            </div>
          </div>
        </motion.a>
      </HoverCard>
    </ScaleIn>
  );
}

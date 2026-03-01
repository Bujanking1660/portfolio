import { useEffect, useState } from "react";
import { getLatestRepos } from "../../lib/github";
import { ProjectCard } from "../ui/ProjectCard";
import { FadeIn, SlideUp } from "../ui/Animations";

export function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepos() {
      try {
        const data = await getLatestRepos("Bujanking1660");
        setRepos(data);
      } finally {
        setLoading(false);
      }
    }
    loadRepos();
  }, []);

  return (
    <section id="projects" className="py-24 relative px-6">
      <div className="container mx-auto px-4">
        <SlideUp className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Selected Work<span className="text-muted-foreground">.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A collection of recent projects fetched dynamically from my GitHub.
          </p>
        </SlideUp>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-64 rounded-2xl bg-muted/50 animate-pulse border border-border/50"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, idx) => (
              <ProjectCard key={repo.id} project={repo} indexStr={idx} />
            ))}
          </div>
        )}

        {repos.length === 0 && !loading && (
          <FadeIn>
            <div className="text-center py-12 border border-dashed border-border rounded-2xl">
              <p className="text-muted-foreground">
                No repositories found. Ensure your GitHub token is set in the{" "}
                <code>.env</code> file.
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

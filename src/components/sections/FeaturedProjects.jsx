import { projects } from "../../data/projects";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  if (featured.length === 0) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeader label="Highlights" title="Featured Projects" />

        <div className="grid gap-6">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              featured
            />
          ))}
        </div>
      </div>
    </section>
  );
}

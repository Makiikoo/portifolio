import type { Project } from "./projectsData";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex w-full shrink-0 flex-col justify-between rounded-xl border border-cyber-border bg-cyber-card p-6 transition-all duration-300 hover:border-cyber-green/60 md:w-[calc(50%-12px)]">
      <div>
        {/* Card Header */}
        <div className="mb-4 flex items-center justify-between">
          <i
            className={`fa-regular fa-folder-open text-2xl ${project.iconColor}`}
          />

          <div className="flex gap-3 text-sm text-cyber-muted">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub de ${project.title}`}
              className="transition-colors hover:text-cyber-green"
            >
              <i className="fa-brands fa-github" />
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visualizar ${project.title}`}
                className="transition-colors hover:text-cyber-cyan"
              >
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            )}
          </div>
        </div>

        {/* Project Information */}
        <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-cyber-green">
          {project.title}
        </h3>

        <p className="mb-4 text-xs leading-relaxed text-cyber-text sm:text-sm">
          {project.description}
        </p>
      </div>

      <div>
        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2 text-xs">
          {project.technologies.map((technology, index) => (
            <span
              key={`${project.id}-${technology}`}
              className={`
                rounded px-2 py-0.5
                ${
                  index % 2 === 0
                    ? "bg-cyber-green/10 text-cyber-green"
                    : "bg-cyber-cyan/10 text-cyber-cyan"
                }
              `}
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Repository Statistics */}
        <div className="flex items-center gap-4 border-t border-cyber-border/40 pt-3 text-xs text-cyber-muted">
          <span>
            <i className="fa-regular fa-star mr-1 text-yellow-500" />
            {project.stars}
          </span>

          <span>
            <i className="fa-solid fa-code-fork mr-1" />
            {project.forks}
          </span>

          <span className={`ml-auto ${project.languageColor}`}>
            ● {project.language}
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

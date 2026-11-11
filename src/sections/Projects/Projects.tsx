import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";
import { useCarousel } from "../../Hooks/useCarousel";

function Projects() {
  const { currentIndex, itemsPerPage, totalPages, next, previous, goTo } =
    useCarousel(projects.length);

  const pages = Array.from({ length: totalPages }, (_, index) =>
    projects.slice(index * itemsPerPage, (index + 1) * itemsPerPage),
  );

  return (
    <section id="projects" className="border-t border-cyber-border/50 py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xl text-cyber-green">03.</span>

          <h2 className="text-xl font-bold text-white sm:text-3xl">
            // Repositórios & Projetos
          </h2>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={previous}
            aria-label="Projetos anteriores"
            className="rounded-lg border border-cyber-border bg-cyber-card p-2.5 transition-all hover:border-cyber-green hover:text-cyber-green"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Próximos projetos"
            className="rounded-lg border border-cyber-border bg-cyber-card p-2.5 transition-all hover:border-cyber-green hover:text-cyber-green"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / totalPages)}%)`,
          }}
        >
          {pages.map((page, index) => (
            <div key={index} className="flex w-full shrink-0 gap-6">
              {page.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {pages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Ir para página ${index + 1}`}
            aria-current={currentIndex === index ? "true" : undefined}
            className={`
              h-3 rounded-full transition-all duration-300
              ${
                currentIndex === index
                  ? "w-6 bg-cyber-green"
                  : "w-3 bg-cyber-border hover:bg-cyber-muted"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

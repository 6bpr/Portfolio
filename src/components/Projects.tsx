import Reveal from './Reveal';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: "anime-wiki",
    description:
      "A Wikipedia-style anime character encyclopedia built from scratch with a clean, searchable interface.",
    tech: ["TS", "React", "Vite"],
    github: "https://github.com/Prawaldev/anime-wiki",
    live: "https://prawaldev.github.io/anime-wiki/",
  },
  {
    title: "pirated-lib",
    description:
      "Curated index of sites and apps for Japanese media — anime, manga, and novels.",
    tech: ["TS", "React", "Vite"],
    github: "https://github.com/Prawaldev/pirated-lib",
    live: "https://prawaldev.github.io/Pirated-Lib/",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <article
      className="group flex flex-col rounded-lg border border-ink/20 bg-paper p-6 transition-all hover:bg-sky hover:text-paper"
    >
      <header className="mb-2 flex items-baseline justify-between gap-3">
        <span className="font-sans text-sm text-pur transition-colors group-hover:text-paper">0{index + 1} /</span>
        <span className="shrink-0 text-sm text-ink/50 transition-colors group-hover:text-paper/70">{project.tech.join(" · ")}</span>
      </header>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-sans text-2xl font-semibold text-sky transition-colors group-hover:text-yellow-300">
          {project.title}
        </h3>
      </div>
      <p className="mt-2 mb-5 font-sans text-base leading-relaxed text-ink/80 transition-colors group-hover:text-paper/90">
        {project.description}
      </p>
      <div className="mt-auto flex gap-6 font-sans text-base">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link underline-offset-4 transition-colors group-hover:text-yellow-300 hover:underline"
        >
          github ↗
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link underline-offset-4 transition-colors group-hover:text-yellow-300 hover:underline"
        >
          live ↗
        </a>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-2xl px-6 py-16">
      <Reveal>
        <h2 className="mb-6 font-sans text-2xl font-semibold text-ink">
          <span className="text-pur">c</span>:: contents
        </h2>
      </Reveal>
      <div className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.title}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;

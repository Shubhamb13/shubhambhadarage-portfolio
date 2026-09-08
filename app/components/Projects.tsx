import { CalendarIcon, ExternalIcon, GithubIcon } from "./icons";
import { profile, projects } from "../data/profile";
import { Section, SectionHeading } from "./Section";

export default function Projects() {
  return (
    <Section id="projects" className="bg-white/[0.02]">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        description="Production-focused builds with real-time data fetching, debounced search, and measurable performance wins."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-indigo-500/10"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 text-indigo-300 ring-1 ring-indigo-400/30">
                <GithubIcon className="h-5 w-5" />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                <CalendarIcon className="h-3.5 w-3.5" />
                {project.date}
              </span>
            </div>

            <h3 className="mt-5 text-lg font-bold leading-snug text-white">
              {project.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-indigo-400/20 bg-indigo-500/[0.07] px-2 py-2 text-center"
                >
                  <p className="text-sm font-bold text-indigo-300">{metric.value}</p>
                  <p className="mt-0.5 text-[10px] leading-tight text-zinc-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3 border-t border-white/10 pt-5">
              <a
                href={project.source ?? profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-indigo-400/50 hover:text-white"
              >
                <GithubIcon className="h-4 w-4" />
                Source
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-zinc-200 ring-1 ring-white/15 transition-colors hover:bg-indigo-500/20 hover:text-white hover:ring-indigo-400/50"
                >
                  <ExternalIcon className="h-4 w-4" />
                  Demo
                </a>
              ) : (
                <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-zinc-600 ring-1 ring-white/10">
                  <ExternalIcon className="h-4 w-4" />
                  Demo
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
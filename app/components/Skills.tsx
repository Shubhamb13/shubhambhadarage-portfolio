import { BookIcon, CalendarIcon, skillIcons } from "./icons";
import { certifications, education, skills } from "../data/profile";
import { Section, SectionHeading } from "./Section";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Expertise"
        title="Skills & Tech Stack"
        description="A full-stack-adjacent skill set anchored in a deep specialization on the frontend."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => {
          const Icon = skillIcons[group.icon] ?? BookIcon;
          return (
            <div
              key={group.group}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors hover:border-indigo-400/30"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-400/25">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-white">{group.group}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-indigo-400/40 hover:text-indigo-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        <div className="rounded-3xl border border-indigo-400/25 bg-gradient-to-br from-indigo-500/[0.12] to-fuchsia-500/[0.08] p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-400/30">
              <CalendarIcon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-bold text-white">Education</h3>
            </div>
          </div>
          <p className="mt-4 font-semibold text-indigo-200">{education.degree}</p>
          <p className="mt-1 text-sm text-zinc-400">{education.institution}</p>
          <p className="mt-1 text-xs text-zinc-500">{education.period}</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors hover:border-fuchsia-400/30 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/15 text-fuchsia-300 ring-1 ring-fuchsia-400/25">
              <BookIcon className="h-5 w-5" />
            </span>
            <h3 className="font-bold text-white">Certifications</h3>
          </div>
          <ul className="mt-4 space-y-2">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
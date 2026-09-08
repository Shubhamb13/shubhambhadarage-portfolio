import { CalendarIcon, MapPinIcon } from "./icons";
import { experience } from "../data/profile";
import { Section, SectionHeading } from "./Section";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Career"
        title="Work Experience"
        description="Two years of hands-on experience building responsive, high-performance interfaces across product and enterprise teams."
      />

      <div className="relative">
        <div className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-indigo-500 via-white/15 to-transparent sm:left-1/2" />

        <div className="space-y-12">
          {experience.map((job, index) => (
            <div
              key={job.company}
              className={`relative grid gap-6 sm:grid-cols-2 sm:gap-12 ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              <span className="absolute top-2 left-0 h-4 w-4 rounded-full border-2 border-indigo-400 bg-zinc-950 ring-4 ring-indigo-500/15 sm:left-1/2 sm:-translate-x-1/2" />

              <div
                className={`pl-8 sm:pr-4 ${
                  index % 2 === 0
                    ? "sm:text-right sm:order-1"
                    : "sm:order-2 sm:pl-4 sm:text-left"
                }`}
              >
                <h3 className="text-lg font-bold text-white">
                  {job.role}
                  {job.current ? (
                    <span className="ml-2 align-middle rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-300">
                      Current
                    </span>
                  ) : null}
                </h3>
                <p className="mt-1 font-semibold text-indigo-300">{job.company}</p>
                <div
                  className={`mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500 ${
                    index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarIcon className="h-3.5 w-3.5" />
                    {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPinIcon className="h-3.5 w-3.5" />
                    {job.location}
                  </span>
                </div>
              </div>

              <ul
                className={`pl-8 space-y-3 ${
                  index % 2 === 0
                    ? "sm:order-2 sm:pl-4 sm:border-l sm:border-white/10"
                    : "sm:order-1 sm:pr-4 sm:border-r sm:border-white/10 sm:text-right"
                }`}
              >
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-zinc-400 backdrop-blur-xl"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
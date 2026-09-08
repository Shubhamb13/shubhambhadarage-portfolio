import {
  ArrowDownIcon,
  DownloadIcon,
  MailIcon,
  MapPinIcon,
} from "./icons";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-20 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for immediate joining
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Shubham
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Bhadarage
              </span>
            </h1>

            <p className="mt-5 text-lg font-medium text-indigo-300 sm:text-xl">
              {profile.role}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
              >
                <DownloadIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-zinc-200 backdrop-blur-xl transition-colors hover:border-indigo-400/50 hover:text-white"
              >
                <MailIcon className="h-4 w-4" />
                Get in Touch
              </a>

            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-indigo-400" />
                {profile.location}
              </span>
            
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-tr from-indigo-500/30 via-violet-500/20 to-fuchsia-500/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-zinc-300">
                    {profile.name.split(" ")[0]}
                  </span>
                  <span className="rounded-full bg-indigo-500/20 px-2.5 py-1 text-xs font-semibold text-indigo-300">
                    {"< Software Engineer />"}
                  </span>
                </div>
                <div className="mt-8 space-y-4 font-mono text-sm">
                  <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                    <p className="text-zinc-500">const developer =</p>
                    <p className="mt-2">
                      <span className="text-fuchsia-400">{"{"}</span>
                    </p>
                    <p className="pl-4 text-zinc-300">
                      name: <span className="text-emerald-400">&ldquo;Shubham&rdquo;</span>,
                    </p>
                    <p className="pl-4 text-zinc-300">
                      role: <span className="text-emerald-400">&ldquo;Software Engineer&rdquo;</span>,
                    </p>
                    <p className="pl-4 text-zinc-300">
                      focus: <span className="text-emerald-400">&ldquo;MERN Stack&rdquo;</span>,
                    </p>
                    <p className="pl-4 text-zinc-300">
                      speciality:{" "}
                      <span className="text-emerald-400">
                        &ldquo;Scalable Web Apps&rdquo;
                      </span>
                      ,
                    </p>
                    <p className="pl-4 text-zinc-300">
                      status:{" "}
                      <span className="text-emerald-400">&ldquo;open to work&rdquo;</span>,
                    </p>
                    <p className="mt-2">
                      <span className="text-fuchsia-400">{"};"}</span>
                    </p>
                  </div>
                  <p className="text-xs text-zinc-500">
                    {"// building scalable, full-stack web experiences"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#experience"
        aria-label="Scroll to experience"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-zinc-500 transition-colors hover:text-white sm:block"
      >
        <ArrowDownIcon className="h-5 w-5" />
      </a>
    </section>
  );
}
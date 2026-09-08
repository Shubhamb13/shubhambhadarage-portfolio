import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-white/[0.02]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-zinc-400 transition-colors hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-zinc-400 transition-colors hover:text-white"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
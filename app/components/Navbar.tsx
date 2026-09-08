"use client";

import { useState } from "react";
import Image from "next/image";
import { CloseIcon, GithubIcon, LinkedinIcon, MenuIcon } from "./icons";
import { profile } from "../data/profile";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="block transition-transform group-hover:scale-105"
        >
          <Image
            src="/icon.svg"
            alt={profile.name}
            width={38}
            height={38}
            className="h-9 w-9 rounded-xl"
          />
        </a>

        <div className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-zinc-400 backdrop-blur-xl transition-colors hover:border-indigo-400/40 hover:text-white"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-zinc-400 backdrop-blur-xl transition-colors hover:border-indigo-400/40 hover:text-white"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-zinc-300 backdrop-blur-xl transition-colors hover:text-white md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div className="mx-5 mt-2 rounded-2xl border border-white/10 bg-zinc-950/90 p-3 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex gap-2 border-t border-white/10 pt-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-center text-sm font-medium text-zinc-300"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-center text-sm font-medium text-zinc-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
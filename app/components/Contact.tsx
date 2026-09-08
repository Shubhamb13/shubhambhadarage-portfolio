"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
} from "./icons";
import { profile } from "../data/profile";
import { Section, SectionHeading } from "./Section";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    const body = encodeURIComponent(`Name: ${name}\n\n${message}`);
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || `Portfolio message from ${name}`
    )}&body=${body}`;

    window.location.href = mailto;
    setStatus("ready");
  }

  const contactItems = [
    {
      icon: MailIcon,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: PhoneIcon,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPinIcon,
      label: "Location",
      value: profile.location,
      href: undefined,
    },
  ];

  return (
    <Section id="contact" className="bg-white/[0.02]">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Together"
        description="Open for new opportunities, freelance projects, and software engineering roles. Drop a message or reach out on any channel."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {contactItems.map((item) => {
            const content = (
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-400/25">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {item.label}
                  </p>
                  <p className="mt-0.5 font-medium text-zinc-200">{item.value}</p>
                </div>
              </div>
            );

            const classes =
              "block w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-colors hover:border-indigo-400/40";

            return item.href ? (
              <a key={item.label} href={item.href} className={classes}>
                {content}
              </a>
            ) : (
              <div key={item.label} className={classes}>
                {content}
              </div>
            );
          })}

          <div className="flex gap-3 pt-2">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-300 backdrop-blur-xl transition-colors hover:border-indigo-400/50 hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-300 backdrop-blur-xl transition-colors hover:border-indigo-400/50 hover:text-white"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-zinc-300"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-indigo-400/60"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-zinc-300"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Job opportunity"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-indigo-400/60"
              />
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-zinc-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Tell me about your project or role..."
              className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-indigo-400/60"
            />
          </div>

          <button
            type="submit"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
          >
            <SendIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            Send Message
          </button>

          {status === "ready" ? (
            <p className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
              Your email client should open now. Looking forward to hearing from you!
            </p>
          ) : (
            <p className="mt-4 text-center text-xs text-zinc-600">
              This opens your email client with the message pre-filled.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
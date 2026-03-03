"use client"

import { useFadeIn } from "@/hooks/use-fade-in"
import { Mail } from "lucide-react"

export function CTA() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-24 bg-secondary/50"
      ref={ref}
    >
      <div
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-[1.5rem] md:text-[2rem] font-normal tracking-tight text-foreground max-w-3xl leading-tight text-balance">
          {"I'm currently taking on new projects and collaborations, reach out if you think we'd be a good fit."}
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@eniolatijani.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail size={16} />
            Email me
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            aria-label="LinkedIn profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

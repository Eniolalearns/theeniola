"use client"

import Image from "next/image"
import { useFadeIn } from "@/hooks/use-fade-in"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Adekolu",
    tag: "Framer",
    image: "/images/project-1.png",
    description:
      "Michael is a Graphic Designer and Art Director who needed his portfolio design translated into a high-performance Framer site. I focused on high-fidelity development to ensure the final build matched the design perfectly, implementing a clean CMS structure for his projects and responsive layouts that maintain his aesthetic across all devices.",
    url: "adekolu.design",
  },
  {
    title: "Querencia",
    tag: "Webflow",
    image: "/images/project-2.png",
    description:
      "Querencia needed a site that could support their expansion into the Nigerian property market and growing listings. I built a scalable Webflow website with dynamic filters and swipeable galleries, making it easier for buyers to find homes and for the team to manage content independently.",
    url: "https://querencia0.webflow.io/",
  },
  {
    title: "Medicore",
    tag: "Framer",
    image: "/images/project-3.png",
    description:
      "Medicore is a HealthTech SaaS website built in Framer. I developed the full site based on an existing landing page design, expanding it with a blog, case studies, and demo forms. The site uses Framer CMS for easy content updates, is fully responsive, and optimized for fast loading across devices.",
    url: "https://medicoree.framer.website/",
  },
  {
    title: "Frema",
    tag: "Webflow",
    image: "/images/project-4.png",
    description:
      "Frema needed a stronger web presence to support their investment fundraising. I developed their site in Webflow using the Client-First system, implemented English\u2013French translation with Weglot, added WhatsApp for quick support, and included light GSAP animations to create a smoother user experience.",
    url: "https://www.frema.io/",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const { ref, isVisible } = useFadeIn(0.1)

  return (
    <article
      ref={ref}
      className={`group flex flex-col gap-4 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <a
        href={project.url}
        className="relative block aspect-[4/3] overflow-hidden rounded-lg bg-muted cursor-pointer"
      >
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </a>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
        <span
          className="font-normal self-start"
          style={{
            fontSize: "0.8rem",
            border: "1px solid #29292B66",
            borderRadius: 5,
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 4,
            paddingBottom: 4,
            color: "#29292BE6",
            backgroundColor: "transparent",
          }}
        >
          {project.tag}
        </span>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        <a
          href={project.url}
          className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
        >
          View site
          <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  )
}

export function FeaturedWork() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          ref={ref}
          className={`text-[1.5rem] md:text-[2rem] font-normal tracking-tight text-foreground mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Featured Work
        </h2>
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

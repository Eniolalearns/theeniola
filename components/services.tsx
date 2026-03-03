"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

const services = [
  {
    name: "Webflow Development",
    description:
      "Custom Webflow websites built with clean, semantic structure, CMS integration, and smooth interactions. From landing pages to full marketing sites.",
  },
  {
    name: "Framer Development",
    description:
      "High-fidelity Framer sites with rich animations, responsive layouts, and seamless CMS workflows. Perfect for startups and creative brands.",
  },
]

function ServiceItem({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const { ref, isVisible } = useFadeIn(0.1)

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-2 border-t border-border py-8 md:flex-row md:items-start md:justify-between transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-base font-medium text-foreground md:w-64 md:flex-shrink-0">
        {service.name}
      </h3>
      <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
        {service.description}
      </p>
    </div>
  )
}

export function Services() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          ref={ref}
          className={`text-[1.5rem] md:text-[2rem] font-normal tracking-tight text-foreground mb-4 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Services
        </h2>
        <div className="mt-8">
          {services.map((service, index) => (
            <ServiceItem key={service.name} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

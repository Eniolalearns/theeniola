"use client"

import Image from "next/image"
import { useFadeIn } from "@/hooks/use-fade-in"

export function Hero() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      ref={ref}
      className={`flex min-h-[90vh] items-center pt-20 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-10 px-6 py-20">
        <div className="flex-shrink-0">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-border md:h-52 md:w-52">
            <Image
              src="/images/profile.jpg"
              alt="Profile photo of Eniola Tijani"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <h1 className="text-[2rem] font-normal leading-tight tracking-tight text-foreground md:text-[2.5rem] lg:text-[3rem] text-balance max-w-[650px]">
          {"Hi, I'm Eniola and I build refined, scalable websites for brands and agencies."}
        </h1>
      </div>
    </section>
  )
}

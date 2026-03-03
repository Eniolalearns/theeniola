"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

export function About() {
  const { ref: titleRef, isVisible: titleVisible } = useFadeIn()
  const { ref: bodyRef, isVisible: bodyVisible } = useFadeIn(0.1)

  return (
    <section id="about" className="scroll-mt-20 pt-8 pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          ref={titleRef}
          className={`text-[1.5rem] md:text-[2rem] font-normal tracking-tight text-foreground mb-4 transition-all duration-700 ease-out ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          About Me
        </h2>
        <div
          ref={bodyRef}
          className={`max-w-[650px] flex flex-col gap-5 transition-all duration-700 ease-out delay-100 ${
            bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-base text-muted-foreground leading-relaxed">
            {"Design and development have always been inseparable in my process. I\u2019ve spent the last few years building for the web, focusing on how a site scales and functions long after the launch."}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            {"My work covers a variety of sectors. Whether I\u2019m partnering with agencies or working directly with founders, my goal is the same: taking a project across the finish line and ensuring it\u2019s truly finished, from the layout to the CMS structure and interactions."}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            {"I build clean, production-ready sites in Framer and Webflow that are easy for clients to manage and built to stay solid as a business grows."}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            {"I enjoy learning new approaches and finding small ways to make the web feel better. When I\u2019m not building, I\u2019m usually at the gym or catching up on a series."}
          </p>
        </div>
      </div>
    </section>
  )
}

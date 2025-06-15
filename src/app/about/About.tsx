import React from 'react'
import ScrollFillHeading from "@/components/ScrollFillHeading";

type Props = {}

function About({ }: Props) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <ScrollFillHeading
        text="Hi There"
        className="text-[clamp(2rem,6vw,6rem)] font-bebas"
        frontClass="text-primary drop-shadow-[0_0_6px_theme(colors.primary/60%)]"
        backClass="text-gray-700 dark:text-gray-800"
      />
    </section>
  )
}

export default About
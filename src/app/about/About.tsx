import RevealText from "@/components/RevealText";

export default function About() {
  return (
    <section className="py-5 md:py-20 lg:py-30 flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center text-center px-6 max-w-7xl">
        <RevealText
          text="Tech Stack"
          className="text-[clamp(1.5rem,4vw,4rem)]"
          bgColor="#252525"
          fgColor="#e70507"
        />
      </div>
    </section>
  );
}

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import BackgroundVideo from "@/components/BackgroundVideo";
import About from './about/About';
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import Portfolio from "./portfolio/Portfolio";
import IconLink from '@/components/IconLink';

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center space-y-6 flex-wrap px-2">

        {/* BG Video */}
        <BackgroundVideo />

        {/* Headers */}
        <h1
          className="select-none text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-center drop-shadow-[0_0_12px_rgba(255,255,255,1.0)]"
        >
          Alvaro Torres
        </h1>
        <h2
          className="select-none text-2xl md:text-4xl lg:text-6xl uppercase font-bold text-center text-primary drop-shadow-[0_0_12px_rgba(255,0,0,1.0)]"
        >
          Full-Stack Software Engineer
        </h2>
        <p
          className="select-none text-sm md:text-md lg:text-lg font-bold text-center text-neutral-300 drop-shadow-[0_0_8px_rgba(255,255,255,1.0)] max-w-xl lg:max-w-5xl"
        >
          I'm a Software Engineer with 4+ years of startup experience, specializing in full-stack development and building scalable, user-focused technology using JavaScript, Java, C++, PHP, and more.
        </p>
        <span className="select-none font-mono absolute bottom-0 right-0 italic text-[.5rem] md:text-[.6rem] lg:text-[.7rem] font-syne p-4 text-primary drop-shadow-[0_0_4px_rgba(255,0,0,1.0)]">
          Software Engineer by day... Architect of code by night.
        </span>

        {/* Important Link */}
        <ul className="flex flex-row justify-center items-center gap-4 flex-wrap">
          <li>
            <IconLink extLink title="Resume" url="/documents/Alvaro_Torres_Resume.pdf" icon={<GrDocumentPdf className="text-[1.4rem]" />} />
          </li>
          <li>
            <IconLink extLink title="GitHub" url="https://github.com/alvarotorrestx" icon={<FaGithub className="text-2xl" />} />
          </li>
          <li>
            <IconLink extLink title="LinkedIn" url="https://linkedin.com/in/alvarotorrestx" icon={<FaLinkedin className="text-2xl" />} />
          </li>
          <li>
            <IconLink extLink title="Email" url="mailto:alvaro@alvarotorres.dev" icon={<MdOutlineEmail className="text-[1.75rem]" />} />
          </li>
        </ul>

      </section>

      {/* <About /> */}

      <Skills />

      <Experience />

      <Portfolio />

    </>
  );
}

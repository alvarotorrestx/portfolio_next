import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import BackgroundVideo from "@/components/BackgroundVideo";
import About from './about/About';
import Skills from "./skills/Skills";

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center space-y-4 flex-wrap">

        {/* BG Video */}
        <BackgroundVideo />

        {/* Headers */}
        <h1
          className="select-none text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-center drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
        >
          Alvaro Torres
        </h1>
        <h2
          className="select-none text-2xl md:text-4xl lg:text-6xl uppercase font-bold text-center text-primary drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
        >
          Full-Stack Software Engineer
        </h2>

        {/* Important Link */}
        <ul className="flex flex-row justify-center items-center gap-4 mt-10 flex-wrap">
          <li>
            <a href='/documents/Alvaro_Torres_Resume.pdf' title='Resume' target='_blank'
              className="inline-flex items-center justify-center p-4 hover:bg-secondary hover:text-base-100 rounded-full transition drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.7)]">
              <GrDocumentPdf className="text-lg sm:text-xl" />
            </a>
          </li>
          <li>
            <a href='https://github.com/alvarotorrestx' title='GitHub' target='_blank'
              className="inline-flex items-center justify-center p-4 hover:bg-secondary hover:text-base-100 rounded-full transition drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.7)]">
              <FaGithub className="text-lg sm:text-xl" />
            </a>
          </li>
          <li>
            <a href='https://linkedin.com/in/alvarotorrestx' title='LinkedIn' target='_blank'
              className="inline-flex items-center justify-center p-4 hover:bg-secondary hover:text-base-100 rounded-full transition drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.7)]">
              <FaLinkedin className="text-lg sm:text-xl" />
            </a>
          </li>
          <li>
            <a href='mailto:alvaro@alvarotorres.dev' title='Email' target='_blank'
              className="inline-flex items-center justify-center p-4 hover:bg-secondary hover:text-base-100 rounded-full transition drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.7)]">
              <MdOutlineEmail className="text-lg sm:text-2xl" />
            </a>
          </li>
        </ul>

      </section>

      <About />

      {/* <Skills /> */}
      
    </>
  );
}

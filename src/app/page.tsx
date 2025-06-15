import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center space-y-4 flex-wrap">
      <h1 className="text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-center">Alvaro Torres</h1>
      <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase font-bold text-center text-primary">Full-Stack Software Engineer</h2>

      <ul className="flex flex-row justify-center items-center gap-4 mt-10 flex-wrap">
        <li>
          <a href='/documents/Alvaro_Torres_Resume.pdf' title='Resume' target='_blank'
            className="inline-flex items-center justify-center p-4 hover:bg-base-300 rounded-full transition">
            <GrDocumentPdf className="text-lg sm:text-xl" />
          </a>
        </li>
        <li>
          <a href='https://github.com/alvarotorrestx' title='GitHub' target='_blank'
            className="inline-flex items-center justify-center p-4 hover:bg-base-300 rounded-full transition">
            <FaGithub className="text-lg sm:text-xl" />
          </a>
        </li>
        <li>
          <a href='https://linkedin.com/in/alvarotorrestx' title='LinkedIn' target='_blank'
            className="inline-flex items-center justify-center p-4 hover:bg-base-300 rounded-full transition">
            <FaLinkedin className="text-lg sm:text-xl" />
          </a>
        </li>
        <li>
          <a href='mailto:alvaro@alvarotorres.dev' title='Email' target='_blank'
            className="inline-flex items-center justify-center p-4 hover:bg-base-300 rounded-full transition">
            <MdOutlineEmail className="text-lg sm:text-2xl" />
          </a>
        </li>
      </ul>

    </section>
  );
}

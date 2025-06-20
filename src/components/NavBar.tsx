"use client";

import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const navLinks = [
    { name: "Home", to: "home" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Portfolio", to: "portfolio" },
];

export default function NavBar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex fixed top-0 left-1/2 translate-x-[-50%] z-50 backdrop-blur bg-black/40 rounded-full p-6 mt-6"
        >
            <div className="flex gap-6 items-center font-mono text-sm md:text-base uppercase">
                {navLinks.map(({ name, to }) => (
                    <ScrollLink
                        key={to}
                        to={to}
                        smooth={true}
                        duration={600}
                        offset={-80}
                        spy={true}
                        hashSpy={true}
                        isDynamic={true}
                        activeClass="text-primary"
                        className="cursor-pointer hover:text-primary transition-all"
                    >   

                        {name}
                    </ScrollLink>
                ))}

                <a
                    href="mailto:alvaro@alvarotorres.dev"
                    className="flex justify-center items-center gap-1 cursor-pointer text-primary drop-shadow-[0_0_6px_red] transition-all"
                    title="Send Email"
                >
                    Contact <FaEnvelope className="text-base" />
                </a>
            </div>
        </motion.nav>
    );
}

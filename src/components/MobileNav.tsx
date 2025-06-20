"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { MdOutlineMenu, MdClose } from "react-icons/md";

const navLinks = [
    { name: "Home", to: "home" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Portfolio", to: "portfolio" },
];

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <div className="md:hidden fixed top-4 right-4 z-[100]">
                <button onClick={toggleMenu} className="p-3 bg-black/40 rounded-full backdrop-blur">
                    {isOpen ? <MdClose size={24} /> : <MdOutlineMenu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="md:hidden fixed top-0 right-0 max-w-[325px] w-3/4 h-full bg-black/95 z-50 flex flex-col items-start px-6 py-10 gap-8 shadow-2xl"
                    >
                        <nav className="flex flex-col gap-6 w-full text-lg font-mono uppercase">
                            {navLinks.map(({ name, to }) => (
                                <ScrollLink
                                    key={to}
                                    to={to}
                                    smooth={true}
                                    duration={600}
                                    offset={0}
                                    spy={true}
                                    hashSpy={true}
                                    isDynamic={true}
                                    onClick={closeMenu}
                                    activeClass="text-primary"
                                    className="cursor-pointer hover:text-primary transition-all"
                                >
                                    {name}
                                </ScrollLink>
                            ))}

                            <a
                                href="mailto:alvaro@alvarotorres.dev"
                                className="flex items-center gap-2 text-primary hover:underline transition-all"
                                onClick={closeMenu}
                            >
                                Contact <FaEnvelope className="text-base" />
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

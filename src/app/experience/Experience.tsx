"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GiBatMask } from "react-icons/gi";
import { MdArrowForward } from "react-icons/md";
import RevealText from '@/components/RevealText'

type Experience = {
    title: string;
    company: string;
    date: string;
    description: string;
};

const experiences: Experience[] = [
    {
        title: "Lead Full-Stack Software Engineer",
        company: "DevConnect",
        date: "March 2025 - Present",
        description:
            "Building a MERN-based developer platform with modular, scalable architecture and role-based access control. Leading front and back-end development, API design, and accessibility improvements while coordinating open-source contributors through GitHub and Discord.",
    },
    {
        title: "Web Developer",
        company: "Simulint Innovations",
        date: "June 2021 - Present",
        description:
            "Delivering custom web solutions for small businesses using React, JavaScript, and modern CMS platforms like Wix, Shopify, WordPress, Webflow and Squarespace. Projects focus on UI component design, performance optimization, and third-party integrations to drive user engagement and client conversions.",
    },
    {
        title: "Lead Back-End Software Engineer",
        company: "Heroic Organizer",
        date: "April 2025 - June 2025",
        description:
            "Developed an Android app for comic book collectors using Java, Firebase, and RESTful APIs to enable real-time search and data entry. Integrated Google ML Kit for OCR, image labeling, and metadata retrieval through Weaviate to support intelligent cataloging.",
    },
    {
        title: "Director of Marketing & IT",
        company: "Hacienda Mobile Home Sales",
        date: "July 2021 - January 2024",
        description:
            "Led digital transformation by migrating the company website from a legacy PHP/MySQL stack to WiX and automating inventory workflows with VBA and JSON. Directed a hybrid team to deliver agile updates, enhance UX, and cut latency by over 60% through front-end rebuilds and CI/CD pipelines.",
    },
];

const Experience = () => {
    return (
        <section className="py-10 px-4 max-w-[52rem] mx-auto w-full flex flex-col justify-center items-center">
            <RevealText
                text="Experience"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
                bgColor="#252525"
                fgColor="#e70507"
            />

            <div className="relative my-12 border-l-2 border-primary">
                {experiences.map((exp, index) => {
                    const ref = useRef<HTMLDivElement>(null);
                    const { scrollYProgress } = useScroll({
                        target: ref,
                        offset: ["start 100%", "end 10%"],
                    });

                    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
                    const y = useTransform(scrollYProgress, [0, 0.2], [20, 0]);

                    return (
                        <motion.div
                            key={`${exp.company}-${index}`}
                            ref={ref}
                            style={{ opacity, y }}
                            className="[&:not(:last-child)]:mb-8 ml-6 relative rounded-xl"
                        >
                            <span className="absolute -left-[40.5px] top-1.5 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md">
                                <GiBatMask className="text-black text-lg" />
                            </span>

                            <div className="group border border-accent p-6 rounded-xl transition-all
                              hover:bg-secondary hover:drop-shadow-[0_0_8px_rgb(255,255,255,0.7)]">
                                <h3 className="group-hover:text-white text-lg font-semibold text-primary">
                                    {exp.title}
                                </h3>
                                <p className="group-hover:text-black text-base-content font-medium mb-1">
                                    {exp.company}
                                </p>
                                <span className="group-hover:text-gray-200 text-sm text-gray-400 italic mb-3 block">
                                    {exp.date}
                                </span>
                                <p className="group-hover:text-black text-base-content text-sm font-semibold leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <a href='/documents/Alvaro_Torres_Resume.pdf' title='Resume' target='_blank'
                className="justify-center px-4 py-3 my-4 group inline-flex items-center gap-2 border border-accent rounded-full
                      transition-all duration-300 ease-in-out text-base font-bold
                      hover:bg-secondary hover:text-base-100 
                      hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
                View My Resume <MdArrowForward className="text-lg sm:text-2xl" />
            </a>
        </section>
    )
}

export default Experience
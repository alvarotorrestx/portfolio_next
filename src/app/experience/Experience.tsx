"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GiBatMask } from "react-icons/gi";
import { FiExternalLink } from "react-icons/fi";
import RevealText from '@/components/RevealText'
import CTALink from "@/components/CTALink";

type Experience = {
    title: string;
    company: string;
    date: string;
    description: string;
};

const experiences: Experience[] = [
    {
        title: "Contact Center Operations Specialist",
        company: "Finance of America",
        date: "January 2024 - Present",
        description:
            "Promoted from Customer Service Representative into a technical operations role supporting fintech contact center performance, Workforce Management in Genesys Cloud, cross-functional issue resolution, and reporting automation. Partner with customer service, sales, telecom, Salesforce, and executive stakeholders to identify service gaps, improve staffing visibility, and streamline workflows using Excel, VBA, Python, and operational data.",
    },
    {
        title: "Freelance Web Developer",
        company: "Simulint Innovations",
        date: "June 2021 - Present",
        description:
            "Design, develop, and maintain custom websites and business solutions for small businesses across Shopify, Wix, Squarespace, Webflow, and WordPress. Build JavaScript functionality, API integrations, lead capture workflows, and performance optimizations that improve customer engagement, site speed, and client conversion outcomes.",
    },
    {
        title: "Director of Marketing & IT",
        company: "Hacienda Mobile Home Sales",
        date: "July 2021 - January 2024",
        description:
            "Managed marketing and IT workflows for a mobile home sales organization, partnering with leadership and property managers to improve website operations, customer engagement, and business processes. Migrated a legacy PHP/MySQL website to Wix using JavaScript and Velo, and built Excel VBA automation to convert inventory data into JSON for live website updates.",
    },
];

function TimelineEntry({ exp }: { exp: Experience }) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 100%", "end 10%"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2], [20, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y }}
            className="[&:not(:last-child)]:mb-8 ml-6 relative rounded-sm"
        >
            <span className="absolute -left-[40.5px] top-1.5 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md">
                <GiBatMask className="text-black text-lg" />
            </span>

            <div className="border border-accent p-6 rounded-lg transition-all">
                <h3 className="text-lg font-semibold text-primary">{exp.title}</h3>
                <p className="text-base-content font-medium mb-1">{exp.company}</p>
                <span className="text-sm text-gray-400 italic mb-3 block">{exp.date}</span>
                <p className="text-base-content text-sm font-semibold leading-relaxed">
                    {exp.description}
                </p>
            </div>
        </motion.div>
    );
}

const Experience = () => {
    return (
        <section id="experience" className="py-10 px-4 max-w-[52rem] mx-auto w-full flex flex-col justify-center items-center">
            <RevealText
                text="Experience"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
                bgColor="#252525"
                fgColor="#e70507"
            />

            <div className="relative my-12 border-l-2 border-primary">
                {experiences.map((exp, index) => (
                    <TimelineEntry key={`${exp.company}-${index}`} exp={exp} />
                ))}
            </div>

            {/* Resume Link */}
            <CTALink extLink url={"/documents/Alvaro_Torres_Resume.pdf"} text={"View My Resume"} icon={<FiExternalLink />} />

        </section>
    )
}

export default Experience
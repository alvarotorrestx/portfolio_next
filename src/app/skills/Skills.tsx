"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { SiJavascript, SiTypescript, SiDatabricks, SiHtml5, SiCss3, SiNextdotjs, SiVuedotjs, SiExpress, SiGithubactions, SiReact, SiTailwindcss, SiNodedotjs, SiCplusplus, SiMongoose, SiPhp, SiFirebase, SiMongodb, SiDocker, SiPostman } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbSql, TbBrandMysql } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import RevealText from "@/components/RevealText";

const skills = {
    "Languages": [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Java", icon: FaJava },
        { name: "C++", icon: SiCplusplus },
        { name: "PHP", icon: SiPhp },
        { name: "SQL", icon: TbSql },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
    ],
    "Front-End": [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Vue.js", icon: SiVuedotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    "Back-End": [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
    ],
    "Databases": [
        { name: "MongoDB", icon: SiMongodb },
        { name: "Mongoose", icon: SiMongoose },
        { name: "Firebase", icon: SiFirebase },
        { name: "Firestore", icon: SiFirebase },
        { name: "MySQL", icon: TbBrandMysql },
    ],
    "Tools & DevOps": [
        { name: "Git", icon: FaGitAlt },
        { name: "Postman", icon: SiPostman },
        { name: "Docker", icon: SiDocker },
        { name: "CI/CD", icon: SiGithubactions },
    ],
    "AI & ML Tools": [
        { name: "Google ML Kit", icon: GrGoogle },
        { name: "Weaviate", icon: SiDatabricks },
    ],
};


export default function Skills() {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center">
                <RevealText
                    text="Tech Stack"
                    className="text-[clamp(1.5rem,4vw,4rem)]"
                    bgColor="#252525"
                    fgColor="#e70507"
                />
            </div>

            <div className="mt-16 space-y-12">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                        <h3 className="text-lg uppercase tracking-widest text-primary mb-4 font-bebas">{category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {items.map((skill, i) => {
                                const ref = useRef(null);
                                const { scrollYProgress } = useScroll({
                                    target: ref,
                                    offset: ["start 100%", "end 10%"],
                                });

                                const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
                                const y = useTransform(scrollYProgress, [0, 0.2], [20, 0]);

                                return (
                                    <motion.div
                                        key={skill.name}
                                        ref={ref}
                                        style={{ opacity, y }}
                                        className="flex items-center gap-3 p-4 border border-zinc-700 rounded-lg hover:border-primary transition-transform hover:scale-105"
                                    >
                                        <skill.icon className="text-primary text-2xl" />
                                        <span className="text-sm font-medium text-base-content uppercase">{skill.name}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

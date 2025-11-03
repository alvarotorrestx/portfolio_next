"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { IconType } from "react-icons";
import {
    SiJavascript, SiTypescript, SiHtml5, SiCss3, SiNextdotjs, SiVuedotjs,
    SiExpress, SiGithubactions, SiReact, SiTailwindcss, SiNodedotjs,
    SiCplusplus, SiMongoose, SiPhp, SiFirebase, SiMongodb, SiDocker,
    SiPostman, SiJest, SiJira, SiRedis, SiOpenai, SiGithub, SiSwagger,
    SiTensorflow, SiKeras, SiPandas, SiScikitlearn, SiFastapi, SiVite,
    SiSoundcharts, SiDatabricks, SiPostgresql
} from "react-icons/si";
import { FaJava, FaPython } from "react-icons/fa6";
import { TbSql, TbBrandMysql } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import RevealText from "@/components/RevealText";

function SkillPill({ name, Icon }: { name: string; Icon: IconType }) {
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
            className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 border border-accent rounded-lg
                 transition-all duration-300 ease-in-out"
        >
            <Icon className="text-primary text-lg sm:text-2xl flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-base-content uppercase whitespace-nowrap">
                {name}
            </span>
        </motion.div>
    );
}

const skills: Record<string, { name: string; icon: IconType }[]> = {
    "Programming": [
        { name: "Python", icon: FaPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "C++", icon: SiCplusplus },
        { name: "Java", icon: FaJava },
        { name: "PHP", icon: SiPhp },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
    ],

    "AI & Data Science": [
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "Keras", icon: SiKeras },
        { name: "Pandas", icon: SiPandas },
        { name: "scikit-learn", icon: SiScikitlearn },
        { name: "Weaviate", icon: SiDatabricks },
        { name: "Google ML Kit", icon: GrGoogle },
        { name: "Power BI", icon: SiSoundcharts },
    ],

    "Frameworks": [
        { name: "FastAPI", icon: SiFastapi },
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Vite", icon: SiVite },
        { name: "Vue.js", icon: SiVuedotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Express.js", icon: SiExpress },
        { name: "Node.js", icon: SiNodedotjs },
    ],

    "Tools & Services": [
        { name: "OpenAI", icon: SiOpenai },
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: SiGithub },
        { name: "RESTful APIs", icon: SiSwagger },
        { name: "CI/CD", icon: SiGithubactions },
        { name: "Jest", icon: SiJest },
        { name: "Jira", icon: SiJira },
        { name: "Redis", icon: SiRedis },
        { name: "Postman", icon: SiPostman },
        { name: "Firebase", icon: SiFirebase },
        { name: "Firestore", icon: SiFirebase },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Mongoose", icon: SiMongoose },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Docker", icon: SiDocker },
        { name: "SQL", icon: TbSql },
        { name: "MySQL", icon: TbBrandMysql },
    ],
};


export default function Skills() {
    return (
        <section id="skills" className="pb-10 pt-20 px-4 max-w-5xl mx-auto w-full flex flex-col justify-center items-center">
            <RevealText
                text="Tech Stack"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
                bgColor="#252525"
                fgColor="#e70507"
            />

            <div className="my-12 grid gap-x-12 gap-y-14 md:grid-cols-2 w-full">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="space-y-6">
                        {/* category heading */}
                        <h3 className="text-base uppercase tracking-widest text-primary font-mono">
                            {category}
                        </h3>

                        {/* skills pills */}
                        <div className="flex flex-wrap gap-4">
                            {items.map(({ name, icon: Icon }) => (
                                <SkillPill key={name} name={name} Icon={Icon} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


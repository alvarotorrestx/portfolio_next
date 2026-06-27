"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

export default function ProjectNotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-base-100">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center gap-4"
            >
                <img src="/images/brand/banner_red.png" alt="Batman Beyond Logo" className="w-50 drop-shadow-[0_0_8px_rgba(255,0,0,1)]" />

                <h1 className="text-4xl md:text-6xl font-bold text-primary">
                    404: Project Not Found
                </h1>

                <p className="text-base-content text-lg max-w-xl">
                    Looks like this project got lost in the shadows of Neo-Gotham.
                    The project you&#39;re looking for doesn&#39;t exist… or it might&#39;ve been archived by Wayne-Powers. 🦇
                </p>

                <Link
                    href="/#portfolio"
                    className="justify-center px-4 py-3 my-4 group inline-flex items-center gap-2 rounded-lg
                                hover:text-base-content font-bold transition-all duration-500 ease-in-out
                                bg-secondary hover:bg-base-100 text-base-100 drop-shadow-[0_0_8px_rgba(255,0,0,1)]
                                relative z-10 animate-border-glow"
                >
                    <FiArrowLeft className="text-2xl" /> Back to Portfolio
                </Link>
            </motion.div>
        </div>
    );
}

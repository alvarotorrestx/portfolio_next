"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { GiBatMask } from "react-icons/gi";

export default function NotFound() {
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
                    404: Page Not Found
                </h1>

                <p className="text-base-content text-lg max-w-xl">
                    Looks like you&#39;re wandering Gotham without a map. The page you&#39;re
                    looking for doesn&#39;t exist… or it might&#39;ve been taken by the Joker. 🃏
                </p>

                <Link
                    href="/"
                    className="justify-center px-4 py-3 my-4 group inline-flex items-center gap-2 rounded-lg
                                hover:text-base-content font-bold transition-all duration-500 ease-in-out
                                bg-secondary hover:bg-base-100 text-base-100 drop-shadow-[0_0_8px_rgba(255,0,0,1)]
                                relative z-10 animate-border-glow"
                >
                    <FiArrowLeft className="text-2xl" /> Return Home
                </Link>
            </motion.div>
        </div>
    );
}

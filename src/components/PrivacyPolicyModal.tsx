"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef } from "react";

type PrivacyPolicyModalProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
};

export default function PrivacyPolicyModal({ open, setOpen }: PrivacyPolicyModalProps) {
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("keydown", handleKey);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("keydown", handleKey);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, setOpen]);

    return (
        <>
            {open && (
                <div className="fixed inset-0 bg-black/75 bg-opacity-70 flex items-center justify-center z-50">
                    <motion.div
                        ref={dialogRef}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="bg-base-100 text-base-content p-6 rounded-xl max-w-xl w-full shadow-xl relative max-h-[85vh] overflow-y-auto"
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="cursor-pointer absolute top-3 right-3 text-xl font-bold text-primary hover:text-red-500 transition"
                        >
                            &times;
                        </button>
                        <h2 className="text-lg font-semibold mb-4 text-primary">Privacy Policy</h2>

                        <p className="text-sm mb-4 font-semibold">Effective Date: <span className="font-normal">June 2026</span></p>
                        <p className="text-sm mb-4">
                            This portfolio collects limited analytics to improve the experience for visitors.
                        </p>

                        <h3 className="text-sm font-semibold mb-2">Information Collected</h3>
                        <p className="text-sm mb-2">
                            This website may collect anonymous usage information such as:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm mb-4 ml-2">
                            <li>Pages visited</li>
                            <li>Device and browser information</li>
                            <li>Session recordings and heatmaps</li>
                            <li>Clicks and scrolling behavior</li>
                        </ul>
                        <p className="text-sm mb-4">
                            This information does not include passwords, payment information, or sensitive personal data.
                        </p>

                        <h3 className="text-sm font-semibold mb-2">Analytics</h3>
                        <p className="text-sm mb-2">This website uses:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm mb-4 ml-2">
                            <li>Microsoft Clarity</li>
                            <li>Google Analytics</li>
                        </ul>
                        <p className="text-sm mb-4">
                            These services help me understand how visitors interact with the portfolio so I can improve its usability and showcase projects more effectively.
                        </p>

                        <h3 className="text-sm font-semibold mb-2">Contact</h3>
                        <p className="text-sm mb-2">
                            If you have any questions regarding this website or its privacy practices, you can contact me at:
                        </p>
                        <p className="text-sm">
                            <a className="text-primary link" href="mailto:alvaro@alvarotorres.dev">alvaro@alvarotorres.dev</a>
                        </p>
                    </motion.div>
                </div>
            )}
        </>
    );
}

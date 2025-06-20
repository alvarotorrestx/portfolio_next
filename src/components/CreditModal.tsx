"use client";

import { motion } from 'framer-motion';

type CreditModalProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
};

export default function CreditModal({ open, setOpen }: CreditModalProps) {

    return (
        <>
            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="bg-base-100 text-base-content p-6 rounded-xl max-w-xl w-full shadow-xl relative"
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="cursor-pointer absolute top-3 right-3 text-xl font-bold text-primary hover:text-red-500 transition"
                        >
                            &times;
                        </button>
                        <h2 className="text-lg font-semibold mb-4 text-primary">Artwork & Attribution</h2>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <strong>Portfolio Project Image: </strong> 
                                <a className='text-primary link' href="https://wall.alphacoders.com/big.php?i=1353554" target="_blank">Alley art by KJ via AlphaCoders</a> – Free for Personal Use.
                            </li>
                            <li>
                                <strong>Header Live Video: </strong> 
                                <a className='text-primary link' href="https://moewalls.com/movies/batman-beyond-live-wallpaper/" target="_blank">Batman Beyond animation via MoeWalls</a> – for non-commercial use.
                            </li>
                            <li>
                                <strong>Cursor Logo: </strong> <a className='text-primary link' href="https://seeklogo.com/vector-logo/17083/batman-beyond-batman-do-futuro" target="_blank">Batman Beyond vector icon via SeekLogo</a> – edited for personal use.
                            </li>
                            <li>
                                Batman, Batman Beyond, and all associated imagery are © DC Comics / Warner Bros.
                                This site is fan-made and unaffiliated. Used for personal portfolio presentation only.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            )}
        </>
    );
}

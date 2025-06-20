"use client";

import { useState } from 'react';
import IconLink from '@/components/IconLink';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import CreditModal from './CreditModal';

const Footer = () => {

    const [open, setOpen] = useState(false);

    return (
        <footer className="footer footer-horizontal footer-center bg-base-300 text-primary-content py-15 px-5">
            {/* Footer Links */}
            <nav>
                <ul className="flex flex-row justify-center items-center gap-4 flex-wrap">
                    <li>
                        <IconLink extLink title="Resume" url="/documents/Alvaro_Torres_Resume.pdf" icon={<GrDocumentPdf className="text-[1.15rem] md:text-[1.4rem]" />} />
                    </li>
                    <li>
                        <IconLink extLink title="GitHub" url="https://github.com/alvarotorrestx" icon={<FaGithub className="text-xl md:text-2xl" />} />
                    </li>
                    <li>
                        <IconLink extLink title="LinkedIn" url="https://linkedin.com/in/alvarotorrestx" icon={<FaLinkedin className="text-xl md:text-2xl" />} />
                    </li>
                    <li>
                        <IconLink extLink title="Email" url="mailto:alvaro@alvarotorres.dev" icon={<MdOutlineEmail className="text-[1.5rem] md:text-[1.75rem]" />} />
                    </li>
                </ul>
            </nav>

            <aside>
                <img src="/images/brand/banner_red.png" alt="Logo Banner" className="w-35 md:w-50" />
                <p className="font-bold flex flex-row gap-2 justify-center items-center">
                    Theme inspired by Batman Beyond.
                    <img src="/images/icons/cursor.png" alt="Batman Beyond Logo" className="w-5" />
                </p>
                <p>Copyright© {new Date().getFullYear()}.  Alvaro Torres. All Right Reserved.</p>
                <button onClick={() => setOpen(true)} className='font-bold p-4 text-primary hover:underline cursor-pointer'>Artwork Credits</button>
            </aside>

            <CreditModal open={open} setOpen={setOpen} />

        </footer>
    )
}

export default Footer
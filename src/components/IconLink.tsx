"use client";

import NextLink from "next/link";
import { ReactNode } from "react";

type LinkProps = {
    extLink?: boolean;
    url: string;
    title: string;
    icon?: ReactNode;
};

const Link = ({ extLink = false, url, title, icon }: LinkProps) => {
    const classes =
        `
        inline-flex items-center justify-center p-4 hover:bg-secondary hover:text-base-100 rounded-lg 
        transition drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.7)]
        `;

    return (
        <a
            href={url}
            title={title}
            target={extLink ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={classes}
        >
            {icon}
        </a>
    );
};

export default Link;
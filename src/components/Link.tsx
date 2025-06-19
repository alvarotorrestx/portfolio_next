"use client";

import NextLink from "next/link";
import { ReactNode } from "react";

type LinkProps = {
  extLink?: boolean;
  url: string;
  text: string;
  icon?: ReactNode;
};

const Link = ({ extLink = false, url, text, icon }: LinkProps) => {
  const classes =
    `
      justify-center px-4 py-3 my-4 group inline-flex items-center gap-2 rounded-lg
      hover:text-base-content font-bold transition-all duration-500 ease-in-out
      bg-secondary hover:bg-base-100 text-base-100 drop-shadow-[0_0_8px_rgba(255,0,0,1)]
      relative z-10 animate-border-glow
    `;

  if (extLink) {
    return (
      <a
        href={url}
        target={extLink ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={classes}
      >
        {text} {icon}
      </a>
    );
  }

  return (
    <NextLink
      href={url}
      className={classes}
    >
      {text} {icon}
    </NextLink>
  );
};

export default Link;
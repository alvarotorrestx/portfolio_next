import { ComponentType, ReactNode } from "react";

type LinkProps = {
  url: string;
  text: string;
  icon?: ReactNode;
  newPage: boolean;
};

const Link = ({ url, text, icon, newPage }: LinkProps) => {
  return (
    <a
      href={url}
      target={newPage ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="justify-center px-4 py-3 my-4 group inline-flex items-center gap-2 rounded-full
             text-base font-bold transition-all duration-500 ease-in-out
             hover:bg-secondary hover:text-base-100 hover:drop-shadow-[0_0_8px_rgba(255,0,0,1)]
             relative z-10 animate-border-glow"
    >
      {text} {icon}
    </a>

  );
};

export default Link;

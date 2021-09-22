import React, { ReactElement } from "react";

const Link = ({ href, text, icon, blank }: LinkProps) => {
  return (
    <a
      href={href}
      target={blank ? "_blank" : ""}
      rel="noreferrer"
      className="flex flex-row items-center underline hover:text-blue-300"
    >
      {icon} <span className="pl-1">{text}</span>
    </a>
  );
};

export default Link;

type LinkProps = {
  href: string;
  text?: string;
  icon?: ReactElement;
  blank?: boolean;
};

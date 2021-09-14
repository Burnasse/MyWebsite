import React from "react";
import { SiKotlin, SiJava, SiJavascript } from "react-icons/si";

const icons = {
  kotlin: <SiKotlin />,
  java: <SiJava />,
  javascript: <SiJavascript />,
};

const ProjectCard = ({
  title,
  language,
  description,
  url,
  image,
  optionalUrl,
}: ProjectCardProps) => {
  return (
    <a href={url} target="_blank" className="flex flex-col bg-gray-100 p-10 m-5 rounded-lg shadow-lg hover:bg-gray-300">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="my-2">{description}</div>
      {language && (
        <div className="flex flex-row items-center">
          {icons[language.toLowerCase()]} <span className="pl-1">{language}</span>
        </div>
      )}
    </a>
  );
};

type ProjectCardProps = {
  title: string;
  language: string;
  description: string;
  url: string;
  image?: string;
  optionalUrl?: string;
};

export default ProjectCard;

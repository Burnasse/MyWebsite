import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

const reposNames = [
  "DuelCounter-MobileApplication",
  "ProjetWEB_amu_CollaborativeMusic",
  "lyky-website",
  "KlapeWebsite",
];

const ProjectsComponent = () => {
  const [repos, setRepos] = useState([]);

  const getRepos = () => {
    axios
      .get("https://api.github.com/users/Burnasse/repos")
      .then((response) => {
        const result = response.data.filter(({ name }: any) =>
          reposNames.find((element) => element === name)
        );
        console.log(result);
        setRepos(result);
      });
  };

  useEffect(() => getRepos(), []);

  return (
    <div className="grid grid-cols-2 break-words">
      {repos.map((repo: any) => (
        <ProjectCard
          key={repo.name}
          title={repo.name}
          language={repo.language}
          description={repo.description}
          url={repo.html_url}
        />
      ))}
    </div>
  );
};

export default ProjectsComponent;

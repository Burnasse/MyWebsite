import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import ProjectsComponent from "./ProjectsComponent";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import Link from "./Link";

enum Tab {
  Work,
  Education,
  Contact,
  None,
}

const GithubLink = (
  <Link
    href="https://github.com/Burnasse"
    text="Github"
    icon={<SiGithub />}
    blank
  />
);
const LinkedinLink = (
  <Link
    href="www.linkedin.com/in/tommy-lecourt"
    text="Linkedin"
    icon={<SiLinkedin />}
    blank
  />
);

const HeroSection = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.None);

  const handleWorkButton = () => {
    currentTab === Tab.Work ? setCurrentTab(Tab.None) : setCurrentTab(Tab.Work);
  };

  const handleEducationButton = () => {
    currentTab === Tab.Education
      ? setCurrentTab(Tab.None)
      : setCurrentTab(Tab.Education);
  };

  const handleContactButton = () => {
    currentTab === Tab.Contact
      ? setCurrentTab(Tab.None)
      : setCurrentTab(Tab.Contact);
  };

  return (
    <div className=" bg-blue-500 min-h-screen flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex flex-grow flex-col items-center justify-center text-white text-center">
        <StaticImage
          src="../assets/images/profilPic.jpg"
          alt="Tommy Lecourt"
          placeholder="blurred"
          width={200}
          height={200}
          className="m-5 rounded-full"
        />
        <h1 className="text-3xl font-bold">Hi, my name is Tommy Lecourt</h1>
        <h2>Student developer</h2>
        <div className="flex flex-row">
          <Button onClick={handleWorkButton}>Work</Button>
          <Button onClick={handleEducationButton}>Education</Button>
          <Button onClick={handleContactButton}>Contact</Button>
        </div>
        <div className=" grid grid-cols-2 gap-5">
          {LinkedinLink}
          {GithubLink}
        </div>
      </div>

      <motion.div
        animate={{
          opacity: currentTab === Tab.Work ? 1 : 0,
          width: currentTab === Tab.Work ? "100%" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center h-screen"
      >
        <ProjectsComponent />
      </motion.div>

      <motion.div
        animate={{
          opacity: currentTab === Tab.Work ? 1 : 0,
          width: currentTab === Tab.Work ? "100%" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        
      </motion.div>

      <motion.div
        animate={{
          opacity: currentTab === Tab.Contact ? 1 : 0,
          width: currentTab === Tab.Contact ? "100%" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center text-white"
      >
        <h2 className="text-5xl font-bold">Contact</h2>
        <ul className="mt-10 text-xl inline-block">
          <li>
            <Link
              href="mailto: tommy.lecourt@gmail.com"
              text="Send Mail"
              icon={<FiMail />}
            />
          </li>
          <li className="my-2">{LinkedinLink}</li>
          <li>{GithubLink}</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default HeroSection;

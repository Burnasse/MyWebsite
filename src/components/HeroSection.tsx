import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import ProjectsComponent from "./ProjectsComponent";
import { motion } from "framer-motion";
import Button from "./Button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import Link from "./Link";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";

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
    href="https://linkedin.com/in/tommy-lecourt"
    text="Linkedin"
    icon={<SiLinkedin />}
    blank
  />
);

const HeroSection = () => {
  const { t } = useTranslation();
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
    <div className="flex flex-col min-h-screen bg-gray-800 lg:flex-row md:overflow-hidden">
      <div className="flex flex-col items-center justify-center flex-grow w-full text-center text-white">
        <StaticImage
          src="../assets/images/profilPic.jpg"
          alt="Tommy Lecourt"
          placeholder="blurred"
          width={200}
          height={200}
          className="relative block m-5 border-2 rounded-full"
        />
        <h1 className="text-3xl font-bold">
          Tommy Lecourt
        </h1>
        <h2>{t("Student in computer science")}</h2>
        <div className="flex flex-row">
          <Button onClick={handleWorkButton} active={currentTab === Tab.Work}>
            {t("Work")}
          </Button>
          <Button
            onClick={handleEducationButton}
            active={currentTab === Tab.Education}
          >
            {t("Education")}
          </Button>
          <Button
            onClick={handleContactButton}
            active={currentTab === Tab.Contact}
          >
            {t("Contact")}
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-5 ">
          {LinkedinLink}
          {GithubLink}
        </div>
        <LanguageSwitch />
      </div>
      <motion.div
        animate={{ width: currentTab !== Tab.None ? "100%" : "0%" }}
        className="mb-5 lg:mb-0 lg:mr-5"
      >
        {/** Work */}
        <motion.div
          animate={{
            opacity: currentTab === Tab.Work ? 1 : 0,
            width: currentTab === Tab.Work ? "100%" : 0,
            display: currentTab === Tab.Work ? "flex" : "none",
          }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center lg:h-screen"
        >
          <ProjectsComponent />
        </motion.div>

        {/** Education */}
        <motion.div
          animate={{
            opacity: currentTab === Tab.Education ? 1 : 0,
            width: currentTab === Tab.Education ? "100%" : 0,
            display: currentTab === Tab.Education ? "flex" : "none",
          }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-white md:flex-row lg:h-screen"
        >
          <div className="m-5 lg:pr-10">
            <h3 className="text-xl font-bold">{t("BachelorTitle")}</h3>
            <ul className="pl-5 list-disc">
              <div className="pt-3 font-bold"> {t("Notions covered")}: </div>
              <li>{t("Algorithm")}</li>
              <li>{t("Software engineering")}</li>
              <li>{t("OOP")}</li>
              <li>{t("Database / relational database")}</li>
              <li>{t("System and network")}</li>
              <li>{t("Web")}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">{t("MasterTitle")}</h3>
            <h4 className="italic font-thin ">{t("SpecializationTitle")}</h4>
            <ul className="pl-5 list-disc">
              <div className="pt-3 font-bold"> {t("Notions covered")}: </div>
              <li>{t("Advanced Algorithm")}</li>
              <li>Java EE / Spring</li>
              <li>Dev Ops</li>
              <li>{t("Human Machine Interface")}</li>
            </ul>
          </div>
        </motion.div>

        {/** Contact */}
        <motion.div
          animate={{
            opacity: currentTab === Tab.Contact ? 1 : 0,
            width: currentTab === Tab.Contact ? "100%" : 0,
            display: currentTab === Tab.Contact ? "flex" : "none",
          }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center w-1/2 p-24 text-white lg:h-screen"
        >
          <ul className="inline-block mt-10 text-2xl">
            <li>
              <Link
                href="mailto: tommy.lecourt@gmail.com"
                text="Send Mail"
                icon={<FiMail />}
              />
            </li>
            <li className="my-5">{LinkedinLink}</li>
            <li>{GithubLink}</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

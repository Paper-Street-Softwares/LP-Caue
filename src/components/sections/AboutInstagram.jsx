import React from "react";
import { useTranslation } from "react-i18next";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SocialPrint from "../sectionElements/aboutInstagram/SocialPrint";
import DefaultInstagram from "../sectionElements/aboutInstagram/DefaultInstagram";
import ParagraphsAboutSocial from "../sectionElements/aboutInstagram/ParagraphsAboutSocial";
import RedesSociais from "../sectionElements/aboutInstagram/RedesSociais";

export default function AboutInstagram({ socialPrint, colorMode }) {
  const { t } = useTranslation();

  // Definir classes de tema
  const bgClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "bg-bgSectionDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea id="about" className={`${bgClass}`} paddingtop={false}>
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop1:gap-x-[40px] desktop1:justify-between">
        {socialPrint ? (
          <SocialPrint colorMode={colorMode} />
        ) : (
          <DefaultInstagram colorMode={colorMode} />
        )}
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <MotionDivDownToUp>
            <SectionHeader
              className={`text-center`}
              miniTitle={t("about.aboutSocial.miniTag")}
              sectionHeaderTitle={t("about.aboutSocial.title")}
              sectionHeaderSubtitle={t("about.aboutSocial.subtitle")}
              type="article"
              titleColorSet={textClass}
              subtitleColorSet={textClass}
            />
          </MotionDivDownToUp>
          <ParagraphsAboutSocial colorMode={colorMode} />
          <div>
            <RedesSociais
              instagram={false}
              facebook={false}
              x={false}
              tiktok={false}
              linkedin={false}
            />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

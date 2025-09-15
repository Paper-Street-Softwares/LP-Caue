import React from "react";
import { useTranslation } from "react-i18next";
import SectionArea from "../sectionElements/SectionArea";
import "react-image-gallery/styles/css/image-gallery.css";
import SectionHeader from "../sectionElements/SectionHeader";
import AboutModal from "../sectionElements/about/AboutModal";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import ParagraphSemFading from "../sectionElements/about/ParagraphSemFading";
import ParagraphWithFading from "../sectionElements/about/ParagraphWithFading";
import content from "../../content/content";
import ImageGallery from "react-image-gallery";
import heroImg1 from "../../assets/imgs/about/imgHero2.webp";
import heroImg2 from "../../assets/imgs/about/imgHero3.webp";

export default function About({ modal = true, showGallery, colorMode }) {
  const { t } = useTranslation();

  const images = [
    {
      original: heroImg1,
      thumbnail: heroImg1,
    },
    {
      original: heroImg2,
      thumbnail: heroImg2,
    },
  ];

  // Classes de tema
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
  const titleColor = textClasses[colorMode] || textClasses.default;
  const subtitleColor = colorMode === "light" ? "text-black/80" : "text-white";

  // Puxando apenas textos via i18n
  const aboutText = t("about", { returnObjects: true });

  return (
    <SectionArea
      id="about"
      className={`${bgClass} transition-colors duration-1000`}
    >
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[450px] flex justify-center rounded-xl">
          {showGallery ? (
            <div className="w-full ">
              <ImageGallery
                items={images}
                showNav={false} // Desativa setas
                showFullscreenButton={false} // Desativa fullscreen
                useBrowserFullscreen={false}
                showBullets={false}
                showPlayButton={false}
                showThumbnails={false}
                autoPlay={true}
                additionalClass="custom-gallery"
              />
              <style>
                {`
        .custom-gallery .image-gallery-slide img {
          height: auto; 
          width: 100%;
          border-radius:10px;
        }
        .custom-gallery .image-gallery-thumbnails img {
          height: 60px;  
          width: 100px;  
          object-fit: cover; 
        }
        `}
              </style>
            </div>
          ) : (
            <img
              src={content.texts.about.imagem.img}
              alt={aboutText.imagem.alt}
              className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl shadow-custom-opacity shadow-shadowAbouts/10"
            />
          )}
        </MotionDivDownToUp>

        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <SectionHeader
            className="text-center"
            // miniTitle={aboutText.miniTag}
            sectionHeaderTitle={aboutText.title}
            sectionHeaderSubtitle={aboutText.subtitle}
            color={colorMode}
            type="article"
            titleColorSet={titleColor}
            subtitleColorSet={subtitleColor}
            miniTitleBgColor={false}
          />
          <MotionDivDownToUp>
            {modal ? (
              <ParagraphWithFading colorMode={colorMode} />
            ) : (
              <ParagraphSemFading colorMode={colorMode} />
            )}
            {modal && <AboutModal colorMode={colorMode} />}
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

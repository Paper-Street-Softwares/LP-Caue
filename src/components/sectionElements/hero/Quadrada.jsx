import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";
import Button from "../../interactives/Button";
import { useTranslation } from "react-i18next";

export default function Quadrada({ appDownloadButtons, colorMode }) {
  const { t, i18n } = useTranslation();

  // Definindo cores de fundo com base no tema
  const backgroundClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "from-bgSectionDark to-darker",
  };

  const bgGradient = backgroundClasses[colorMode] || backgroundClasses.default;
  const titleColor = colorMode === "light" ? "text-black" : "text-white";
  const subtitleColor = colorMode === "light" ? "text-black" : "text-white";
  const obsTextColor = colorMode === "light" ? "text-black" : "text-white";
  const descriptionColor = colorMode === "light" ? "text-black" : "text-white";

  return (
    <div
      className={`w-full bg-center bg-repeat font-mainFont bg-gradient-to-b ${bgGradient}`}
      id="home"
    >
      <div className="relative z-10 flex w-full items-left">
        <div className="w-full text-secondary justify-evenly">
          <div className="h-[140px] phone2:h-[140px] phone3:h-[140px] tablet1:h-[150px] desktop3:h-[120px] " />{" "}
          <div className="flex flex-col-reverse gap-[40px] desktop1:flex-row desktop1:justify-between mx-auto w-[90%] max-w-[1215px] items-center pb-[64px]  desktop1:pt-[68px] desktop1:pb-[96px]">
            <div className="flex flex-col w-full desktop1:w-[50%] desktop1:mr-[20px]">
              {/* MiniTag preta */}
              <MotionDivDownToUp>
                <div className="flex justify-center w-auto text-center desktop1:justify-start desktop1:text-left font-secondFont text-paragraph4 text-minititleLightLabel">
                  <p className="mb-[16px] bg-minititle text-paragraph2 rounded-md px-[16px] py-[6px] inline-block">
                    {t("hero.miniTag")}
                  </p>
                </div>
              </MotionDivDownToUp>

              <MotionDivDownToUp>
                <div
                  className={`flex justify-center desktop1:justify-start font-bold leading-[40px] phone3:leading-[42px] tablet1:leading-[70px] desktop1:leading-[60px] desktop2:leading-[65px] text-center desktop1:text-left text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title6 ${titleColor}`}
                >
                  <h1>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: t("hero.title"),
                      }}
                    />
                  </h1>
                </div>
              </MotionDivDownToUp>

              {/* Subtítulo */}
              <MotionDivDownToUp>
                <div
                  className={`flex justify-center w-full text-center desktop1:text-left desktop1:justify-start font-secondFont text-paragraph4 phone3:text-paragraph5 ${subtitleColor}`}
                >
                  <p className="mb-[32px]">{t("hero.subtitle")}</p>
                </div>
              </MotionDivDownToUp>

              {/* Botão */}
              <div className="w-full phone2:w-full tablet2:w-auto">
                <div className="flex justify-center w-full desktop1:justify-start mb-[32px]">
                  <Button
                    aria-label={t("hero.ctaButtonAriaLabel")}
                    label={t("hero.ctaButtonText")}
                    animation
                    className="w-[100%]"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                      </svg>
                    }
                    colorMode={colorMode}
                  />
                </div>

                {/* Observação */}
                <MotionDivDownToUp>
                  <div className="flex justify-center desktop1:justify-start">
                    <div
                      className={`flex flex-col items-center desktop1:flex-row ${obsTextColor}`}
                    >
                      {content.texts.hero.obsHero.icon}

                      <p
                        className={`ml-[10px] text-center desktop1:text-start mt-[12px] desktop1:mt-0 ${obsTextColor}`}
                      >
                        {t("hero.obsHero.text")}
                      </p>
                    </div>
                  </div>
                </MotionDivDownToUp>

                {/* Botões de download */}
                {appDownloadButtons && (
                  <MotionDivDownToUp>
                    <div className="flex flex-col items-center desktop1:items-start">
                      <p
                        className={`mb-[20px] mt-[60px] text-center ${descriptionColor}`}
                      >
                        {content.texts.hero.app.description}
                      </p>
                      <div className="flex items-start gap-[20px]">
                        <a
                          href={content.texts.hero.app.imgs.appStore.link}
                          target="_blank"
                          className="transition hover:scale-110 invert"
                        >
                          <img
                            src={content.texts.hero.app.imgs.appStore.img}
                            alt={content.texts.hero.app.imgs.appStore.alt}
                          />
                        </a>
                        <a
                          href={content.texts.hero.app.imgs.playStore.link}
                          target="_blank"
                          className="transition hover:scale-110 invert"
                        >
                          <img
                            src={content.texts.hero.app.imgs.playStore.img}
                            alt={content.texts.hero.app.imgs.playStore.alt}
                          />
                        </a>
                      </div>
                    </div>
                  </MotionDivDownToUp>
                )}
              </div>
            </div>

            {/* Imagem principal */}
            <div className="flex justify-center w-full tablet1:w-[450px] desktop1:w-[42%] desktop2:w-[42.8%]">
              <MotionDivDownToUp className="relative flex justify-center w-full">
                <div
                  className={`bg-top mt-[20px] desktop1:mt-0 rounded-xl w-full
                    phone1:h-[300px] phone1:max-w-[300px]
                    phone2:h-[355px] phone2:max-w-[355px]
                    phone3:h-[405px] phone3:max-w-[405px]
                    tablet1:h-[576px] tablet1:min-w-[576px]
                    tablet2:h-[690px] tablet2:min-w-[690px]
                    desktop1:h-[400px] desktop1:min-w-[200px]
                    desktop2:h-[400px] desktop2:min-w-[400px]
                    bg-cover bg-no-repeat
                    ${
                      colorMode === "light"
                        ? "desktop1:shadow-custom-opacity desktop1:shadow-shadowHero/10"
                        : "shadow-custom-opacity shadow-shadowHero/10"
                    }
                  `}
                  style={{
                    backgroundImage: `url(${content.texts.hero.heroDefaultImage})`,
                  }}
                />
              </MotionDivDownToUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import Button from "../../interactives/Button";
import content from "../../../content/content";

const RedesSociais = ({
  facebook,
  instagram,
  linkedin,
  tiktok,
  x,
  withAnimation = true,
}) => {
  const { t } = useTranslation();
  const icons = [];

  if (facebook) {
    icons.push(
      <Button
        key="facebook"
        label={t("about.aboutSocial.labelFacebook")}
        buttonLink={content.texts.links.facebook}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        }
      />
    );
  }

  if (instagram) {
    icons.push(
      <Button
        key="instagram"
        label={t("about.aboutSocial.labelInstagram")}
        buttonLink={content.texts.links.instagram}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        }
      />
    );
  }

  if (linkedin) {
    icons.push(
      <Button
        key="linkedin"
        label={t("about.aboutSocial.labelLinkedin")}
        buttonLink={content.texts.links.linkedin}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        }
      />
    );
  }

  if (tiktok) {
    icons.push(
      <Button
        key="tiktok"
        label={t("about.aboutSocial.labelTikTok")}
        buttonLink={content.texts.links.tiktokProfile}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="currentColor"
          >
            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z" />
          </svg>
        }
      />
    );
  }

  if (x) {
    icons.push(
      <Button
        key="x"
        label={t("about.aboutSocial.labelX")}
        buttonLink={content.texts.links.x}
        icon={
          <svg
            viewBox="0 0 21.573 19.5"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="m 16.998462,0 h 3.308 l -7.227,8.26 8.502,11.24 h -6.657 l -5.2139994,-6.817 -5.966,6.817 H 0.43446256 L 8.1644626,10.665 0.00846256,0 H 6.8344626 l 4.7129994,6.231 z m -1.161,17.52 h 1.833 L 5.8384626,1.876 h -1.967 z" />
          </svg>
        }
      />
    );
  }

  const output = <div className="flex flex-col gap-4">{icons}</div>;

  return withAnimation ? (
    <MotionDivDownToUp>{output}</MotionDivDownToUp>
  ) : (
    output
  );
};

export default RedesSociais;

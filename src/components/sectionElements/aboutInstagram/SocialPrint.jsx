import MotionDivDownToUp from "../../animation/MotionDivDownToUp";

import content from "../../../content/content";
function SocialPrint() {
  return (
    <MotionDivDownToUp className="relative w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center ">
      <img
        src={content.texts.about.aboutSocial.img.img}
        alt={content.texts.about.aboutSocial.img.alt}
        className="w-[100%] desktop1:w-[415px] desktop2:w-[485px]"
      />
    </MotionDivDownToUp>
  );
}

export default SocialPrint;

import Paragraphs from "../Paragraphs";
import { useTranslation } from "react-i18next";

export default function ParagraphSemFading() {
  const { t } = useTranslation();

  return (
    <Paragraphs className="text-colorWhite text-opacity-80">
      {t("about.paragraph")}
    </Paragraphs>
  );
}

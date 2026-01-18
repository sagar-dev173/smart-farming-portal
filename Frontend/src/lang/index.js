import hi from "./hi";
import en from "./en";

export const getText = (language) =>
  language === "hi" ? hi : en;

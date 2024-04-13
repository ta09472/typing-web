import { FontSize } from "../type/custom";

export const getFontSize = (value: FontSize) => {
  switch (value) {
    case "large":
      return "text-lg";
    case "middle":
      return "text-md";
    case "small":
      return "text-sm";
    case "extraLarge":
      return "text-2xl";
    default:
      return "";
  }
};

export const getAuthorFontSize = (value: FontSize) => {
  switch (value) {
    case "large":
      return "";
    case "middle":
      return "text-sm";
    case "small":
      return "text-[12px]";
    case "extraLarge":
      return "text-lg";
    default:
      return "";
  }
};

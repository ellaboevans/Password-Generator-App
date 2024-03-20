// Configurations
export const DEFAULT_PASSWORD = "P4$5W0rD!";
export const DEFAULT_STRENGTH_VALUE = 1;
export const MIN_PASSWORD_LENGTH = 0;
export const MAX_PASSWORD_LENGTH = 32;
export const LEVEL_1 = "too weak!";
export const LEVEL_2 = "weak";
export const LEVEL_3 = "medium";
export const LEVEL_4 = "strong";

// Chosen Colors
export const COLOR_GREY = "#817D92";
export const COLOR_DARK_GREY = "#24232C";
export const COLOR_VERY_DARK_GREY = "#18171F";
export const COLOR_WHITE = "#E6E5EA";
export const COLOR_RED = "#F64A4A";
export const COLOR_ORANGE = "#FB7C58";
export const COLOR_YELLOW = "#F8CD65";
export const COLOR_GREEN = "#A4FFAF";

// DEVICE BREAKPOINTS
export const BREAKPOINTS = {
  MOBILE: "500px",
  TABLET: "48em",
  DESKTOP: "90em",
};

// excess height to improve interactive area / accessibility
export const HEIGHT = "36px";
export const THUMB_HEIGHT = 36;
export const TRACK_HEIGHT = "16px";

// colours for the slider track
export const UPPER_BACKGROUND = `linear-gradient(to bottom, ${COLOR_VERY_DARK_GREY}, ${COLOR_VERY_DARK_GREY}) 100% 50% / 100% ${TRACK_HEIGHT} no-repeat transparent`;
export const LOWER_BACKGROUND = `linear-gradient(to bottom, ${COLOR_GREEN}, ${COLOR_GREEN}) 100% 50% / 100% ${TRACK_HEIGHT} no-repeat transparent`;

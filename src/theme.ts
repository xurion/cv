// https://coolors.co/eae1df-3d405b-d52941-fcd581-e09f3e
const baseFontSize = 1;

export const theme = {
  colour: {
    primary: "#3d405b" as const,
    secondary: "#d52941" as const,
    tertiary: "#e09f3e" as const,
  },
  font: {
    regular: "1rem" as const,
    xl: `${baseFontSize * 2.5}rem` as const,
    lg: `${baseFontSize * 1.6}rem` as const,
  },
  spacing: "25px" as const,
};

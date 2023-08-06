import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          50: "#232323",
          100: "#3C3C3B",
          200: "#757575",
          300: "#232323",
          400: "#232323",
        },
        secondary: {
          50: "#F1F1F1",
          100: "#F1F1F1",
          200: "#F1F1F1",
          300: "#F1F1F1",
          400: "#F1F1F1",
        },
        npYellow: {
          50: "#F5C700",
        },
      }
    : {
        primary: {
          50: "#F1F1F1",
          100: "#F1F1F1",
          200: "#F1F1F1",
          300: "#F1F1F1",
          400: "#F1F1F1",
        },
        secondary: {
          50: "#232323",
          100: "#3C3C3B",
          200: "#757575",
          300: "#232323",
          400: "#232323",
        },
        npYellow: {
          50: "#F5C700",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[50],
            },
            secondary: {
              main: colors.npYellow[50],
            },
            neutral: {
              dark: colors.primary[50],
              main: colors.primary[100],
              light: colors.primary[200],
            },
            background: {
              default: colors.primary[50],
            },
          }
        : {
            primary: {
              main: colors.secondary[50],
            },
            secondary: {
              main: colors.npYellow[50],
            },
            neutral: {
              dark: colors.primary[50],
              main: colors.primary[100],
              light: colors.primary[200],
            },
            background: {
              default: "#F1F1F1",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};

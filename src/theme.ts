import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        "html, body, #root": {
          height: "100%",
        },
        ul: {
          listStyle: "none",
        },
      },
    },
  },
});

import CssBaseline from "@mui/material/CssBaseline";
import Main from "./components/Main";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme.ts";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
};

export default App;

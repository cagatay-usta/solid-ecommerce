import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/material";
import { theme } from "./style/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar itemCount={1} />
        app
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;

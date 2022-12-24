import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./component/Router/Router";
import { Theme } from "./Theme/Theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardContextProvider from "./Pages/Context/CardContextProvider";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CardContextProvider>
        <CssBaseline />
        <RouterProvider router={router}></RouterProvider>
      </CardContextProvider>
    </ThemeProvider>
  );
}

export default App;

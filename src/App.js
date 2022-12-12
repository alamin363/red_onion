import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./component/Router/Router";
import { Theme } from "./Theme/Theme";

function App() {
  return (
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
  );
}

export default App;

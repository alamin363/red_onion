import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import MealDetails from "../../Pages/MealDetails/MealDetails";
import PrivetRouter from "../../PrivetRouter/PrivetRouter";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signOut", element: <SignUp /> },
      {
        path: "/meal-details/:meal",
        element: (
          <PrivetRouter>
            <MealDetails />
          </PrivetRouter>
        ),
      },
    ],
  },
]);

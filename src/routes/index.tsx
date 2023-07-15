import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SecondLayOut from "../layouts/SecondLayOut";
import AllBooks from "../page/AllBooks";
import Home from "../page/Home";
import Login from "../page/Login";
import NotFoundPage from "../page/NotFoundPage";
import SignIn from "../page/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/allbooks",
        element: <AllBooks></AllBooks>,
      },
    ],
  },
  {
    path: "/",
    element: <SecondLayOut></SecondLayOut>,
    children: [
      {
        path: "/signup",
        element: <SignIn></SignIn>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);

export default router;

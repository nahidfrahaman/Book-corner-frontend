import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SecondLayOut from "../layouts/SecondLayOut";
import AllBooks from "../page/AllBooks";
import Home from "../page/Home";

import AddNewBookPage from "../page/AddNewBookPage";
import EditBookPage from "../page/EditBookPage";
import Login from "../page/LogIN";
import NotFoundPage from "../page/NotFoundPage";
import SignUP from "../page/SignIn";
import SingleBookDetails from "../page/SingleBookDetails";

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
        path: "/allbookspage",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/addnewbook",
        element: <AddNewBookPage></AddNewBookPage>,
      },
      {
        path: "/bookDetails/:id",
        element: <SingleBookDetails></SingleBookDetails>,
      },
      {
        path: "/editBookPage/:id",
        element: <EditBookPage></EditBookPage>,
      },
    ],
  },
  {
    path: "/",
    element: <SecondLayOut></SecondLayOut>,
    children: [
      {
        path: "/signup",
        element: <SignUP></SignUP>,
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

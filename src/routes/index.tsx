import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SecondLayOut from "../layouts/SecondLayOut";
import AllBooks from "../page/AllBooks";
import Home from "../page/Home";

import AddNewBookPage from "../page/AddNewBookPage";
import EditBookPage from "../page/EditBookPage";
import Login from "../page/LogIN";
import NotFoundPage from "../page/NotFoundPage";
import ReadinListBook from "../page/ReadinListBook";
import SignUP from "../page/SignIn";
import SingleBookDetails from "../page/SingleBookDetails";
import WishList from "../page/WishList";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddNewBookPage></AddNewBookPage>,
          </PrivateRoute>
        ),
      },
      {
        path: "/bookDetails/:id",
        element: <SingleBookDetails></SingleBookDetails>,
      },
      {
        path: "/wishlist",
        element: <WishList></WishList>,
      },
      {
        path: "/readinglist",
        element: <ReadinListBook></ReadinListBook>,
      },
      {
        path: "/editBookPage/:id",
        element: (
          <PrivateRoute>
            <EditBookPage></EditBookPage>,
          </PrivateRoute>
        ),
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

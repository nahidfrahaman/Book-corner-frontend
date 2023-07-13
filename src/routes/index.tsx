import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import NoteFound from "../page/NoteFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "*",
    element: <NoteFound></NoteFound>,
  },
]);

export default router;

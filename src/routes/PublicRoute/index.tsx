import { createBrowserRouter } from "react-router-dom";
import Login from "@pages/Login";

const PublicRoute = createBrowserRouter([
  {
    path: "*",
    element: <Login />,
  },
]);

export default PublicRoute;

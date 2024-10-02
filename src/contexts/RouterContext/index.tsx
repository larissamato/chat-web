import { RouterProvider } from "react-router-dom";
import { useUser } from "@contexts/UserContext";
import PublicRoute from "@routes/PublicRoute";
import PrivateRoute from "@routes/PrivateRoute";

const RouterContext = () => {
  const { islogged } = useUser();

  return <RouterProvider router={!islogged ? PublicRoute : PrivateRoute} />;
};

export default RouterContext;

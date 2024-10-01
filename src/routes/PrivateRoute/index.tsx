import { createBrowserRouter } from "react-router-dom";
import Default from "@layouts/Default";
import Chat from "@pages/Chat";
import Error from "@pages/Error";

const PrivateRoute = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    errorElement: <Error />,
    children: [
      {
        path: "*",
        element: <Error code={404} />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
    ],
  },
  {
    path: "*",
    element: <Error code={404} />,
  },
]);

export default PrivateRoute;

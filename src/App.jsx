import { createBrowserRouter, RouterProvider } from "react-router";
import LogIn from "./component/LogIn";
import SignUp from "./component/SignUp";
import Home from "./component/Home";
import Feed from "./component/Feed";
import Profile from "./component/Profile";
import Error from "./component/Error";
import Connection from "./component/Connection";
import Base from "./component/Base";
import PendingRequest from "./component/PendingRequest";
import Welcome from "./component/Welcome";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Base />,
      children: [
        { path: "", element: <Welcome /> },
        { path: "login", element: <LogIn /> },
        { path: "signup", element: <SignUp /> },
        {
          path: "/home",
          element: <Home />,
          children: [
            { path: "", element: <Feed /> },
            { path: "profile", element: <Profile /> },
            { path: "connection", element: <Connection /> },
            { path: "request", element: <PendingRequest /> },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

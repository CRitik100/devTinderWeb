import { createBrowserRouter, RouterProvider } from "react-router";
import LogIn from "./component/LogIn";
import SignUp from "./component/SignUp";
import Home from "./component/Home";
import Feed from "./component/Feed";
import Profile from "./component/Profile";
import Error from "./component/Error";
import Connection from "./component/Connection";

function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <LogIn /> },
    { path: "/signup", element: <SignUp /> },
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <Feed /> },
        { path: "/profile", element: <Profile /> },
        { path: "/connection", element: <Connection /> },
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

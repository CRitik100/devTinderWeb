import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;

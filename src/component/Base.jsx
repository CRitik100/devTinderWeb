import { Link, Outlet } from "react-router";
import Logo from "./Logo";

const Base = () => {
  return (
    <div className="bg-[#110e2b]">
      <Link to={"/home"}>
        <Logo />
      </Link>
      <Outlet />
    </div>
  );
};

export default Base;

import { Outlet } from "react-router";
import Logo from "./Logo";

const Base = () => {
  return (
    <div className="bg-[#110e2b]">
      <Logo />
      <Outlet />
    </div>
  );
};

export default Base;

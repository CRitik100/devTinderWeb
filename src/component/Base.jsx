import { Link, Outlet, useNavigate } from "react-router";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addUser } from "../utils/redux/slices/userSlice";

const Base = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user.data);

  useEffect(() => {
    // if (!userData) {
    fetchLoggedInUserData();
    // }
  }, []);

  const fetchLoggedInUserData = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res?.data));
    } catch (error) {
      navigate("/login");
      console.log("Error => " + error);
    }
  };

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

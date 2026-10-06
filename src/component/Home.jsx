import { Outlet, useNavigate } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/redux/slices/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user.data);

  useEffect(() => {
    fetchLoggedInUserData();
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

  return !userData ? (
    <ShimmerUI />
  ) : (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;

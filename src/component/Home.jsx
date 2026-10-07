import { Outlet, useNavigate } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser, updateUserPhoto } from "../utils/redux/slices/userSlice";

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
      if (["https://www.example.com", ""].includes(userData?.photo)) {
        dispatch(
          updateUserPhoto(
            "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
          ),
        );
      }
    } catch (error) {
      navigate("/login");
      console.log("Error => " + error);
    }
  };

  return !userData ? (
    <ShimmerUI />
  ) : (
    <div className="flex flex-col min-h-screen w-dvw">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;

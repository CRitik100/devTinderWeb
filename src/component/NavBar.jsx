import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/redux/slices/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.data);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + "/logout",
        {},
        {
          withCredentials: true,
        },
      );
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.log("Error :: " + error);
    }
  };

  return (
    <div className="navbar shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"></a>
      </div>
      <div className="flex gap-2">
        <div className="dropdown dropdown-end">
          <div className="flex items-center">
            <div className="mr-3">{`Hi, ${user?.firstName}`}</div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User Image." src={user?.photo} />
              </div>
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/home/profile"} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to={"/home/connection"}>Connections</Link>
            </li>
            <li>
              <Link to={"/home/request"}>Request</Link>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

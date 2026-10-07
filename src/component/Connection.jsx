import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import UserChip from "./UserChip";
import { useDispatch, useSelector } from "react-redux";
import { updateConection } from "../utils/redux/slices/connection";
import ShimmerUI from "./ShimmerUI";
import Chat from "./Chat";

const Connection = () => {
  const connectionData = useSelector((store) => store.connection.data);
  const dispatch = useDispatch();

  const getConnection = async () => {
    try {
      const friends = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      });
      dispatch(updateConection(friends?.data?.data));
      console.log(friends?.data?.data);
    } catch (error) {
      console.log("Error : " + error.response?.data);
    }
  };

  useEffect(() => {
    getConnection();
  }, []);

  return !connectionData ? (
    <ShimmerUI />
  ) : (
    <div className=" h-[calc(100dvh-4rem)] w-dvw flex justify-center items-center">
      <div className="border-[#2d2760] bg-[#1d1745] w-4/5 h-5/6 rounded-2xl p-11 grid grid-cols-[1fr_2fr] gap-3 ">
        <div className="flex min-h-0 flex-col gap-1">
          <div className="shrink-0">Friends</div>
          <div className="flex flex-col gap-1 overflow-y-auto">
            {connectionData.map((data) => (
              <UserChip key={data._id} name={data.firstName} photo={data.photo} />
            ))}
          </div>
        </div>
        <Chat />
      </div>
    </div>
  );
};

export default Connection;

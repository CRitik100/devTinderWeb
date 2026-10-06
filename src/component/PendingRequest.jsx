import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPendingConnection,
  removeUserFromPendingConnection,
} from "../utils/redux/slices/pendingConnection";
import ShimmerUI from "./ShimmerUI";
import RequestUserChip from "./RequestUserChip";

const PendingRequest = () => {
  const dispatch = useDispatch();
  const pendingConnectionData = useSelector(
    (store) => store.pendingConnection.data,
  );

  const handleReview = async (review, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + `/request/review/${review}/${userId}`,
        {},
        {
          withCredentials: true,
        },
      );
      dispatch(removeUserFromPendingConnection(userId));
      console.log(res);
    } catch (error) {
      console.log("Error =>" + error);
    }
  };

  const getPendingRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });
      dispatch(addPendingConnection(res?.data?.data));
    } catch (error) {
      console.log("Error =>" + error.response?.data);
    }
  };

  useEffect(() => {
    getPendingRequest();
  }, []);

  return !pendingConnectionData ? (
    <ShimmerUI />
  ) : (
    <div className=" h-[calc(100dvh-4rem)] w-dvw flex justify-center items-center">
      <div className="border-[#2d2760] bg-[#1d1745] w-1/3 h-5/6 rounded-2xl p-11 ">
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-s font-bold text-[#eb5e7c] opacity-60 tracking-wide">
            They are looking to work with you.
          </li>
          {pendingConnectionData.map((data) => (
            <RequestUserChip
              key={data._id}
              photo={data.photo}
              firstName={data.firstName}
              lastName={data.lastName}
              about={data.about}
              onReview={(review) => handleReview(review, data._id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PendingRequest;

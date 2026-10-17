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
    <main className="flex min-h-[calc(100dvh-4rem)] w-full items-center justify-center px-3 py-4 sm:px-5 lg:h-[calc(100dvh-4rem)] lg:min-h-0">
      <section className="flex w-full flex-col rounded-2xl border border-[#2d2760] bg-[#1d1745] p-3 sm:w-11/12 sm:p-6 md:w-2/3 lg:h-5/6 lg:w-1/3 lg:p-11">
        <ul className="list min-w-0 rounded-box bg-base-100 shadow-md lg:min-h-0 lg:flex-1 lg:overflow-y-auto">
          <li className="p-4 pb-2 text-sm font-bold tracking-wide text-[#eb5e7c] opacity-60 sm:text-base">
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
      </section>
    </main>
  );
};

export default PendingRequest;

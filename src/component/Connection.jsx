import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import UserChip from "./UserChip";
import { useDispatch, useSelector } from "react-redux";
import { updateConection } from "../utils/redux/slices/connection";
import ShimmerUI from "./ShimmerUI";
import Chat from "./Chat";

const Connection = () => {
  const [clickedUserId, setClickedUserId] = useState("");
  const connectionData = useSelector((store) => store.connection.data);
  const dispatch = useDispatch();
  const selectedFriend = connectionData?.find((friend) => friend._id === clickedUserId);

  const getConnection = async () => {
    try {
      const friends = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      });
      dispatch(updateConection(friends?.data?.data));
    } catch (error) {
      console.log("Error : " + error.response?.data);
    }
  };

  useEffect(() => {
    getConnection();
  }, []);

  const userClickHandler = (id) => {
    setClickedUserId(id);
  };

  return !connectionData ? (
    <ShimmerUI />
  ) : (
    <main className="h-[calc(100dvh-4rem)] w-full min-w-0 p-3 sm:p-5">
      <div className="mx-auto grid h-full min-h-0 w-full max-w-6xl grid-cols-1 gap-3 rounded-2xl border border-[#2d2760] bg-[#1d1745] p-3 sm:p-5 lg:grid-cols-[minmax(15rem,1fr)_minmax(0,2fr)] lg:gap-5 lg:p-6">
        <section
          className={`min-h-0 flex-col gap-2 ${clickedUserId ? "hidden lg:flex" : "flex"}`}
        >
          <h1 className="shrink-0 px-2 text-lg font-semibold text-[#f1eeff]">
            Friends
          </h1>
          <div className="flex min-h-0 flex-col gap-2 overflow-y-auto">
            {connectionData.map((data) => (
              <UserChip
                key={data._id}
                userId={data._id}
                name={data.firstName}
                photo={data.photo}
                handleClick={userClickHandler}
                chatSelected={clickedUserId === data._id}
              />
            ))}
          </div>
        </section>
        <section
          className={`min-h-0 min-w-0 flex-col ${clickedUserId ? "flex" : "hidden lg:flex"}`}
        >
          <div className="mb-2 flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setClickedUserId("")}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-[#f1eeff] hover:bg-white/10 lg:hidden"
              aria-label="Back to friends"
            >
              &larr; Friends
            </button>
            <div className="truncate font-stretch-100% text-[#f1eeff]">
              {selectedFriend
                ? `${selectedFriend.firstName} ${selectedFriend.lastName}`
                : ""}
            </div>
          </div>
          <div className="min-h-0 flex-1">
            <Chat userId={clickedUserId} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Connection;

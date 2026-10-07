import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/redux/slices/feedSlice";
import { useEffect, useState } from "react";
import UserCard from "./UserCards";
import ShimmerUI from "./ShimmerUI";
import EmptyState from "./EmptyState";

const Feed = () => {
  const dispatch = useDispatch();
  const feedUsers = useSelector((store) => store.feed.data);

  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = async () => {
    try {
      const res = await axios(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.feedData));
    } catch (error) {
      console.log("error => " + error);
    }
  };

  if (!feedUsers) {
    return <ShimmerUI />;
  }

  return feedUsers.length === 0 ? (
    <EmptyState />
  ) : (
    <div className="flex h-[calc(100dvh-4rem)] items-center justify-center">
      <UserCard user={feedUsers[0]} />
    </div>
  );
};

export default Feed;

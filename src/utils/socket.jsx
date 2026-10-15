import { io } from "socket.io-client";
import { BASE_URL } from "./constants";

const connectToSocket = () => {
  return location.hostname === "localhost"
    ? io(BASE_URL)
    : io("/", { path: "/api/socket.io" });
};

export default connectToSocket;

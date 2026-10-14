import { io } from "socket.io-client";
import { BASE_URL } from "./constants";

const connectToSocket = () => {
  return io(BASE_URL);
};

export default connectToSocket;

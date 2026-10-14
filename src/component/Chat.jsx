import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ArrowUp from "./icon/ArrowUp";
import ChatBubble from "./ChatBubble";
import connectToSocket from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = (props) => {
  const { userId } = props;
  const loggedInUser = useSelector((store) => store.user.data);
  const [enteredMessage, setEnteredMessage] = useState("");
  const [mssgHistory, setMssgHistory] = useState([]);
  const historyRef = useRef(null);

  const handleInput = () => {
    const socket = connectToSocket();
    socket.emit("sendMessage", {
      fromUserId: loggedInUser?._id,
      toUserId: userId,
      fromUserName: loggedInUser?.firstName,
      enteredMessage,
    });
    setEnteredMessage("");
  };

  const fetchChatHistory = async (toUserId) => {
    try {
      const data = await axios.get(BASE_URL + `/chat/${toUserId}`, {
        withCredentials: true,
      });
      let filteredData = data?.data?.chat?.messages;
      filteredData = filteredData.map((row) => {
        return {
          fromUserName: row?.fromUserId?.firstName,
          enteredMessage: row?.enteredMessage,
        };
      });
      !data ? setMssgHistory([]) : setMssgHistory(filteredData);
    } catch (error) {
      console.log("Error : " + error);
    }
  };

  useEffect(() => {
    if (!userId) return;
    fetchChatHistory(userId);
    const socket = connectToSocket();
    socket.emit("let's chat", {
      fromUserId: loggedInUser?._id,
      toUserId: userId,
      fromUserName: loggedInUser?.firstName,
    });

    socket.on("receivedMessage", ({ fromUserName, enteredMessage }) => {
      console.log(`${fromUserName}: ${enteredMessage}`);
      setMssgHistory((history) => [
        ...history,
        { fromUserName, enteredMessage },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  useLayoutEffect(() => {
    const chatWindow = historyRef.current;
    if (chatWindow) chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [mssgHistory]);

  return (
    <div className="p-5 min-h-0 gap-3 flex flex-col h-full justify-between bg-linear-to-br from-slate-900 via-indigo-950 to-slate-950 w-full rounded-2xl">
      <div
        id="history"
        className="overflow-scroll scroll-smooth"
        ref={historyRef}
      >
        {mssgHistory.map((mssg, index) => (
          <ChatBubble key={index} data={mssg} />
        ))}
      </div>

      <div className="w-full mt-auto">
        <div
          className="w-full min-w-0 flex flex-col rounded-3xl p-2 md:px-4 text-white
                        bg-white/5 border border-white/10 backdrop-blur
                        focus-within:border-indigo-400/60 focus-within:bg-white/10
                        transition-colors"
        >
          <div className="flex items-center gap-3">
            <textarea
              id="textInput"
              className="w-full outline-none bg-transparent placeholder:text-slate-400 field-sizing-content"
              placeholder="Type a message..."
              value={enteredMessage}
              onChange={(e) => setEnteredMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  e.target.blur();
                  handleInput();
                }
              }}
            ></textarea>
            <button
              className="bg-white rounded-full w-8 h-8 p-1 shrink-0 flex justify-center items-center hover:bg-gray-300"
              onClick={handleInput}
            >
              <ArrowUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

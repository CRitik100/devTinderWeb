import { useSelector } from "react-redux";

const ChatBubble = (props) => {
  const { fromUserName, enteredMessage } = props?.data;
  const loggedInUser = useSelector((store) => store.user.data);

  return fromUserName != loggedInUser?.firstName ? (
    <div className="chat chat-start">
      <div className="chat-bubble">{enteredMessage}</div>
    </div>
  ) : (
    <div className="chat chat-end ">
      <div className="chat-bubble bg-green-900">{enteredMessage}</div>
    </div>
  );
};

export default ChatBubble;

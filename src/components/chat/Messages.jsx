import { useDispatch, useSelector } from "react-redux";
import MessageBubble from "./MessageBubble";
import { useEffect } from "react";
import { fetchMessages } from "../../store/slices/chatSlice";

const Messages = ({ chatId }) => {
  const dispatch = useDispatch();

  const messages = useSelector(
    (s) => s.chat.messages[chatId] || []
  );

  console.log("messages: ", messages)

  const myAuthUserId = useSelector(
    (s) => s.user.profile.authUserId
  );

  useEffect(() => {
    dispatch(fetchMessages(chatId));
  }, [chatId, dispatch]);

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-6">
      {messages.map((msg) => {
        const isMe = msg.senderId === myAuthUserId;

        return (
          <MessageBubble
            key={msg.id}
            type={isMe ? "sent" : "received"}   // ✅ FIX
            name={msg.sender?.name}
            avatar={msg.sender?.avatar}
            sender={msg.sender}
            status= {msg.status}
            message={msg.content}
            time={new Date(msg.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          />
        );
      })}
    </div>
  );
};

export default Messages;

import { useDispatch, useSelector } from "react-redux";
import MessageBubble from "./MessageBubble";
import { useEffect, useRef } from "react";
import { fetchMessages } from "../../store/slices/chatSlice";
import { getSocket } from "../../socket/socket";

const Messages = ({ chatId, otherUser }) => {
  const dispatch = useDispatch();
  const bottomRef = useRef(null);


  const messages = useSelector(
    (s) => s.chat.messages[chatId] || []
  );

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  const myAuthUserId = useSelector(
    (s) => s.user.profile.authUserId
  );

  useEffect(() => {
    dispatch(fetchMessages(chatId));
  }, [chatId, dispatch]);

  useEffect(() => {
    if (!messages.length) return;

    const lastMessage = messages[messages.length - 1];

    if (lastMessage.senderId === myAuthUserId) return;

    const socket = getSocket();

    socket.emit("mark-seen", {
      chatId,
      lastSeenMessageId: lastMessage.id,
    });

  }, [messages, chatId, myAuthUserId]);


  useEffect(() => {
    const socket = getSocket();

    socket.emit("join-chat", chatId);

  }, [chatId]);

  console.log("messages: ", messages)

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
      {messages.map((msg) => {
        const isMe = msg.senderId === myAuthUserId;

        return (
          <MessageBubble
            key={msg.id}
            type={isMe ? "sent" : "received"}   
            name={msg.sender?.name}
            avatar={msg.sender?.avatar}
            sender={msg.sender}
            otherUser={otherUser}
            status={msg.status}
            message={msg.content}
            time={new Date(msg.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          />
        );
      })}

      <div ref={bottomRef} />
    
    </div>
  );
};

export default Messages;

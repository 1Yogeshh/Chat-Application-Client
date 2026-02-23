import { useDispatch, useSelector } from "react-redux";
import MessageBubble from "./MessageBubble";
import { useEffect, useRef } from "react";
import { fetchMessages } from "../../store/slices/chatSlice";
import { getSocket } from "../../socket/socket";

const Messages = ({ chatId, otherUser }) => {
  const dispatch = useDispatch();
  const bottomRef = useRef(null);
  const isUserAtBottomRef = useRef(true);
  const containerRef = useRef(null);
  const pagination = useSelector(
    (s) => s.chat.pagination[chatId] || {}
  );

  const isPaginationLoading = useSelector(
    (s) => s.chat.paginationLoading[chatId]
  );

  const messages = useSelector(
    (s) => s.chat.messages[chatId] || []
  );

  const myAuthUserId = useSelector(
    (s) => s.user.profile.authUserId
  );

  useEffect(() => {
    dispatch(fetchMessages({ chatId }));
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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let loading = false;

    const handleScroll = async () => {
      const threshold = 50;

      // Track bottom
      isUserAtBottomRef.current =
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + threshold;

      // Pagination trigger
      if (
        container.scrollTop <= 10 &&
        pagination?.hasMore &&
        pagination?.nextCursor &&
        !loading
      ) {
        loading = true;

        const previousHeight = container.scrollHeight;

        await dispatch(
          fetchMessages({
            chatId,
            cursor: pagination.nextCursor
          })
        );

        // 🔥 Maintain scroll position after prepend
        setTimeout(() => {
          const newHeight = container.scrollHeight;
          container.scrollTop = newHeight - previousHeight;
          loading = false;
        }, 0);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);

  }, [chatId, pagination?.nextCursor, pagination?.hasMore]);

  useEffect(() => {
    if (!isUserAtBottomRef.current) return;

    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6"
    >
      {
        isPaginationLoading && (
          <div className="flex justify-center py-2 text-sm text-gray-500">
            Loading...
          </div>
        )
      }
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

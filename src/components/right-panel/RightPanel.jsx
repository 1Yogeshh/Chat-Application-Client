import { MessageSquare, PenLine, Search } from "lucide-react";
import ChatListItem from "./ChatListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchChats, setActiveChat } from "../../store/slices/chatSlice";

const RightPanel = () => {
  const dispatch = useDispatch();
  const { chats, activeChatId } = useSelector((s) => s.chat);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    <div className="w-80 bg-white p-6 overflow-y-auto rounded-[30px]">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Messages</h2>
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <PenLine size={18} />
        </button>
      </div>

      {/* SEARCH */}
      <div className="mb-6">
        <div className="flex items-center bg-gray-100 p-1 rounded-lg">
          <input
            type="text"
            placeholder="Search or start a message"
            className="flex-1 p-2 bg-transparent outline-none text-sm"
          />
          <Search size={18} className="mx-2 text-gray-500" />
        </div>
      </div>

      {/* ALL CHATS */}
      <section>
        <div className="flex gap-2 items-center mb-4">
          <MessageSquare size={18} />
          <h4 className="text-xs font-bold text-black uppercase">
            All Chats
          </h4>
        </div>

        {/* ✅ EMPTY STATE */}
        {chats.length === 0 && (
          <div className="text-center text-gray-500 text-sm mt-10">
            <p>No chats yet</p>
            <p className="text-xs text-gray-400 mt-1">
              Start a new conversation
            </p>
          </div>
        )}

        {/* ✅ REAL CHAT LIST */}
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            name={chat.otherUser?.name ?? "Unknown"}
            msg={chat.lastMessage?.content ?? "No messages yet"}
            time={
              chat.lastMessage?.createdAt
                ? new Date(chat.lastMessage.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
                : ""
            }
            active={activeChatId === chat.id}
            onClick={() => dispatch(setActiveChat(chat.id))}
          />
        ))}
      </section>
    </div>
  );
};

export default RightPanel;

import { MessageSquare, PenLine, Search } from "lucide-react";
import ChatListItem from "./ChatListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchChats, setActiveChat, startPrivateChat } from "../../store/slices/chatSlice";
import { searchUsers, clearSearch } from "../../store/slices/user.Slice";

const RightPanel = () => {
  const dispatch = useDispatch();
  const { chats, activeChatId, messages } = useSelector((s) => s.chat);
  const { searchResults } = useSelector((s) => s.user)
  const myAuthUserId = useSelector((s) => s.user.profile.authUserId);

  const [search, setSearch] = useState("")

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  useEffect(() => {
    if (search.trim().length > 1) {
      dispatch(searchUsers(search))
    } else {
      dispatch(clearSearch())
    }
  }, [search, dispatch]);

  //start private chat
  const handleStartChat = (user) => {
    dispatch(
      startPrivateChat({
        otherUserId: user.authUserId,
        userData: user
      })
    );
    setSearch("");
    dispatch(clearSearch());
  }

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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search or start a message"
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <Search size={18} className="mx-2 text-gray-500" />
        </div>
        {/* 🔥 SEARCH RESULTS DROPDOWN */}
        {search.length > 1 && (
          <div className=" top-14 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl max-h-72 overflow-y-auto z-50 border border-gray-100">
            {searchResults.length === 0 ? (
              <div className="p-6 text-center text-gray-400 text-sm">
                No users found
              </div>
            ) : (
              searchResults.map((user) => (
                <div
                  key={user.authUserId}
                  onClick={() => handleStartChat(user)}
                  className="flex items-center gap-3 p-3 cursor-pointer transition-all duration-200 hover:bg-gray-50 active:scale-[0.98]"
                >
                  {/* Avatar */}
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>

                  {/* Info */}
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-gray-800">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      @{user.username}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
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

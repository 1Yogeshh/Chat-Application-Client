import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { useSelector } from "react-redux";
import { setActiveChat } from "../../store/slices/chatSlice";

const ChatLayout = ({ onUserClick }) => {
    const { activeChatId, chats, onlineUsers } = useSelector((s) => s.chat)

    if (!activeChatId) {
        return (
            <div className="hidden md:flex flex-1 items-center justify-center text-gray-400">
                Select a chat to start messaging
            </div>
        );
    }

    const currentChat = chats.find(c => c.id === activeChatId);
    const isOnline = onlineUsers[currentChat?.otherUser?.authUserId];

    return (
        <div className="flex flex-1 flex-col bg-[#F4F3F8] lg2:rounded-[30px]">
            <ChatHeader setActiveChat={setActiveChat} onUserClick={onUserClick} user={currentChat?.otherUser} isOnline={isOnline} />
            <Messages chatId={activeChatId} otherUser={currentChat?.otherUser} />
            <MessageInput chatId={activeChatId} />
        </div>
    );
};

export default ChatLayout;
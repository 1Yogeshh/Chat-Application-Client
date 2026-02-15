import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { useSelector } from "react-redux";

const ChatLayout = ({ onUserClick }) => {
    const { activeChatId, chats } = useSelector((s) => s.chat)

    if (!activeChatId) {
        return (
            <div className="flex flex-1 items-center justify-center text-gray-400" >
                Select a chat to start messaging
            </div>
        );
    }

    const currentChat = chats.find(c => c.id === activeChatId);

    return (
        <div className="flex flex-1 flex-col bg-[#F4F3F8] rounded-[30px]" >
            <ChatHeader onUserClick={onUserClick} user={currentChat?.otherUser} />
            <Messages chatId={activeChatId} />
            <MessageInput chatId={activeChatId} />
        </div>
    );
};

export default ChatLayout;
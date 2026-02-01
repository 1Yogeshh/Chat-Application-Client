import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const ChatLayout = ({ onUserClick }) => {
  return (
    <div className="flex flex-1 flex-col bg-[#F4F3F8] rounded-[30px]">
      <ChatHeader />
      <Messages onUserClick={onUserClick} />
      <MessageInput />
    </div>
  );
};

export default ChatLayout;

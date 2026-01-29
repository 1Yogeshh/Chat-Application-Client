import Sidebar from "../components/sidebar/Sidebar";
import ChatLayout from "../components/chat/ChatLayout";
import RightPanel from "../components/right-panel/RightPanel";

const ChatPage = () => {
  return (
    <div className="flex h-screen w-full bg-[#E0C3FC] p-8 font-sans">
      <div className="flex w-full gap-4 overflow-hidden rounded-[40px]">
        <Sidebar />
        <ChatLayout />
        <RightPanel />
      </div>
    </div>
  );
};

export default ChatPage;

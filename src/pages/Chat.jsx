import Sidebar from "../components/sidebar/Sidebar";
import ChatLayout from "../components/chat/ChatLayout";
import RightPanel from "../components/right-panel/RightPanel";
import AnimatedBackground from "../components/background/AnimatedBackground";

const ChatPage = () => {
  return (
    <div className="relative flex h-screen w-full p-8 font-sans overflow-hidden">
      <AnimatedBackground />
      <div className="flex w-full gap-4 overflow-hidden rounded-[40px]">
        <Sidebar />
        <ChatLayout />
        <RightPanel />
      </div>
    </div>
  );
};

export default ChatPage;

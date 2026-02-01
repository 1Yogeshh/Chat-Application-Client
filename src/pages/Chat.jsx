import Sidebar from "../components/sidebar/Sidebar";
import ChatLayout from "../components/chat/ChatLayout";
import RightPanel from "../components/right-panel/RightPanel";
import AnimatedBackground from "../components/background/AnimatedBackground";
import { useState } from "react";
import ProfileModal from "../components/profile/ProfileModal";

const ChatPage = () => {
  const [openProfile, setOpenProfile] = useState(false)
  return (
    <div className="relative flex h-screen w-full p-8 font-sans overflow-hidden">
      <AnimatedBackground />
      <div className="flex w-full gap-4 overflow-hidden rounded-[40px]">
        <Sidebar onProfileClick={() => setOpenProfile(true)} />
        <ChatLayout />
        <RightPanel />
      </div>
      {/* PROFILE MODAL */}
      <ProfileModal
        open={openProfile}
        onClose={() => setOpenProfile(false)}
        isOwn
      />
    </div>
  );
};

export default ChatPage;

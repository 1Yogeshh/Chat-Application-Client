import Sidebar from "../components/sidebar/Sidebar";
import ChatLayout from "../components/chat/ChatLayout";
import RightPanel from "../components/right-panel/RightPanel";
import AnimatedBackground from "../components/background/AnimatedBackground";
import { useState } from "react";
import ProfileModal from "../components/profile/ProfileModal";
import { useSelector } from "react-redux";

const ChatPage = () => {
  const { profile } = useSelector((s) => s.user)

  const [profileUser, setProfileUser] = useState(null);
  return (
    <div className="relative flex h-screen w-full p-8 font-sans overflow-hidden">
      <AnimatedBackground />

      <div className="flex w-full gap-4 overflow-hidden rounded-[40px]">
        {/* SIDEBAR → OWN PROFILE */}
        <Sidebar onProfileClick={() => setProfileUser(profile)} />

        {/* CHAT → OTHER USERS */}
        <ChatLayout onUserClick={(user) => setProfileUser(user)} />

        <RightPanel />
      </div>

      {/* PROFILE MODAL (OWN + OTHER) */}
      <ProfileModal
        open={!!profileUser}
        user={profileUser}
        loggedInUser={profile}
        onClose={() => setProfileUser(null)}
      />
    </div>
  );
};

export default ChatPage;

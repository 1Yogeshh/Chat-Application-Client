import Sidebar from "../components/sidebar/Sidebar";
import ChatLayout from "../components/chat/ChatLayout";
import RightPanel from "../components/right-panel/RightPanel";
import AnimatedBackground from "../components/background/AnimatedBackground";
import { useState } from "react";
import ProfileModal from "../components/profile/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, getSocket, disconnectSocket } from "../socket/socket"
import { useEffect } from "react";
import { addMessage, updateSeen, setOnlineUsers } from "../store/slices/chatSlice";

const ChatPage = () => {
  const { profile } = useSelector((s) => s.user)

  const [profileUser, setProfileUser] = useState(null);

  const dispatch = useDispatch()

  useEffect(() => {
    const socket = connectSocket();

    socket.on("connect", () => {
      console.log("🟢 Connected:", socket.id);
    });

    // 🔥 full online list
    socket.on("online-users-list", (users) => {
      console.log("🔥 ONLINE LIST RECEIVED:", users)
      dispatch(setOnlineUsers(users));
    });

    socket.on("new-message", (message) => {
      dispatch(addMessage({
        chatId: message.chatId,
        message,
      }));
    });

    socket.on("message-seen", (data) => {
      dispatch(updateSeen(data));
    });

    return () => {
      socket.off("new-message");
      socket.off("message-seen");
      socket.off("online-users-list");
      disconnectSocket();
    };
  }, [dispatch]);

  return (
    <div className="relative flex h-screen w-full p-8 font-sans overflow-hidden">
      <AnimatedBackground />

      <div className="flex w-full gap-4 overflow-hidden rounded-[40px]">
      
        <Sidebar onProfileClick={() => setProfileUser(profile)} />

        <ChatLayout onUserClick={(user) => setProfileUser(user)} />

        <RightPanel />
      </div>

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

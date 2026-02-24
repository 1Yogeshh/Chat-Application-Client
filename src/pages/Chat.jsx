import Sidebar from "../components/sidebar/Sidebar";
import ChatLayout from "../components/chat/ChatLayout";
import RightPanel from "../components/right-panel/RightPanel";
import AnimatedBackground from "../components/background/AnimatedBackground";
import { useState, useEffect } from "react";
import ProfileModal from "../components/profile/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, getSocket, disconnectSocket } from "../socket/socket";
import { addMessage, updateSeen, setOnlineUsers, setActiveChat, fetchChats } from "../store/slices/chatSlice";
import { useBreakpoint } from "../hooks/useBreakpoint";

const ChatPage = () => {
  const { profile } = useSelector((s) => s.user);
  const { activeChatId, chats } = useSelector((s) => s.chat);

  const [profileUser, setProfileUser] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const socket = connectSocket();

    socket.on("connect", () => { });

    socket.on("online-users-list", (users) => {
      dispatch(setOnlineUsers(users));
    });

    socket.on("new-message", (message) => {

      const existingChat = chats.find(
        c => c.id === message.chatId
      );

      dispatch(addMessage({ chatId: message.chatId, message }));

      if (!existingChat) {
        dispatch(fetchChats());
      }
    });

    socket.on("message-seen", (data) => {
      dispatch(updateSeen(data));
    });

    socket.on("connect_error", (err) => { });

    return () => {
      socket.off("new-message");
      socket.off("message-seen");
      socket.off("online-users-list");
      disconnectSocket();
    };
  }, [dispatch, chats]);

  const isDesktop = useBreakpoint(1083);

  return (
    <div className="relative flex h-screen w-full lg2:p-8 font-sans overflow-hidden" >
      <AnimatedBackground />

      <div className="flex w-full lg2:gap-4 overflow-hidden"
        style={
          { borderRadius: isDesktop ? '40px' : '0' }} >

        { /* Sidebar */}
        {(isDesktop || !activeChatId) && (
          <div className="lg2:flex hidden flex-shrink-0 w-[20%] lg2:w-auto" >
            <Sidebar
              onProfileClick={
                () => setProfileUser(profile)}
            />
          </div>
        )}

        { /* ChatLayout */} {
          (isDesktop || activeChatId) && (
            <div className="flex flex-1 min-w-0" >
              <ChatLayout onUserClick={
                (user) => setProfileUser(user)}
              /> </div>
          )
        }

        { /* RightPanel */}
        {
          (isDesktop || !activeChatId) && (
            <div className="flex w-[100%] lg2:w-auto" >
              <RightPanel />
            </div>
          )
        }

      </div>
      <ProfileModal
        open={!!profileUser}
        user={profileUser}
        loggedInUser={profile}
        onClose={
          () => setProfileUser(null)}
      />
    </div>
  );
};

export default ChatPage;
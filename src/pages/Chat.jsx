import Sidebar from "../components/chat/Sidebar";
import ChatHeader from "../components/chat/ChatHeader";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";
import RightPanel from "../components/chat/RightPanel";

export default function Chat() {
    return (
        <div className="h-screen w-full bg-gradient-to-br from-purple-200 to-pink-200">
            <div className="h-full w-full bg-white shadow-xl flex overflow-hidden">

                {/* LEFT SIDEBAR */}
                <Sidebar />

                {/* CENTER CHAT */}
                <div className="flex flex-col flex-1">
                    <ChatHeader />
                    <ChatMessages />
                    <ChatInput />
                </div>

                {/* RIGHT PANEL */}
                <RightPanel />
            </div>
        </div>
    );
}

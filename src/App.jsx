import React from 'react';
import {
    LayoutDashboard, MessageSquare, Users, Star,
    Calendar, FileText, Search, Video, Phone, Mic, Paperclip
} from 'lucide-react';

const ChatPage = () => {
    return (
        <div className="flex h-screen w-full bg-[#E0C3FC] p-8 font-sans">
            <div className="flex w-full overflow-hidden rounded-[40px] gap-4">

                {/* SIDEBAR */}
                <div className="flex w-64 flex-col bg-[#1A0B2E] rounded-[30px] p-8 text-white/60">
                    <div className="mb-12 flex items-center gap-2 text-2xl font-bold text-white">
                        <div className="rounded-lg bg-white p-1 text-[#1A0B2E] text-sm">AI</div>
                        Chat
                    </div>

                    <nav className="flex flex-col gap-6">
                        <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" />
                        <NavItem icon={<MessageSquare size={20} />} label="Messages" active badge="13" />
                        <NavItem icon={<Users size={20} />} label="Groups" />
                        <NavItem icon={<Star size={20} />} label="Favourites" />
                        <NavItem icon={<Calendar size={20} />} label="Calendar" />
                        <NavItem icon={<FileText size={20} />} label="Files" />
                    </nav>

                    <div className="mt-auto flex items-center gap-3">
                        <img src="https://i.pravatar.cc/40?img=12" className="h-10 w-10 rounded-xl" alt="profile" />
                        <div>
                            <p className="text-sm font-semibold text-white">Jordan Betord</p>
                            <p className="text-xs text-white/40">@jordan.b_uxui</p>
                        </div>
                    </div>
                </div>

                {/* CHAT AREA */}
                <div className="flex flex-1 flex-col bg-[#F4F3F8] rounded-[30px]">
                    {/* Header */}
                    <header className="flex items-center justify-between border-b px-8 py-4">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <img key={i} src={`https://i.pravatar.cc/32?img=${i + 10}`} className="h-8 w-8 rounded-full border-2 border-white" />
                                ))}
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-800">Nixtio Team</h3>
                                <p className="text-xs text-[#4ADE80] font-medium">+6 Online</p>
                            </div>
                        </div>
                        <div className="flex gap-4 text-gray-400">
                            <Star size={20} /> <Search size={20} /> <Video size={20} /> <Phone size={20} />
                        </div>
                    </header>

                    {/* Messages Wrapper */}
                    <div className="flex-1 overflow-y-auto p-8 space-y-6">
                        {/* Received Message */}
                        <div className="flex gap-3">
                            <img src="https://i.pravatar.cc/40?img=5" className="h-10 w-10 rounded-xl self-start" />
                            <div className="max-w-md">
                                <p className="text-xs font-bold mb-1">Daniel Garcia</p>
                                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm">
                                    Check out pls this initial sketch for our new project? 🤔
                                </div>
                                <span className="text-[10px] text-gray-400 mt-1">12:04 PM</span>
                            </div>
                        </div>

                        {/* Sent Message */}
                        <div className="flex flex-col items-end gap-1">
                            <div className="bg-[#D1FADF] p-4 rounded-2xl rounded-tr-none text-sm font-medium shadow-sm">
                                Good Concepts! 🙏
                            </div>
                            <span className="text-[10px] text-gray-400">12:13 PM</span>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-8">
                        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                            <Paperclip className="text-gray-400 cursor-pointer" />
                            <input type="text" placeholder="Type Message.." className="flex-1 outline-none text-sm" />
                            <Mic className="text-gray-400 cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* RIGHT PANEL - MESSAGES LIST */}
                <div className="w-80 bg-white p-6 overflow-y-auto rounded-[30px]">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Messages</h2>
                        <div className="p-2 bg-gray-100 rounded-lg"><Search size={18} /></div>
                    </div>

                    <div className="space-y-6">
                        <section>
                            <h4 className="text-xs font-bold text-gray-400 uppercase mb-4">Pinned Chats</h4>
                            <ChatListItem name="George Lobko" msg="Thanks for the quick response" time="09:41" />
                            <ChatListItem name="Amelia Korns" msg="I'm stuck in traffic..." time="21:25" badge="2" />
                        </section>

                        <section>
                            <h4 className="text-xs font-bold text-gray-400 uppercase mb-4">All Chats</h4>
                            <ChatListItem name="Nixtio Team" msg="Daniel is typing..." time="12:13" active />
                            <ChatListItem name="Anatoly Ferusso" msg="Sorry for the delay..." time="11:53" />
                        </section>
                    </div>
                </div>

            </div>
        </div>
    );
};

// --- Sub-Components ---

const NavItem = ({ icon, label, active = false, badge }) => (
    <div className={`flex items-center justify-between cursor-pointer transition ${active ? 'text-white' : 'hover:text-white'}`}>
        <div className="flex items-center gap-4">
            {icon}
            <span className="text-sm font-medium">{label}</span>
        </div>
        {badge && <span className="bg-white text-[#1A0B2E] text-[10px] font-bold px-2 py-0.5 rounded-full">{badge}</span>}
    </div>
);

const ChatListItem = ({ name, msg, time, badge, active = false }) => (
    <div className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition ${active ? 'bg-[#F4F3F8] border border-gray-100' : 'hover:bg-gray-50'}`}>
        <img src={`https://i.pravatar.cc/40?u=${name}`} className="h-10 w-10 rounded-xl" alt="" />
        <div className="flex-1 overflow-hidden">
            <div className="flex justify-between items-center">
                <h5 className="text-sm font-bold truncate">{name}</h5>
                <span className="text-[10px] text-gray-400">{time}</span>
            </div>
            <p className="text-xs text-gray-500 truncate">{msg}</p>
        </div>
        {badge && <span className="bg-black text-white text-[10px] px-1.5 py-0.5 rounded-full">{badge}</span>}
    </div>
);

export default ChatPage;
import { MessageSquare, Users, Star, Calendar, File } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="w-[240px] bg-[#001121] text-white p-6 flex flex-col">
            <h1 className="text-xl font-bold mb-10">AI Chat</h1>

            <nav className="space-y-5 text-sm">
                <NavItem icon={<MessageSquare size={18} />} label="Messages" active />
                <NavItem icon={<Users size={18} />} label="Groups" />
                <NavItem icon={<Star size={18} />} label="Favorites" />
                <NavItem icon={<Calendar size={18} />} label="Calendar" />
                <NavItem icon={<File size={18} />} label="Files" />
            </nav>

            <div className="mt-auto flex items-center gap-3">
                <img
                    src="https://i.pravatar.cc/40"
                    className="rounded-full"
                />
                <div>
                    <p className="text-sm font-semibold">Jordan Betord</p>
                    <p className="text-xs text-gray-300">@jordan</p>
                </div>
            </div>
        </div>
    );
}

function NavItem({ icon, label, active }) {
    return (
        <div
            className={`flex items-center gap-3 cursor-pointer ${active ? "text-white" : "text-gray-400"
                }`}
        >
            {icon}
            {label}
        </div>
    );
}

import {
    LayoutDashboard,
    MessageSquare,
    Users,
    Star,
    Calendar,
    FileText
} from "lucide-react";
import NavItem from "./NavItem";
import { useSelector } from "react-redux";

const Sidebar = ({ onProfileClick }) => {
    const { profile } = useSelector((s) => s.user)

    return (
        <div className="
            flex flex-col bg-[#1A0B2E] text-white/60
            rounded-[30px]
            w-16 lg2:w-64
            p-4 lg2:p-8
        ">
            {/* LOGO */}
            <div className="mb-8 lg2:mb-12 flex items-center justify-center lg2:justify-start gap-2 text-2xl font-bold text-white">
                <div className="rounded-lg bg-white p-1 text-[#1A0B2E] text-sm flex-shrink-0">
                    AI
                </div>
                {/* Text sirf md+ pe */}
                <span className="hidden md:inline">Chat</span>
            </div>

            {/* NAV */}
            <nav className="flex flex-col gap-6">
                <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" />
                <NavItem icon={<MessageSquare size={20} />} label="Messages" active badge="13" />
                <NavItem icon={<Users size={20} />} label="Groups" />
                <NavItem icon={<Star size={20} />} label="Favourites" />
                <NavItem icon={<Calendar size={20} />} label="Calendar" />
                <NavItem icon={<FileText size={20} />} label="Files" />
            </nav>

            {/* PROFILE */}
            <div
                className="mt-auto flex items-center justify-center lg2:justify-start gap-3 cursor-pointer"
                onClick={onProfileClick}
            >
                <img
                    src={profile.avtar}
                    className="h-10 w-10 rounded-xl flex-shrink-0"
                    alt="profile"
                />
                {/* Name/username sirf md+ pe */}
                <div className="hidden md:block">
                    <p className="text-sm font-semibold text-white">{profile.name}</p>
                    <p className="text-xs text-white/40">@{profile.username}</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
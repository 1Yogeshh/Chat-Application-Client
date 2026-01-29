import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Star,
  Calendar,
  FileText,
} from "lucide-react";
import NavItem from "./NavItem";

const Sidebar = () => {
  return (
    <div className="flex w-64 flex-col bg-[#1A0B2E] rounded-[30px] p-8 text-white/60">
      <div className="mb-12 flex items-center gap-2 text-2xl font-bold text-white">
        <div className="rounded-lg bg-white p-1 text-[#1A0B2E] text-sm">
          AI
        </div>
        Chat
      </div>

      <nav className="flex flex-col gap-6">
        <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" />
        <NavItem
          icon={<MessageSquare size={20} />}
          label="Messages"
          active
          badge="13"
        />
        <NavItem icon={<Users size={20} />} label="Groups" />
        <NavItem icon={<Star size={20} />} label="Favourites" />
        <NavItem icon={<Calendar size={20} />} label="Calendar" />
        <NavItem icon={<FileText size={20} />} label="Files" />
      </nav>

      <div className="mt-auto flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40?img=12"
          className="h-10 w-10 rounded-xl"
          alt="profile"
        />
        <div>
          <p className="text-sm font-semibold text-white">
            Jordan Betord
          </p>
          <p className="text-xs text-white/40">@jordan.b_uxui</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

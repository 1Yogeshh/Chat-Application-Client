import { Phone, Video, Search, Star } from "lucide-react";

export default function ChatHeader() {
  return (
    <div className="h-[70px] border-b flex items-center justify-between px-6">
      <div>
        <h2 className="font-semibold">Nixtio Team</h2>
        <p className="text-xs text-green-500">+6 Online</p>
      </div>

      <div className="flex items-center gap-4 text-gray-600">
        <Star size={18} />
        <Search size={18} />
        <Video size={18} />
        <Phone size={18} />
      </div>
    </div>
  );
}

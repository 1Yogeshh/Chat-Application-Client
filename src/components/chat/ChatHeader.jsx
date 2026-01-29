import { Star, Search, Video, Phone } from "lucide-react";

const ChatHeader = () => {
  return (
    <header className="flex items-center justify-between border-b px-8 py-4">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`https://i.pravatar.cc/32?img=${i + 10}`}
              className="h-8 w-8 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-800">
            Nixtio Team
          </h3>
          <p className="text-xs text-[#4ADE80] font-medium">
            +6 Online
          </p>
        </div>
      </div>

      <div className="flex gap-4 text-gray-400">
        <Star size={20} />
        <Search size={20} />
        <Video size={20} />
        <Phone size={20} />
      </div>
    </header>
  );
};

export default ChatHeader;

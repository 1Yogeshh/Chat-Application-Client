import { Star, Search, Video, Phone } from "lucide-react";

const ChatHeader = ({ onUserClick, user, isOnline }) => {
  if (!user) return null;

  const handleProfileOpen = () => {
    onUserClick?.(user);
  };

  return (
    <header className="flex items-center justify-between border-b px-8 py-4">
      <div onClick={handleProfileOpen} className="flex items-center gap-3">
        <div className="flex -space-x-2">
          <img
            src={user.avtar}
            className="h-8 w-8 rounded-full border-2 border-white"
          />
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-800">
            {user.name} ({user.username})
          </h3>
          <p
            className={`text-xs font-medium ${isOnline ? "text-[#4ADE80]" : "text-gray-400"
              }`}
          >
            {isOnline ? "Online" : "Offline"}
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

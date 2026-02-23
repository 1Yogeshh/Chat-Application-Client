import { Video, Phone, ArrowLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { setActiveChat } from "../../store/slices/chatSlice"; 

const ChatHeader = ({ onUserClick, user, isOnline }) => {
  const dispatch = useDispatch();

  if (!user) return null;

  const handleProfileOpen = () => {
    onUserClick?.(user);
  };

  const handleBack = (e) => {
    e.stopPropagation(); // profile open hone se roke
    dispatch(setActiveChat(null));
  };

  return (
    <header className="flex items-center justify-between border-b px-4 md:px-8 py-4 bg-white">
      
      {/* Left Section */}
      <div
        onClick={handleProfileOpen}
        className="flex items-center gap-3 cursor-pointer"
      >
        {/* Back Button (Mobile Only) */}
        <button
          onClick={handleBack}
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Avatar */}
        <img
          src={user.avtar || "/default-avatar.png"}
          alt={user.name}
          className="h-10 w-10 rounded-full object-cover border"
        />

        {/* User Info */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            {user.name} ({user.username})
          </h3>

          <p
            className={`text-xs font-medium ${
              isOnline ? "text-green-500" : "text-gray-400"
            }`}
          >
            {isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-4 text-gray-400">
        <Video size={20} className="cursor-pointer hover:text-gray-600" />
        <Phone size={20} className="cursor-pointer hover:text-gray-600" />
      </div>
    </header>
  );
};

export default ChatHeader;
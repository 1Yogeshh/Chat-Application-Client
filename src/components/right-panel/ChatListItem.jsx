const ChatListItem = ({
  name,
  msg,
  time,
  active = false,
  unreadCount = 0,
  isUnread = false,
  onClick,
  avtar
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center justify-between gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200
        ${active ? "bg-indigo-100" : ""}
        ${!active && isUnread ? "bg-gray-100" : ""}
        hover:bg-gray-50
      `}
    >
      <div className="flex items-center gap-3 min-w-0">
        {/* Avatar */}
        <img
          src={avtar}
          className="h-10 w-10 rounded-xl flex-shrink-0"
          alt={name}
        />

        <div className="flex flex-col min-w-0">
          <p
            className={`text-sm ${isUnread ? "font-semibold text-black" : "font-medium text-gray-800"
              }`}
          >
            {name}
          </p>

          <p
            className={`text-xs truncate ${isUnread ? "text-black font-medium" : "text-gray-500"
              }`}
          >
            {msg}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1 flex-shrink-0">
        <span className="text-[10px] text-gray-400">{time}</span>

        {unreadCount > 0 && (
          <div className="min-w-[20px] h-5 px-2 flex items-center justify-center bg-indigo-600 text-white text-[10px] rounded-full">
            {unreadCount > 99 ? "99+" : unreadCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatListItem;

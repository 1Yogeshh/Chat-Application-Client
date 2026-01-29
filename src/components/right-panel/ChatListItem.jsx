const ChatListItem = ({
  name,
  msg,
  time,
  badge,
  active = false,
}) => {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition ${active
        ? "bg-[#F4F3F8] border border-gray-100"
        : "hover:bg-gray-50"
        }`}
    >
      {/* Avatar */}
      <img
        src={`https://i.pravatar.cc/40?u=${name}`}
        className="h-10 w-10 rounded-xl flex-shrink-0 mt-1"
        alt={name}
      />

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-start">
            <h5 className="text-sm font-bold truncate">
              {name}
            </h5>
            <p className="text-xs text-gray-500 truncate mt-0.5">
              {msg}
            </p>
          </div>

          {/* Right meta */}
          <div className="flex flex-col items-end gap-1 ml-2 mt-1">
            <span className="text-[10px] text-gray-400 leading-none">
              {time}
            </span>

            {badge && (
              <span className="bg-black text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full">
                {badge}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;

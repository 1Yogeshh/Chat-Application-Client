const ChatListItem = ({
  name,
  msg,
  time,
  badge,
  active = false,
}) => {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition ${
        active
          ? "bg-[#F4F3F8] border border-gray-100"
          : "hover:bg-gray-50"
      }`}
    >
      <img
        src={`https://i.pravatar.cc/40?u=${name}`}
        className="h-10 w-10 rounded-xl"
      />
      <div className="flex-1 overflow-hidden">
        <div className="flex justify-between items-center">
          <h5 className="text-sm font-bold truncate">
            {name}
          </h5>
          <span className="text-[10px] text-gray-400">
            {time}
          </span>
        </div>
        <p className="text-xs text-gray-500 truncate">
          {msg}
        </p>
      </div>
      {badge && (
        <span className="bg-black text-white text-[10px] px-1.5 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
};

export default ChatListItem;

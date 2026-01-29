const MessageBubble = ({
  type,
  name,
  avatar,
  message,
  time,
}) => {
  if (type === "received") {
    return (
      <div className="flex gap-3">
        <img
          src={avatar}
          className="h-10 w-10 rounded-xl self-start"
        />
        <div className="max-w-md">
          <p className="text-xs font-bold mb-1">{name}</p>
          <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm">
            {message}
          </div>
          <span className="text-[10px] text-gray-400 mt-1">
            {time}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <div className="bg-[#D1FADF] p-4 rounded-2xl rounded-tr-none text-sm font-medium shadow-sm">
        {message}
      </div>
      <span className="text-[10px] text-gray-400">{time}</span>
    </div>
  );
};

export default MessageBubble;

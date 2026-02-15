import { Check, CheckCheck } from "lucide-react";

const MessageBubble = ({
  type,
  name,
  avatar,
  message,
  time,
  sender,
  onUserClick,
  status
}) => {
  if (type === "received") {
    return (
      <div className="flex gap-3">
        <img
          src={avatar}
          onClick={() => onUserClick?.(sender)}
          className="h-10 w-10 rounded-xl self-start cursor-pointer"
        />

        <div className="max-w-md">
          <p
            onClick={() => onUserClick?.(sender)}
            className="text-xs font-bold mb-1 cursor-pointer hover:underline"
          >
            {name}
          </p>

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
      <div className="flex items-center gap-1 text-[10px] text-gray-400">
        <span>{time}</span>

        {/* 🔥 STATUS TICK */}
        {status === "SENT" && (
          <Check size={14} className="text-gray-400" />
        )}

        {status === "DELIVERED" && (
          <CheckCheck size={14} className="text-gray-400" />
        )}

        {status === "SEEN" && (
          <CheckCheck size={14} className="text-blue-500" />
        )}
      </div>
    </div>
  );
};

export default MessageBubble;

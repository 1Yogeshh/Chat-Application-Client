import { Paperclip, Mic } from "lucide-react";

const MessageInput = () => {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
        <Paperclip className="text-gray-400 cursor-pointer" />
        <input
          type="text"
          placeholder="Type Message.."
          className="flex-1 outline-none text-sm"
        />
        <Mic className="text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default MessageInput;

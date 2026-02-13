import { Paperclip, Mic, Send } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../store/slices/chatSlice";

const MessageInput = ({ chatId }) => {
  const [text, setText] = useState("")
  const dispatch = useDispatch();

  const handleSend = () => {
    console.log("CLICK SEND", chatId, text);
    if (!text.trim()) return;
    dispatch(
      sendMessage({
        chatId,
        content: text,
      })
    )
    setText("")
  }
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
        <Paperclip className="text-gray-400 cursor-pointer" />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type Message.."
          className="flex-1 outline-none text-sm"
        />
        <button
          onClick={handleSend}
          className="bg-[#4F46E5] text-white p-3 rounded-xl"
        >
          <Send size={18} />
        </button>
        <Mic className="text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default MessageInput;

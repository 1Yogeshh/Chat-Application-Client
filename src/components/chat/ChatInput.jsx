import { Mic, Paperclip, Send } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="h-[70px] border-t flex items-center px-6 gap-4">
      <Paperclip size={20} className="text-gray-400" />

      <input
        placeholder="Type message..."
        className="flex-1 border rounded-full px-4 py-2 outline-none"
      />

      <Mic size={20} className="text-gray-400" />
      <Send size={20} className="text-purple-600" />
    </div>
  );
}

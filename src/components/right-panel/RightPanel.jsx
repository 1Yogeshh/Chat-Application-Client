import { MessageSquare, PenLine, Pin, Search } from "lucide-react";
import ChatListItem from "./ChatListItem";

const RightPanel = () => {
  return (
    <div className="w-80 bg-white p-6 overflow-y-auto rounded-[30px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Messages</h2>
        <div className="p-2 rounded-lg">
          <PenLine size={18} />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-6 bg-gray-100 p-1 rounded-lg">
          <input type="text" placeholder="Search or start of message" className="w-[85%] p-2 outline-none" />
          <div className="p-2 rounded-lg">
            <Search size={18} />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <section>
          <div className="flex gap-2 align-center">
            <Pin size={18} />
            <h4 className="text-xs font-bold text-black uppercase mb-4">
              Pinned Chats
            </h4>
          </div>
          <ChatListItem
            name="George Lobko"
            msg="Thanks for the quick response"
            time="09:41"
          />
          <ChatListItem
            name="Amelia Korns"
            msg="I'm stuck in traffic..."
            time="21:25"
            badge="2"
          />
        </section>

        <section>
          <div className="flex gap-2 align-center">
            <MessageSquare size={18} />
            <h4 className="text-xs font-bold text-black uppercase mb-4">
              All Chats
            </h4>
          </div>
          <ChatListItem
            name="Nixtio Team"
            msg="Daniel is typing..."
            time="12:13"
            active
          />
          <ChatListItem
            name="Anatoly Ferusso"
            msg="Sorry for the delay..."
            time="11:53"
          />
        </section>
      </div>
    </div>
  );
};

export default RightPanel;

import MessageBubble from "./MessageBubble";

const Messages = () => {
  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-6">
      <MessageBubble
        type="received"
        name="Daniel Garcia"
        avatar="https://i.pravatar.cc/40?img=5"
        message="Check out pls this initial sketch for our new project? 🤔"
        time="12:04 PM"
      />

      <MessageBubble
        type="sent"
        message="Good Concepts! 🙏"
        time="12:13 PM"
      />
    </div>
  );
};

export default Messages;

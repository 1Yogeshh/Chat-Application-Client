import MessageBubble from "./MessageBubble";

const Messages = ({ onUserClick }) => {
  const messages = [
    {
      id: 1,
      type: "received",
      sender: {
        id: "2",
        name: "Daniel Garcia",
        username: "daniel.g",
        avatar: "https://i.pravatar.cc/40?img=5",
      },
      message: "Check out pls this initial sketch for our new project? 🤔",
      time: "12:04 PM",
    },
    {
      id: 2,
      type: "sent",
      message: "Good Concepts! 🙏",
      time: "12:13 PM",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-6">
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          type={msg.type}
          name={msg.sender?.name}
          avatar={msg.sender?.avatar}
          sender={msg.sender}           // 👈 FULL USER
          message={msg.message}
          time={msg.time}
          onUserClick={onUserClick}     // 👈 CALLBACK
        />
      ))}
    </div>
  );
};

export default Messages;

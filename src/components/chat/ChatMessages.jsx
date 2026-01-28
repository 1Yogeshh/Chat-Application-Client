export default function ChatMessages() {
  return (
    <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50">

      {/* incoming */}
      <Message
        user="Daniel Garcia"
        text="Check out this initial sketch for our new project?"
        incoming
      />

      {/* outgoing */}
      <Message
        user="You"
        text="Looks great! Let's discuss on call."
      />

    </div>
  );
}

function Message({ user, text, incoming }) {
  return (
    <div className={`flex ${incoming ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-md px-4 py-2 rounded-2xl text-sm ${
          incoming
            ? "bg-white border"
            : "bg-green-200"
        }`}
      >
        <p className="font-semibold text-xs mb-1">{user}</p>
        {text}
      </div>
    </div>
  );
}

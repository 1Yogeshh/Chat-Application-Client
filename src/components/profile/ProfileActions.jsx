export default function ProfileActions({ isOwn }) {
  if (isOwn) {
    return (
      <div className="px-6 pb-6 flex gap-4">
        <Action text="Edit Profile" />
        <Action text="Settings" />
      </div>
    );
  }

  return (
    <div className="px-6 pb-6 flex gap-4">
      <Action text="Message" primary />
      <Action text="Add Friend" />
    </div>
  );
}

function Action({ text, primary }) {
  return (
    <button
      className={`px-5 py-2 rounded-lg text-sm ${
        primary
          ? "bg-[#4F46E5] text-white"
          : "border text-gray-700"
      }`}
    >
      {text}
    </button>
  );
}

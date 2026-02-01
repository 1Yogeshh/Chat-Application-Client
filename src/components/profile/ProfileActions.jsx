const ProfileActions = ({ isOwn }) => {
  if (isOwn) {
    return (
      <div className="mt-6 px-6 flex gap-4">
        <Action label="Settings" />
        <Action label="Logout" />
      </div>
    );
  }

  return (
    <div className="mt-6 px-6 flex gap-4">
      <Action label="Message" primary />
      <Action label="Block" />
    </div>
  );
};

function Action({ label, primary }) {
  return (
    <button
      className={`rounded-lg px-5 py-2 text-sm ${
        primary
          ? "bg-[#4F46E5] text-white"
          : "border text-gray-700"
      }`}
    >
      {label}
    </button>
  );
}

export default ProfileActions;

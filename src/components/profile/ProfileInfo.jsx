const ProfileInfo = ({ user }) => {
  return (
    <div className="mt-16 px-6">
      <p className="mb-6 text-sm text-gray-700">
        Full-stack dev | Building chat apps 🚀
      </p>

      <div className="flex gap-6 text-sm">
        <Stat label="Chats" value="128" />
        <Stat label="Groups" value="24" />
        <Stat label="Joined" value="2024" />
      </div>
    </div>
  );
};

function Stat({ label, value }) {
  return (
    <div>
      <p className="font-semibold text-gray-900">{value}</p>
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

export default ProfileInfo;

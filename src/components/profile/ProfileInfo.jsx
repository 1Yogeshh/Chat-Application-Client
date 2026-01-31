export default function ProfileInfo() {
  return (
    <div className="mt-20 px-6 pb-6">
      <p className="text-gray-700 mb-6">
        Full-stack developer | Building chat apps & scalable systems 🚀
      </p>

      <div className="flex gap-6 text-sm">
        <Stat label="Chats" value="128" />
        <Stat label="Groups" value="24" />
        <Stat label="Joined" value="2024" />
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="font-semibold text-gray-900">{value}</p>
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

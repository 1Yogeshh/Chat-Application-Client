export default function RightPanel() {
  return (
    <div className="w-[300px] border-l p-6">
      <h3 className="font-semibold mb-4">Messages</h3>

      <input
        placeholder="Search..."
        className="w-full mb-4 px-3 py-2 border rounded-lg text-sm"
      />

      <div className="space-y-4">
        <User name="Daniel" msg="Thanks for update" />
        <User name="Anna" msg="I'm stuck in traffic" />
        <User name="Arnold" msg="Great job!" />
      </div>
    </div>
  );
}

function User({ name, msg }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://i.pravatar.cc/35"
        className="rounded-full"
      />
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-gray-500">{msg}</p>
      </div>
    </div>
  );
}

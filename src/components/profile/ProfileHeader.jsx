export default function ProfileHeader({ isOwn, user }) {
  console.log("hello... ", user)
  return (
    <div className="relative">
      <div className="h-40 bg-[#4F46E5]" />
      <div className="absolute left-6 -bottom-12 flex items-end gap-4">
        <img
          src={user.avtar}
          className="w-28 h-28 rounded-full border-4 border-white"
          alt="User Avatar"
        />
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            {user.name}
          </h1>
          <p className="text-sm text-gray-500">
            @{user.username}
          </p>
        </div>
      </div>

      {isOwn && (
        <button className="absolute right-6 bottom-4 px-4 py-2 text-sm rounded-lg bg-white border">
          Edit Profile
        </button>
      )}
    </div>
  );
}

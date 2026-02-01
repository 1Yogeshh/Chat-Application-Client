import { X } from "lucide-react";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import ProfileActions from "./ProfileActions";

const ProfileModal = ({ open, onClose, user, loggedInUser }) => {
  if (!open || !user) return null;

  const isOwn = user.id === loggedInUser.id;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />

      {/* SIDE PANEL */}
      <div className="relative h-full w-[380px] bg-[#F8FAFC] shadow-xl animate-slideIn">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500"
        >
          <X size={20} />
        </button>

        <div className="h-full overflow-y-auto pb-10">
          <ProfileHeader user={user} isOwn={isOwn} />
          <ProfileInfo user={user} />
          <ProfileActions user={user} isOwn={isOwn} />
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

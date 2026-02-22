import { X, ArrowLeft } from "lucide-react";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import ProfileActions from "./ProfileActions";

const ProfileModal = ({ open, onClose, user, loggedInUser }) => {
  if (!open || !user) return null;

  const isOwn = user.id === loggedInUser.id;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />

      <div className="relative h-full w-full lg2:w-[380px] bg-[#F8FAFC] shadow-xl">

        <button
          onClick={onClose}
          className="lg2:hidden absolute left-4 top-4 z-10 flex items-center gap-1 text-white"
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={onClose}
          className="hidden lg2:flex absolute right-4 top-4 z-10 text-white hover:pointer"
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
import { X } from "lucide-react";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import ProfileActions from "./ProfileActions";

export default function ProfileModal({ open, onClose, isOwn }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />

      {/* PANEL */}
      <div className="relative w-[380px] h-full bg-[#F8FAFC] shadow-xl animate-slideIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500"
        >
          <X size={20} />
        </button>

        <div className="overflow-y-auto h-full pb-10">

          <ProfileHeader isOwn={isOwn} />
          <ProfileInfo />
          <ProfileActions isOwn={isOwn} />

        </div>
      </div>
    </div>
  );
}

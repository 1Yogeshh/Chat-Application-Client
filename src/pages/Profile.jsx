import Sidebar from "../components/sidebar/Sidebar";
import AnimatedBackground from "../components/background/AnimatedBackground";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileActions from "../components/profile/ProfileActions";

const ProfilePage = ({ isOwn = false }) => {
    return (
        <div className="relative flex h-screen w-full p-8 font-sans overflow-hidden">
            {/* SAME ANIMATED BG */}
            <AnimatedBackground />

            {/* SAME OUTER CONTAINER */}
            <div className="flex w-full gap-4 overflow-hidden">

                {/* SIDEBAR */}
                <Sidebar />

                {/* MAIN PROFILE AREA */}
                <div className="flex-1 overflow-y-auto h-full">

                    <div className=" mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 h-full">

                        {/* PROFILE CARD */}
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-full">
                            <ProfileHeader isOwn={isOwn} />
                            <ProfileInfo />
                            <ProfileActions isOwn={isOwn} />
                        </div>

                        {/* RIGHT INFO (LIGHT PANEL) */}
                        <div className="space-y-6 h-full">

                            {/* ABOUT */}
                            <div className="bg-white rounded-2xl shadow-sm p-6 h-1/3">
                                <h3 className="font-semibold text-gray-900 mb-3">
                                    About
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Joined March 2024
                                </p>
                                <p className="text-sm text-gray-600">
                                    Last seen 2h ago
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

import { Mail, User } from "lucide-react";
import InputField from "./InputField";

export default function CreateUserForm() {
    return (
        <form
            className="w-full max-w-lg space-y-6 text-center"
        >
            <div>
                <h1 className="text-xl font-bold text-gray-900 mb-2">
                    Complete Your Profile
                </h1>

                <p className="text-gray-500">
                    Just one more step to get started 🚀
                </p>
            </div>

            {/* EMAIL (prefilled + disabled) */}
            <div>
                <label className="block text-sm font-semibold mb-1.5 text-left">
                    Email
                </label>

                <div className="relative">
                    <Mail
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                        disabled
                        className="w-full pl-10 py-2.5 border rounded-lg bg-gray-100 cursor-not-allowed"
                    />
                </div>
            </div>

            {/* NAME */}
            <InputField
                label="Full Name"
                id="name"
                type="text"
                placeholder="John Doe"
                Icon={User}
            />

            {/* USERNAME */}
            <InputField
                label="Username"
                id="username"
                type="text"
                placeholder="john_doe"
                Icon={User}
            />

            <button
                type="submit"
                className="w-full py-3 rounded-md font-semibold text-white bg-[#001121]"
            >
                Continue
            </button>
        </form>
    );
}

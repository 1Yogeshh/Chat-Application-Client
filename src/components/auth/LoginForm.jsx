import { Mail, Lock, EyeOff } from "lucide-react";
import InputField from "./InputField";

export default function LoginForm() {
    return (
        <div className="w-full max-w-lg text-center space-y-6">
            <div>
                <h1 className="text-xl font-bold text-gray-900 mb-2">
                    Sign In to Your Account
                </h1>
                <p className="text-gray-500">
                    Please enter your details
                </p>
            </div>

            <form className="space-y-4 mt-10">
                <InputField
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    Icon={Mail}
                />

                <InputField
                    label="Password"
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    Icon={Lock}
                    rightIcon={<EyeOff size={18} />}
                />

                <div className="text-right">
                    <a
                        href="#"
                        className="text-xs font-semibold text-gray-900"
                    >
                        Forgot Password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 rounded-md font-semibold text-white bg-[#001121] hover:opacity-90 transition"
                >
                    Sign in
                </button>
            </form>

            <p className="text-md text-gray-600 mt-6">
                Don&apos;t have an account?{" "}
                <a href="#" className="font-medium text-gray-900 underline">
                    Create Account
                </a>
            </p>
        </div>
    );
}

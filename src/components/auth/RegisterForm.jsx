import { Mail, Lock, EyeOff } from "lucide-react";
import InputField from "./InputField";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../store/slices/authSlice";

export default function RegisterForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, loading } = useSelector((s) => s.auth)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)

        dispatch(
            registerUser({
                email: form.get("email"),
                password: form.get("password")
            })
        )
    }

    return (
        <div className="w-full max-w-lg text-center space-y-6" >
            <div>
                <h1 className="text-xl font-bold text-gray-900 mb-2" >
                    Create Your Account
                </h1>
                <p className="text-gray-500" >
                    Please enter your details </p>
            </div>

            <form onSubmit={handleSubmit}
                className="space-y-6 mt-10" >
                <InputField label="Email"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    Icon={Mail}
                />

                <InputField label="Password"
                    name="password"
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    Icon={Lock}
                    rightIcon={< EyeOff size={18}
                    />}
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-md font-semibold text-white bg-[#001121] hover:opacity-90 transition disabled:opacity-60" >
                    {loading ? "Signing in..." : "Sign in"}
                </button>
            </form>

            <p className="text-md text-gray-600 mt-6" >
                You have already account ? {" "}
                <a href="#"
                    className="font-medium text-gray-900 underline" >
                    Login
                </a>
            </p>
        </div>
    );
}
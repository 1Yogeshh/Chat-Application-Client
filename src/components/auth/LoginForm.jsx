import { Mail, Lock, EyeOff } from "lucide-react";
import InputField from "./InputField";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/slices/authSlice"
import { useEffect } from "react";

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, loading } = useSelector((s) => s.auth)
    const { profile } = useSelector((s) => s.user)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        console.log(form.get("email"))
        console.log(form.get("password"))

        dispatch(
            loginUser({
                email: form.get("email"),
                password: form.get("password")
            })
        )
    }

    useEffect(() => {
        if (profile) {
            navigate("/chat")
        }
        else if (user) {
            navigate("/create-user")
        }
    }, [user, navigate, profile])


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

            <form onSubmit={handleSubmit} className="space-y-4 mt-10">
                <InputField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    Icon={Mail}
                />

                <InputField
                    label="Password"
                    name="password"
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
                    disabled={loading}
                    className="w-full py-3 rounded-md font-semibold text-white bg-[#001121] hover:opacity-90 transition disabled:opacity-60"
                >
                    {loading ? "Signing in..." : "Sign in"}
                </button>

            </form>

            <p className="text-md text-gray-600 mt-6">
                Don&apos;t have an account?{" "}
                <a href="/register" className="font-medium text-gray-900 underline">
                    Create Account
                </a>
            </p>
        </div>
    );
}

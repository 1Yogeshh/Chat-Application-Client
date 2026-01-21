import bgImage from "../assets/blueBackground.png"
import { Mail, Lock, EyeOff } from 'lucide-react';

export default function Register() {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-[35%_65%] bg-white">

            {/* LEFT IMAGE */}
            <div className="hidden md:block relative p-2">
                <img
                    src={bgImage}
                    alt="Login background"
                    className="inset-0 h-full w-full object-cover rounded-[20px]"
                />
                <div className="absolute inset-0 bg-cyan-500/10 rounded-[2.5rem]" />
            </div>

            {/* RIGHT FORM */}
            <div className="relative flex items-center justify-center px-6">

                <div className="w-full max-w-lg text-center">

                    {/* Heading */}
                    <h1 className="text-xl font-bold text-gray-900 mb-2">
                        Create Your Account
                    </h1>
                    <p className="text-md text-gray-500 mb-8 leading-relaxed">
                        Please enter your details
                    </p>

                    {/* FORM */}
                    <form className="space-y-6 mt-10">

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-700 mb-1.5 text-start"
                            >
                                Email <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Mail
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="example@gmail.com"
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-700 mb-1.5 text-start"
                            >
                                Password <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Lock
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                >
                                    <EyeOff size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-md font-semibold text-white bg-[#001121] hover:opacity-90 transition"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Register */}
                    <p className="text-md text-center text-gray-600 mt-6">
                        You have already account?{" "}
                        <a href="#" className="font-medium text-gray-900 underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
import bgImage from "../assets/blueBackground.png"

export default function Login() {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-[35%_65%]">

            {/* LEFT IMAGE */}
            <div className="hidden md:block p-3">
                <img
                    src={bgImage}
                    alt="Login background"
                    className="h-full w-full object-cover rounded-2xl"
                />
            </div>

            {/* RIGHT FORM */}
            <div className="flex items-center justify-center px-6 md:px-20">
                <div className="w-full max-w-md">

                    <header className="mb-8">
                        <h1 className="text-4xl font-bold">
                            Sign in to your account
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Please enter your credentials
                        </p>
                    </header>

                    <form className="space-y-5">

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-1 text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="you@example.com"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-1 text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder="••••••••"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-indigo-600" />
                                Remember me
                            </label>

                            <a
                                href="#"
                                className="text-indigo-600 hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

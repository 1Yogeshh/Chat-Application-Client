import { useState } from "react"

export default function App() {
  const [flip, setFlip] = useState(false)

  return (
    <div className="h-screen w-screen perspective overflow-hidden">
      <div
        className={`h-full w-full transition-transform duration-700 preserve-3d ${
          flip ? "rotate-y-180" : ""
        }`}
      >
        {/* ================= LOGIN (FRONT) ================= */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 backface-hidden">
          
          {/* Left Image */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md px-8">
              <h2 className="text-4xl font-bold mb-6">Login</h2>

              <input
                placeholder="Email"
                className="w-full mb-4 p-3 border rounded-lg"
              />
              <input
                placeholder="Password"
                type="password"
                className="w-full mb-4 p-3 border rounded-lg"
              />

              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
                Login
              </button>

              <p className="mt-4 text-sm">
                New here?{" "}
                <button
                  onClick={() => setFlip(true)}
                  className="text-indigo-600 font-semibold"
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* ================= REGISTER (BACK) ================= */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 backface-hidden rotate-y-180">
          
          {/* Left Form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md px-8">
              <h2 className="text-4xl font-bold mb-6">Register</h2>

              <input
                placeholder="Full Name"
                className="w-full mb-4 p-3 border rounded-lg"
              />
              <input
                placeholder="Email"
                className="w-full mb-4 p-3 border rounded-lg"
              />
              <input
                placeholder="Password"
                type="password"
                className="w-full mb-4 p-3 border rounded-lg"
              />

              <button className="w-full bg-purple-600 text-white py-3 rounded-lg">
                Register
              </button>

              <p className="mt-4 text-sm">
                Already have an account?{" "}
                <button
                  onClick={() => setFlip(false)}
                  className="text-purple-600 font-semibold"
                >
                  Login
                </button>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

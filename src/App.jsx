import { useState } from "react"
import bluePic from "./assets/blueBackground.png"

export default function App() {
  const [flip, setFlip] = useState(false)

  return (
    <div className="h-screen w-screen perspective overflow-hidden">
      <div
        className={`h-full w-full transition-transform duration-700 preserve-3d ${flip ? "rotate-y-180" : ""
          }`}
      >
        {/* ================= LOGIN (FRONT) ================= */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-[35%_65%] backface-hidden">

          {/* Left Image – 35% */}
          <div className="hidden md:block">
            <img
              src={bluePic}
              alt="background pic"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Form – 65% */}
          <div className="flex items-center justify-center px-6 md:px-20">
            <div className="w-full max-w-md">
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
                  className="text-indigo-600 font-semibold"
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

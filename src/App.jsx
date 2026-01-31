import { BrowserRouter, Route, Routes } from "react-router-dom"
import ChatPage from "./pages/Chat"
import CreateUser from "./pages/CreateUser"
import Login from "./pages/Login"
import ProfilePage from "./pages/Profile"
import Register from "./pages/Register"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/chat" />} />

                    {/* AUTH */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create-user" element={<CreateUser />} />

                    {/* MAIN APP */}
                    <Route path="/chat" element={<ChatPage />} />

                    {/* PROFILE */}
                    <Route path="/profile" element={<ProfilePage isOwn />} />
                    <Route path="/profile/:username" element={<ProfilePage />} />

                    {/* FALLBACK */}
                    <Route path="*" element={<Navigate to="/chat" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
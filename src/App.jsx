import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateUser from "./pages/CreateUser";
import ChatPage from "./pages/Chat";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* GUEST ONLY */}
                <Route
                    path="/login"
                    element={
                        <GuestGuard>
                            <Login />
                        </GuestGuard>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <GuestGuard>
                            <Register />
                        </GuestGuard>
                    }
                />

                {/* AUTH REQUIRED */}
                <Route
                    path="/create-user"
                    element={
                        <AuthGuard>
                            <CreateUser />
                        </AuthGuard>
                    }
                />

                <Route
                    path="/chat"
                    element={
                        <AuthGuard>
                            <ChatPage />
                        </AuthGuard>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;

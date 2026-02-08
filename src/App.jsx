import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateUser from "./pages/CreateUser";
import ChatPage from "./pages/Chat";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";
import AppInitializer from "./guards/AppInitializer";

function App() {
  return (
    <BrowserRouter>
      {/* 🔥 APP BOOTSTRAP – RUNS FIRST */}
      <AppInitializer>
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
      </AppInitializer>
    </BrowserRouter>
  );
}

export default App;

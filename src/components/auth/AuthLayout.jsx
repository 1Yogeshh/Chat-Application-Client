import AuthLeftImage from "./AuthLeftImage";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[35%_65%] bg-white">
      <AuthLeftImage />

      <div className="flex items-center justify-center px-6">
        {children}
      </div>
    </div>
  );
}

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br 
        from-[#0F172A] via-[#1E1B4B] to-[#020617]" />

      {/* Moving blobs */}
      <div className="absolute top-[-20%] left-[-15%] 
        h-[600px] w-[600px] rounded-full 
        bg-violet-500/35 blur-[140px] animate-drift-1" />

      <div className="absolute bottom-[-25%] right-[-15%] 
        h-[500px] w-[500px] rounded-full 
        bg-indigo-400/30 blur-[120px] animate-drift-2" />

      <div className="absolute top-[35%] right-[25%] 
        h-[350px] w-[350px] rounded-full 
        bg-fuchsia-500/20 blur-[100px] animate-drift-3" />
    </div>
  );
};

export default AnimatedBackground;

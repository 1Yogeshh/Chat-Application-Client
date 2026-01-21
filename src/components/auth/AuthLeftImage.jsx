import bgImage from "../../assets/blueBackground.png";

export default function AuthLeftImage() {
  return (
    <div className="hidden md:block relative p-2">
      <img
        src={bgImage}
        alt="Auth background"
        className="h-full w-full object-cover rounded-[20px]"
      />
      <div className="absolute inset-0 bg-cyan-500/10 rounded-[2.5rem]" />
    </div>
  );
}

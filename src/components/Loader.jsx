function Loader() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#242A2E]">
      <img
        src="/logo.png"
        alt="Worldwise"
        className="h-12 w-auto animate-pulse"
      />

      <div className="h-1 w-36 overflow-hidden rounded-full bg-[#3D484E]">
        <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-[#00C46A]" />
      </div>

      <p className="text-xs font-medium tracking-widest text-gray-500">
        PREPARING YOUR MAP
      </p>
    </div>
  );
}

export default Loader;

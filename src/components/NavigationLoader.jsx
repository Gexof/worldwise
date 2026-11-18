function NavigationLoader() {
  return (
    <div className="fixed left-0 top-0 z-9999 h-0.75 w-full overflow-hidden bg-[#00C46A]/15">
      <div className="h-full w-[35%] animate-navigation-loading rounded-full bg-[#00C46A] shadow-[0_0_10px_#00C46A,0_0_20px_#00C46A]" />
    </div>
  );
}

export default NavigationLoader;

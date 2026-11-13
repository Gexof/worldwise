function CountryItem({ country }) {
  return (
    <li className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#2D3439] px-5 py-4 text-white transition-all hover:border-[#00C46A]/40 hover:bg-[#343C42]">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#242A2E]">
        <span
          className={`fi fi-${country.emoji?.toLowerCase()} text-2xl`}
        ></span>
      </span>

      <div className="flex flex-1 flex-col gap-1">
        <span className="text-xs font-medium text-gray-500">COUNTRY</span>
        <span className="text-sm font-semibold">{country.country}</span>
      </div>

      <span className="rounded-full bg-[#00C46A]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#00C46A]">
        Visited
      </span>
    </li>
  );
}

export default CountryItem;

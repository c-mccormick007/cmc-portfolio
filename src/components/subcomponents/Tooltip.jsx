export default function Tooltip({ content, children }) {
  return (
    <div className="relative flex items-center group">
      {children}
      <div className="absolute right-full ml-2 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-150 ease-in-out
                      bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-md shadow-lg whitespace-nowrap z-50">
        {content}
      </div>
    </div>
  );
}
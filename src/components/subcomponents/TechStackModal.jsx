const TechStackModal = ({ stack, onClose, isVisible }) => (
  <div className={`absolute z-50 bg-zinc-900 text-white border border-zinc-700 rounded-md shadow-md p-4 right-24 w-39 
            flex flex-col items-center text-center transition-all duration-300 ease-out transform
            ${isVisible ? "opacity-100 scale-150 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
    <h4 className="font-semibold mb-2 text-lg">Tech Stack</h4>
    <ul className="space-y-2 text-sm text-zinc-300 width-4rm">
      {
        // eslint-disable-next-line no-unused-vars
        stack.map(({ tech, symbol: Icon }, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Icon className="text-lg" />
            <span>{tech}</span>
          </li>
        ))
      }
    </ul>
    <button
      onClick={onClose}
      className="mt-3 text-sm text-blue-400 hover:underline"
    >
      Close
    </button>
  </div>
);

export default TechStackModal;

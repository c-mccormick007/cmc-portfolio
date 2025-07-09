export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-sm text-zinc-500 py-8 px-4 text-center border-t border-zinc-800">
      <p>
        Built with <span className="text-white">React</span>,{" "}
        <span className="text-white">Tailwind CSS</span>, and{" "}
        <span className="text-white">Vite</span>. Hosted on{" "}
        <a
          href="https://pages.github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub Pages
        </a>
        .
      </p>
    </footer>
  );
}

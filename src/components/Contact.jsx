export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-900 text-white py-20 px-4 flex justify-center border-t border-zinc-800"
    >
      <div className="max-w-4xl w-full text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contact</h2>

        <p className="text-lg text-zinc-300">
          I'm open to contract, freelance, or full-time opportunities that align
          with my background in automation, process engineering, and web design.
        </p>

        <div className="flex justify-center gap-6 text-zinc-400 text-lg mt-6 flex-wrap">
          <a
            href="mailto:c.mccormick1295@gmail.com"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition hover:scale-105"
          >
            c.mccormick1295@gmail.com
          </a>
          <a
            href="https://github.com/c-mccormick007"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition hover:scale-105"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/cmccormick--us/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition hover:scale-105"
          >
            LinkedIn
          </a> 
        </div>

        <p className="text-sm text-zinc-600 mt-8">
          Based in Chicagoland • Available for remote roles
        </p>
      </div>
    </section>
  );
}

import cmcImg from "../assets/cmc-home.png";

export default function Home() {
  return (
    <section
      id="home"
      className="bg-zinc-950 text-white min-h-screen flex items-center justify-center px-12"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 py-8 md:px-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Christopher McCormick
          </h1>
          <h2 className="text-xl md:text-2xl text-zinc-400 mb-6">
            Developer with domain expertise in financial operations and workflow
            automation.
          </h2>
          <p className="text-md md:text-lg text-zinc-300 mb-8">
            I build internal tools that eliminate manual processes, reduce error
            rates, and let the team move faster without adding headcount. My most
            recent work—an end-to-end automation suite for Accounts Payable—has
            processed over 17,000 invoices and eliminated nearly 3 million
            keystrokes.
          </p>

          <div className="flex space-x-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-lg font-medium transition hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/chris-mccormick-resume-25.pdf"
              target="_blank"
              className="border border-zinc-400 hover:bg-zinc-800 text-white px-5 py-3 rounded-lg font-medium transition hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <img
            src={cmcImg}
            alt="Picture of Chris McCormick"
            className="w-3/4 max-w-sm rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

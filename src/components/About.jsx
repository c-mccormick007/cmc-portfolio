export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-900 text-white px-12 pt-16 flex justify-center"
    >
      <div className="max-w-6xl w-full space-y-6 text-zinc-300">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 border-b border-zinc-700 pb-2">
          About Me
        </h2>
        <p className="text-lg leading-relaxed">
          I automate the slog out of AP. The Python stack I built now takes every vendor email, rips and parses the PDF, and posts straight into AS400. Over 18,000 invoices a year—this saves our accounting team $130 K in labor and chops month-end close by two days.
        </p>
        <p className="text-lg leading-relaxed">
          My wheelhouse: rapid automation with UIs people actually use. I surface status and exceptions in a React + Tailwind dashboard so ops spots issues in real time instead of chasing spreadsheets.
        </p>
        <p className="text-lg leading-relaxed">
          Full stack? Check. I host a lean AP-stats portal on Render and I’m shipping a React Native/Firebase league-management app to save our tourney coordinators from burnout.
        </p>
        <p className="text-lg leading-relaxed">
          CS degree lands Spring ’26. The results are already in production. Looking for a team that measures success in hours saved per sprint—not in titles.
        </p>
        <p className="text-xl leading-relaxed italic">
          Ya heard.
        </p>
      </div>
    </section>
  );
}

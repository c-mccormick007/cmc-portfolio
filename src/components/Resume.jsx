export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-zinc-900 text-white py-10 px-12 flex justify-center pt-16 "
    >
      <div className="max-w-6xl w-full space-y-6 text-zinc-300">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 border-b border-zinc-700 pb-2">
          Resume
        </h2>

        <p className="text-lg">
          I bring a unique mix of real-world operational experience and
          technical proficiency. My work in Accounts Payable has directly
          resulted in process automation, labor savings, and increased system
          reliability through Python development, SAP process optimization, and
          IBM AS400 tooling.
        </p>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Current Role
          </h3>
          <p className="text-md">
            <strong>Accounts Payable Specialist</strong> @ Safco Dental Supply
            <br />
            <span className="text-zinc-400">Sep 2023 – Present</span>
          </p>
          <ul className="list-disc list-inside text-zinc-400 mt-2 space-y-1">
            <li>
              Built custom Python tools to automate full-cycle AP processing and
              reporting.
            </li>
            <li>
              Transitioned department from paper-based to fully digital
              workflows.
            </li>
            <li>
              Reduced invoice processing time by 60% and manual labor by 30%.
            </li>
            <li>
              Designed invoice suite that handled 17,000+ documents with
              960,000+ keystrokes eliminated.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mt-6 mb-2">
            Education
          </h3>
          <p>
            <strong>University of Illinois Springfield</strong>
            <br />
            Bachelor’s in Computer Science — Expected Spring 2026 (4.0 GPA)
          </p>
          <p className="mt-2">
            <strong>Moraine Valley Community College</strong>
            <br />
            Associate’s in Computer Science — Graduated 2018
          </p>
        </div>

        <div className="mt-6">
          <a
            href="/cmc-portfolio/chris-mccormick-resume-25.pdf"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition  hover:scale-105"
          >
            Download Full Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

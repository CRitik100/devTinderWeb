import { Link } from "react-router";

const Welcome = () => {
  const steps = [
    {
      title: "Create your profile",
      text: "Add your skills, stack and what you want to build.",
    },
    {
      title: "Discover developers",
      text: "Browse profiles and send a request to the ones you like.",
    },
    {
      title: "Connect and build",
      text: "Once you both accept, start chatting and collaborating.",
    },
  ];
  return (
    <div className="min-h-screen bg-[#110e2b] font-['Poppins',sans-serif] text-white">
      {/* Header */}
      <header className="relative flex h-20 items-center justify-end gap-6 px-6 sm:px-14">
        <Link
          to="/login"
          className="text-sm font-medium text-white hover:opacity-80"
        >
          Log in
        </Link>
        <Link
          to="/signup"
          className="rounded-full bg-[#e5715f] px-6 py-3 text-sm font-semibold text-[#05002e] transition hover:brightness-110"
        >
          Sign up
        </Link>
      </header>

      {/* Hero */}
      <main className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-12 text-center sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#e5715f]">
          Welcome to devTinder
        </p>

        <h1 className="mt-8 text-4xl font-bold leading-[1.15] tracking-tight sm:text-6xl md:text-7xl">
          Find developers to <span className="text-[#e5715f]">code,</span>
          <br />
          <span className="text-[#e5715f]">learn and build</span> with.
        </h1>

        <p className="mt-10 max-w-md text-base leading-relaxed text-[#cfc6f0]">
          Swipe through developer profiles, connect with people who share your
          stack, and start your next project together.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/signup"
            className="rounded-full bg-[#e5715f] px-9 py-4 text-sm font-semibold text-[#05002e] transition hover:brightness-110"
          >
            Get started
          </Link>
          <Link
            to="/login"
            className="rounded-full border-2 border-[#7b6fc4] px-9 py-4 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            I already have an account
          </Link>
        </div>

        {/* Steps */}
        <ol className="mt-20 grid w-full gap-10 pb-16 sm:grid-cols-3 sm:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col items-center px-4">
              <span className="text-3xl font-semibold text-[#e5715f]">
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
              <p className="mt-1 max-w-[16rem] text-sm leading-relaxed text-[#cfc6f0]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
};

export default Welcome;

import Reveal from './Reveal';

const accounts = [
  {
    label: "github",
    handle: "Prawaldev",
    url: "https://github.com/Prawaldev",
  },
  {
    label: "discord",
    handle: "6bpr",
    url: "https://discord.com/users/6bpr",
  },
];

const Accounts = () => {
  return (
    <section id="accounts" className="mx-auto max-w-2xl px-6 pb-16">
      <Reveal>
        <h2 className="mb-6 font-sans text-2xl font-semibold text-ink">
          <span className="text-pur">t</span>:: talk to me
        </h2>
      </Reveal>
      <div className="space-y-3 font-sans text-lg">
        {accounts.map((a) => (
          <Reveal key={a.label}>
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline gap-3 rounded border border-ink/20 px-4 py-3 transition-colors hover:bg-sky hover:text-paper"
            >
              <span className="w-20 text-ink/50">{a.label}:</span>
              <span className="text-sky transition-colors group-hover:text-yellow-300">@{a.handle}</span>
              <span className="ml-auto text-ink/40">↗</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Accounts;

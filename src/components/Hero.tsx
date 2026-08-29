import Reveal from './Reveal';

const Hero = () => {
  return (
    <section id="top" className="mx-auto max-w-2xl px-6 pt-20">
      <Reveal>
        <p className="font-sans text-lg leading-relaxed text-ink">
          <span className="text-sky">$</span> welcome to my homepage it is a little bare but
          here i keep the things i build <span className="text-sky">¯\_(ツ)_/¯</span>
        </p>
      </Reveal>

      <Reveal className="mt-10">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
          <img
            src="/icon-512.png"
            alt="Prawal avatar"
            className="h-28 w-28 rounded-full object-cover ring-2 ring-sky"
          />
          <div className="text-center sm:text-left">
            <h1 className="font-sans text-4xl font-semibold text-ink sm:text-5xl">Prawal</h1>
            <p className="mt-1 font-sans text-lg text-link">
              <span className="text-ink">he/him · </span>web developer
            </p>
            <p className="mt-2 font-sans text-base text-ink/80">
              ∴ ᒷ ᒷ ᒲ ʖ ꖎ ⚍ ‡ ↸ ⚍ ᓭ ⎔
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <div className="border-t border-ink/15 pt-6 font-sans text-base text-ink/80">
          <p><span className="text-sky">$</span> curl prawaldev</p>
          <p className="mt-1 text-ink/60">type: personal homepage</p>
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;

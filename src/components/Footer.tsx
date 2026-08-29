const Footer = () => {
  return (
    <footer className="mx-auto max-w-2xl border-t border-ink/15 px-6 py-10 font-sans text-base text-ink/70">
      <p>webmaster: prawal</p>
      <p>web: prawal.is-a.dev</p>
      <p className="mt-6 text-ink/50">© {new Date().getFullYear()} prawaldev</p>
    </footer>
  );
};

export default Footer;

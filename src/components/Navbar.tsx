const Navbar = () => {
  return (
    <header className="mx-auto max-w-2xl px-6 pt-8">
      <div className="flex items-center justify-between font-sans text-sm text-ink">
        <a href="#top" className="text-sky hover:underline">prawaldev</a>
        <nav className="flex gap-5">
          <a href="#projects" className="hover:text-sky hover:underline">projects</a>
          <a href="#accounts" className="hover:text-sky hover:underline">accounts</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

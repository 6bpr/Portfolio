import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Accounts from './components/Accounts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-paper/60 text-ink">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Accounts />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {


  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-sm font-medium text-slate-500">
        <p>© {new Date().getFullYear()} Engineered with React, Tailwind & Framer Motion.</p>
      </footer>
    </div>
  );
}
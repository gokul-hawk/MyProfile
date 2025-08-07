import Header from './components/Header';
import Hero from "./components/Hero";
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
function App() {
  return (
    <div className="bg-[#0f0f1f]">
    <Header />
    <main className="pt-24">
        <Hero/>
        <About />
        <Project/>
        
        <Contact />
      </main>
    </div>
  );
}

export default App;

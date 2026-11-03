


import Header from "./components/header"; 
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contacts";
import Certificates from "./components/certificates";


export default function Home() {
  return (
   <main className="min-h-screen bg-white text-black">
      <Header/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      
    </main>
  );
}

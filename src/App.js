import Header from "./components/Header"
import './App.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Journey from "./components/Journey";

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <About/>
     <Projects/>
     <Resume/>
     <Journey/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;

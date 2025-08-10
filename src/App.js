// App.js
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Journey from "./components/Journey";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main landing page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <About />
              <Projects />
              <Resume />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Journey page route */}
        <Route path="/journey" element={<Journey />} />
      </Routes>
    </Router>
  );
}

export default App;

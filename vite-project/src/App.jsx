import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home'; 
import Portfolio from './Pages/Portfolio.jsx'; 
import Contact from './Pages/Contact.jsx';
import Resume from './Pages/Resume.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes> 
        <Route path="/" element={
          <Canvas shadows camera={{ position: [3, 3, 3], fov: 32 }}>
            <color attach="background" args={["#ececec"]} />
            <Experience />
          </Canvas>
        } />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;


import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home'; 
import Portfolio from './Pages/Portfolio.jsx'; 
import Contact from './Pages/Contact.jsx';
// import Resume from './Resume';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes> 
        <Route path="/" element={
          <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
            <color attach="background" args={["#ececec"]} />
            <Experience />
          </Canvas>
        } />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/resume" element={<Resume />} />  */}
      </Routes>
    </Router>
  );
}

export default App;


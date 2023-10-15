import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home'; 
// import Projects from './Projects';
// import Contact from './Contact';
// import Resume from './Resume';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes> 
        {/* <Route path="/" Component={Experience} />  */}
        {/* <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/resume" element={<Resume />} />  */}

        <Route path="/" element={ 
          <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
            <color attach="background" args={["#ececec"]} />
            <Experience />
          </Canvas>
        } />
      </Routes>
    </Router>
  );
}

export default App;


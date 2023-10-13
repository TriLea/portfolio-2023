import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

export default function Orb(props) {
  const [expand, setExpand] = useState(false);
  const [section, setSection] = useState("");
  const meshRef = useRef();

  useEffect(() => {
    if (expand && meshRef.current) {
      // This is a simple scaling effect, you can replace this with any other transition effect
      meshRef.current.scale.set(50, 50, 50); // Assuming this scale consumes the entire screen
      setTimeout(() => {
        // Once the transition is complete, take action based on the section selected
        switch (section) {
          case 'home':
            console.log("Transition to Home");
            // Redirect to Home or show the Home section here
            break;
          case 'projects':
            console.log("Transition to Projects");
            // Redirect to Projects or show the Projects section here
            break;
          // ... handle other sections similarly
        }
      }, 1000); // This timeout should match your transition duration
    }
  }, [expand]);

  return (
    <group {...props} dispose={null}>
      <mesh ref={meshRef} geometry={new THREE.SphereGeometry(1, 32, 32)} material={new THREE.MeshPhongMaterial({ color: 0x000000, shininess: 100 })} />

      {!expand && (
        <>
          <Html position={[1.2, 0, 0]}>
            <button onClick={() => { setSection('home'); setExpand(true); }}>Home</button>
          </Html>

          <Html position={[-1.2, 0, 0]}>
            <button onClick={() => { setSection('projects'); setExpand(true); }}>Projects</button>
          </Html>

          <Html position={[0, 1.2, 0]}>
            <button onClick={() => { setSection('contact'); setExpand(true); }}>Contact</button>
          </Html>

          <Html position={[0, -1.2, 0]}>
            <button onClick={() => { setSection('resume'); setExpand(true); }}>Resume</button>
          </Html>
        </>
      )}
    </group>
  );
}

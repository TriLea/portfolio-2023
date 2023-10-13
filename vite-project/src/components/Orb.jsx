import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

export default function Orb(props) {
  const [expand, setExpand] = useState(false);
  const meshRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (expand) {
      meshRef.current.scale.set(50, 50, 50);
      setTimeout(() => {
        navigate(`/${expand}`);
      }, 1000);
    }
  }, [expand, navigate]);

  return (
    <group {...props} dispose={null}>
      <mesh ref={meshRef} geometry={new THREE.SphereGeometry(1, 32, 32)} material={new THREE.MeshPhongMaterial({ color: 0x000000, shininess: 100 })} />
  
      {!expand && (
        <>
          <Html position={[Math.cos(0), 0, Math.sin(0)]}>
            <button onClick={() => setExpand('home')}>Home</button>
          </Html>
          <Html position={[Math.cos(Math.PI / 2), 0, Math.sin(Math.PI / 2)]}>
            <button onClick={() => setExpand('projects')}>Projects</button>
          </Html>
          <Html position={[Math.cos(Math.PI), 0, Math.sin(Math.PI)]}>
            <button onClick={() => setExpand('contact')}>Contact</button>
          </Html>
          <Html position={[Math.cos(3 * Math.PI / 2), 0, Math.sin(3 * Math.PI / 2)]}>
            <button onClick={() => setExpand('resume')}>Resume</button>
          </Html>
        </>
      )}
    </group>
  );  
}

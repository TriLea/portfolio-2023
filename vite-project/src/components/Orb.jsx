import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function Orb(props) {
  const meshRef = useRef();
  const wireframeRef = useRef();
  const cameraRef = useRef();

  useEffect(() => {
    if (meshRef.current && wireframeRef.current && cameraRef.current) {
      meshRef.current.scale.set(1, 1, 1);

      // Adjust camera position, field of view, and aspect ratio
      cameraRef.current.position.set(0, 0, 10); // Increase z to zoom out
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
    }
  }, []);

  // This hook creates an animation loop
  useFrame(() => {
    if (meshRef.current && wireframeRef.current) {
      const deltaRotation = 0.01;
      meshRef.current.rotation.y += deltaRotation;
      wireframeRef.current.rotation.y += deltaRotation;
    }
  });

  return (
    <group {...props} dispose={null}>
      <perspectiveCamera ref={cameraRef} fov={75} aspect={window.innerWidth / window.innerHeight} near={0.1} far={1000} position={[0, 0, 10]} />

      <mesh
        ref={meshRef}
        geometry={new THREE.SphereGeometry(1, 32, 32)}
        material={new THREE.MeshPhongMaterial({ color: 0x000000, flatShading: true, transparent: true, opacity: 0 })}
      />

      <mesh
        ref={wireframeRef}
        geometry={new THREE.SphereGeometry(1, 32, 32)}
        material={new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true })}
      />
    </group>
  );
}

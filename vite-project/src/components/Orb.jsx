import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Orb(props) {
  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.scale.set(1, 1, 1);
    }
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh ref={meshRef} geometry={new THREE.SphereGeometry(1, 32, 32)} material={new THREE.MeshPhongMaterial({ color: 0x000000, shininess: 100 })} />
    </group>
  );  
}

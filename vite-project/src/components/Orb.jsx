import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import '../styles/Orb.css';

export default function Orb(props) {
  const meshRef = useRef();
  const wireframeRef = useRef();
  const cameraRef = useRef();

  const { size } = useThree();

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.scale.set(1, 1, 1);
    }

    if (cameraRef.current) {
      cameraRef.current.position.set(0, 0, 10);
      cameraRef.current.aspect = size.width / size.height;
      cameraRef.current.updateProjectionMatrix();
    }
  }, [size.width, size.height]);

  useFrame(() => {
    if (meshRef.current && wireframeRef.current) {
      const deltaRotation = 0.01;
      meshRef.current.rotation.y += deltaRotation;
      wireframeRef.current.rotation.y += deltaRotation;
    }
  });

  return (
    <group {...props} dispose={null}>
      <perspectiveCamera
        ref={cameraRef}
        fov={75}
        aspect={size.width / size.height}
        near={0.1}
        far={1000}
        position={[0, 0, 10]}
      />

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

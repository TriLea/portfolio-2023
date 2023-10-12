import React, { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Ferrofluid(props) {
    const meshRef = useRef();
    const originalPositions = useRef([]); // New useRef to store original vertex positions

    useEffect(() => {
        if (meshRef.current) {
            const positions = meshRef.current.geometry.attributes.position;
            // Store original vertex positions
            for (let i = 0; i < positions.count; i++) {
                const x = positions.array[i * 3];
                const y = positions.array[i * 3 + 1];
                const z = positions.array[i * 3 + 2];
                originalPositions.current.push(new THREE.Vector3(x, y, z));
            }
        }
    }, []);

    // Animation using useFrame hook from @react-three/fiber
    useFrame(() => {
        const time = Date.now() * 0.0002; // Slowed down the time for better visibility of effect
        if (meshRef.current && originalPositions.current.length > 0) {
            const positions = meshRef.current.geometry.attributes.position;
            for (let i = 0; i < positions.count; i++) {
                const originalVertex = originalPositions.current[i];
                const distanceToCenter = originalVertex.length();
                const offset = 0.8 * Math.sin(distanceToCenter * 10 + time) * Math.sin(5 * time); // Adjusted formula
                const displacedVertex = originalVertex.clone().normalize().multiplyScalar(distanceToCenter + offset);
    
                positions.array[i * 3] = displacedVertex.x;
                positions.array[i * 3 + 1] = displacedVertex.y;
                positions.array[i * 3 + 2] = displacedVertex.z;
            }
            positions.needsUpdate = true;
        }
    });
    

    return (
        <group {...props} dispose={null}>
            <mesh ref={meshRef} geometry={new THREE.SphereGeometry(1, 32, 32)} material={new THREE.MeshPhongMaterial({ color: 0x555555, shininess: 100 })} />
        </group>
    )
}

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function MyScene() {
    console.log("MyScene component is being rendered");

    const cubeRef = useRef(null);

    useEffect(() => {
        let scene, camera, renderer, dodecahedron;

        function init() {
            console.log("Initialization started");

            renderer = new THREE.WebGLRenderer({ alpha: true });
            if (!renderer) {
                console.error('Renderer not initialized');
                return; 
            }

            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer.setSize(window.innerWidth, window.innerHeight);

            const geometry = new THREE.IcosahedronGeometry(2);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
            dodecahedron = new THREE.Mesh(geometry, material);
            scene.add(dodecahedron);
            camera.position.z = 5;

            window.addEventListener('resize', onWindowResize, false);
            window.addEventListener('scroll', onScroll, false);
            animate();

            console.log("Initialization completed");
        }

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        function onWindowResize() {
            if (camera && renderer) {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
        }

        function onScroll() {
            const scrollPosition = window.pageYOffset / document.body.offsetHeight;
            dodecahedron.rotation.x = scrollPosition * 2 * Math.PI;
            dodecahedron.rotation.y = scrollPosition * 2 * Math.PI;
            onWindowResize();
        }

        console.log("useEffect triggered");

        init();

        if (cubeRef.current && renderer) {
            cubeRef.current.appendChild(renderer.domElement);
        }

        return () => {
            window.removeEventListener('resize', onWindowResize);
            window.removeEventListener('scroll', onScroll);
            if (renderer && cubeRef.current) {
                cubeRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={cubeRef}></div>;
}

export default MyScene;

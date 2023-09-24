// Importing necessary dependencies from React and Three.js libraries.
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function MyScene() {
    // Logs when the MyScene component is rendered.
    console.log("MyScene component is being rendered");

    // A reference to the DOM element where our Three.js scene will be attached.
    const cubeRef = useRef(null);

    // Using the useEffect hook to set up and tear down our Three.js scene.
    useEffect(() => {
        // Declaring our scene, camera, renderer, and dodecahedron objects.
        let scene, camera, renderer, dodecahedron;

        function init() {
            console.log("Initialization started");

            // Creating a new WebGL renderer with a transparent background.
            renderer = new THREE.WebGLRenderer({ alpha: true });
            if (!renderer) {
                console.error('Renderer not initialized');
                return; 
            }

            // Setting up the scene and camera.
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer.setSize(window.innerWidth, window.innerHeight);

            // Creating a wireframe icosahedron and adding it to the scene.
            const geometry = new THREE.IcosahedronGeometry(2);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
            dodecahedron = new THREE.Mesh(geometry, material);
            scene.add(dodecahedron);
            
            // Setting the camera's position.
            camera.position.z = 5;

            // Adding event listeners for window resize and scroll events.
            window.addEventListener('resize', onWindowResize, false);
            window.addEventListener('scroll', onScroll, false);

            // Starting the animation loop.
            animate();

            console.log("Initialization completed");
        }

        function animate() {
            // Requesting the next frame and rendering the scene.
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        function onWindowResize() {
            // Adjusting the camera aspect ratio and renderer size when the window is resized.
            if (camera && renderer) {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }
        }

        function onScroll() {
            // Rotating the dodecahedron based on the scroll position.
            const scrollPosition = window.scrollY / document.body.offsetHeight;
            dodecahedron.rotation.x = scrollPosition * 2 * Math.PI;
            dodecahedron.rotation.y = scrollPosition * 2 * Math.PI;

            // Adjusting camera and renderer on scroll.
            onWindowResize();
        }

        console.log("useEffect triggered");

        // Calling the initialization function.
        init();

        // Appending the renderer's DOM element to the referenced div.
        if (cubeRef.current && renderer) {
            cubeRef.current.appendChild(renderer.domElement);
        }

        // Cleanup function for removing event listeners and the renderer's DOM element.
        return () => {
            window.removeEventListener('resize', onWindowResize);
            window.removeEventListener('scroll', onScroll);
            if (renderer && cubeRef.current) {
                cubeRef.current.removeChild(renderer.domElement);
            }
        };
    }, []); // Empty dependency array means this useEffect will run once (on mount and unmount).

    // Rendering a div that will contain our Three.js scene.
    return <div ref={cubeRef}></div>;
}

export default MyScene;

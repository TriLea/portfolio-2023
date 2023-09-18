// Declare scene, camera, renderer, and dodecahedron for global access
var scene, camera, renderer, dodecahedron;

function init() {
    // Initialize a new scene
    scene = new THREE.Scene();

    // Initialize a perspective camera:
    // - 45 is the field of view.
    // - window.innerWidth / window.innerHeight is the aspect ratio.
    // - 0.1 and 1000 are the near and far clipping planes.
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Initialize the WebGL renderer with alpha for transparent background
    renderer = new THREE.WebGLRenderer({ alpha: true });

    // Set the renderer size to be full window
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Attach the renderer's output (canvas) to the 'cube' div in the HTML
    document.getElementById('cube').appendChild(renderer.domElement);

    // Create a dodecahedron geometry. This defines the shape.
    // var geometry = new THREE.DodecahedronGeometry();
    var geometry = new THREE.IcosahedronGeometry(2);

    // Define the material properties of the dodecahedron.
    // It's set to white color and displayed in wireframe mode.
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

    // Create a mesh using the dodecahedron geometry and the material
    dodecahedron = new THREE.Mesh(geometry, material);

    // Add the dodecahedron mesh to the scene
    scene.add(dodecahedron);

    // Set the camera's position so it's not inside the dodecahedron
    camera.position.z = 5;

    // Add event listeners for window resize and scroll events
    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('scroll', onScroll, false);

    // Start the animation loop
    animate();
}

function animate() {
    // Request the next frame and recursively call 'animate'
    requestAnimationFrame(animate);

    // Render the scene using the camera
    renderer.render(scene, camera);
}

function onWindowResize() {
    // Check if camera and renderer exist
    if (camera && renderer) {
        // Update the camera's aspect ratio based on new window size
        camera.aspect = window.innerWidth / window.innerHeight;

        // Update the camera's projection matrix
        camera.updateProjectionMatrix();

        // Adjust the renderer's size to the new window dimensions
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

function onScroll() {
    // Calculate the scroll position as a ratio of the window's y offset to the document's total height
    var scrollPosition = window.pageYOffset / document.body.offsetHeight;

    // Rotate the dodecahedron based on scroll position.
    // Here, a full scroll would rotate the dodecahedron 360 degrees (2 * PI radians) in both x and y axes.
    dodecahedron.rotation.x = scrollPosition * 2 * Math.PI;
    dodecahedron.rotation.y = scrollPosition * 2 * Math.PI;

    // Adjust the size and projection if the window has been resized during the scroll
    onWindowResize();
}

// Invoke the 'init' function to kick things off
init();

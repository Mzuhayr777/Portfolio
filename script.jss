// =============================================
// Three.js 3D Model Setup
// =============================================

// Initialize Three.js scene, camera, and renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x121212); // Match dark theme
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(500, 500); // Adjust size as needed

// Append renderer to the model container
document.getElementById('model-container').appendChild(renderer.domElement);

// Add lights
const light = new THREE.PointLight(0xbb86fc, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Position camera
camera.position.z = 5;

// Load your 3D model
const loader = new THREE.GLTFLoader();
loader.load(
    'assets/scene.gltf', // Replace with your model path
    (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        // Center and scale the model if needed
        model.position.set(0, 0, 0);
        model.scale.set(1, 1, 1);
    },
    undefined,
    (error) => {
        console.error('Error loading 3D model:', error);
        // Fallback: Show a message if model fails to load
        document.getElementById('model-container').innerHTML =
            '<p style="color: #e0e0e0; text-align: center;">3D model could not be loaded. Please check the console for details.</p>';
    }
);

// Animation loop for 3D model
function animateModel() {
    requestAnimationFrame(animateModel);
    renderer.render(scene, camera);
    // Rotate model for a dynamic effect
    if (scene.children.length > 2) {
        scene.children[2].rotation.y += 0.005;
    }
}
animateModel();

// Handle window resize
window.addEventListener('resize', () => {
    const container = document.getElementById('model-container');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});

// =============================================
// Counter Animation
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter-value');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // =============================================
    // Scroll Animations
    // =============================================

    const animateOnScroll = () => {
        const elements = document.querySelectorAll(
            '.project-card, .timeline-item, .icon, .hero-text'
        );

        elements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elTop < windowHeight - 100) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});


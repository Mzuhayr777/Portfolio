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


  <script>
    // Translations
    const translations = {
      en: {
        homeTitle: "Hello, I'm <span class='home__name'>Zuhayr</span>",
        homeSubtitle: "Second-year Computer Science Engineering student at EPITA",
        aboutTitle: "About Me",
        aboutDescription: `
          I'm a passionate computer science student at EPITA, driven by curiosity, discipline, and a strong desire to learn and create meaningful digital solutions.
          <ul>
            <li>🎓 Second-year engineering student at EPITA</li>
            <li>💻 Passionate about programming, AI, and cybersecurity</li>
            <li>🚀 Creative and analytical mindset, eager to solve complex problems</li>
            <li>🤝 Enjoys teamwork, collaboration, and sharing knowledge</li>
          </ul>
          I aim to combine logic, creativity, and attention to detail to design projects that blend performance with positive impact.
        `,
        skillsTitle: "My Skills",
        skillsDescription: `
          <ul>
            <li><b>Languages:</b> C, C++, C#, Python (basics)</li>
            <li><b>Tools:</b> Linux, Git, GitHub, Visual Studio, VS Code</li>
            <li><b>Concepts:</b> Object-oriented programming, algorithms, image processing</li>
            <li><b>Soft Skills:</b> Communication, teamwork, organization, curiosity, adaptability</li>
          </ul>
        `,
        projectsTitle: "My Projects",
        project1Title: "Cajaz Royale",
        project1Description: `
          A 2D Battle Royale game developed as a first-year team project.
          <ul>
            <li>🎮 <b>Goal:</b> Create a 2D game with AI-controlled enemies</li>
            <li>🧠 <b>Role:</b> Designed and programmed enemy AI behavior (movement, attack, detection)</li>
            <li>⚙️ <b>Language:</b> C# (Unity)</li>
            <li>🤝 <b>Collaboration:</b> Team coordination and version control using GitHub</li>
            <li>📈 <b>Outcome:</b> Dynamic AI and smooth gameplay experience</li>
          </ul>
          This project taught me how to build autonomous behaviors, structure modular code, and collaborate effectively within a development team.
        `,
        project2Title: "OCR Image Preprocessing",
        project2Description: `
          Technical project focused on deskewing text in images to improve OCR accuracy.
          <ul>
            <li>📄 <b>Goal:</b> Automatically detect and correct text tilt in scanned images</li>
            <li>💡 <b>Role:</b> Implemented the deskewing algorithm in C</li>
            <li>⚙️ <b>Skills:</b> Image processing, applied mathematics, low-level memory management</li>
            <li>🧩 <b>Outcome:</b> Significant improvement in OCR text recognition accuracy</li>
          </ul>
          This project helped me apply theory to practice and strengthen my understanding of algorithmic precision and performance optimization.
        `,
        workTitle: "Professional Experience",
        workSalesperson: "Sales Associate – Super U",
        workSalespersonDescription: `
          Customer service and teamwork experience in a fast-paced retail environment.
          <ul>
            <li>🛒 <b>Tasks:</b> Customer assistance, product placement, stock management, and checkout</li>
            <li>🤝 <b>Teamwork:</b> Collaborated with colleagues to maintain an organized sales area</li>
            <li>🧭 <b>Skills gained:</b> Communication, service mindset, stress management</li>
            <li>🎯 <b>Learned:</b> Responsibility, punctuality, and professional reliability</li>
          </ul>
        `,
        contactTitle: "Contact Me",
        contactButton: "Send",
        contactSuccess: "Message sent! (This is a demo)",
        footerContact: "Get in Touch",
        footerCopyright: "&copy; 2025 Muhammad Zuhayr Shaikh. All rights reserved.",
      },
      fr: {
        homeTitle: "Bonjour, je m'appelle <span class='home__name'>Zuhayr</span>",
        homeSubtitle: "Étudiant en 2ème année de Prépa Informatique à EPITA",
        aboutTitle: "À propos de moi",
        aboutDescription: `
          Étudiant passionné d’informatique à EPITA, je suis animé par la curiosité, la rigueur et l’envie d’apprendre en permanence.
          Mon objectif est de transformer les idées en solutions numériques concrètes et utiles.
          <ul>
            <li>🎓 Étudiant en 2ème année de cycle préparatoire à EPITA</li>
            <li>💻 Passionné par la programmation, l’IA et la cybersécurité</li>
            <li>🚀 Esprit créatif et analytique, aimant résoudre des problèmes complexes</li>
            <li>🤝 Aime travailler en équipe et partager les connaissances</li>
          </ul>
          En combinant logique, créativité et sens du détail, je cherche à concevoir des projets qui allient performance et impact positif.
        `,
        skillsTitle: "Mes Compétences",
        skillsDescription: `
          <ul>
            <li><b>Langages :</b> Francais, Anglais, Hindi, Urdu</li>
            <li><b>Concepts :</b> Programmation orientée objet, algorithmique, traitement d’images</li>
            <li><b>Soft Skills :</b> Communication, rigueur, travail en équipe, autonomie, curiosité</li>
          </ul>
        `,
        projectsTitle: "Mes Projets",
        project1Title: "Cajaz Royale",
        project1Description: `
          Projet de jeu vidéo 2D de type Battle Royale, réalisé en équipe durant la première année.
          <ul>
            <li>🎮 <b>Objectif :</b> Créer un jeu 2D avec des ennemis contrôlés par IA</li>
            <li>🧠 <b>Rôle :</b> Conception et développement de l’intelligence artificielle des ennemis</li>
            <li>⚙️ <b>Langage :</b> C# (Unity)</li>
            <li>🤝 <b>Travail d’équipe :</b> Coordination du code et versionnement avec GitHub</li>
            <li>📈 <b>Résultats :</b> IA dynamique et gameplay fluide</li>
          </ul>
          Ce projet m’a appris à concevoir des comportements autonomes, à structurer du code orienté objet et à collaborer efficacement.
        `,
        project2Title: "Prétraitement d’images OCR",
        project2Description: `
          Projet technique centré sur le redressement de texte (deskewing) pour améliorer la précision d’un système OCR.
          <ul>
            <li>📄 <b>Objectif :</b> Corriger automatiquement l’inclinaison du texte dans les images</li>
            <li>💡 <b>Rôle :</b> Développement de l’algorithme de deskewing en C</li>
            <li>⚙️ <b>Compétences :</b> Traitement d’image, mathématiques appliquées, gestion mémoire</li>
            <li>🧩 <b>Résultats :</b> Amélioration notable de la précision OCR</li>
          </ul>
          Ce projet m’a permis de combiner théorie et pratique, tout en renforçant ma rigueur algorithmique.
        `,
        workTitle: "Expérience Professionnelle",
        workSalesperson: "Vendeur – Super U",
        workSalespersonDescription: `
          Expérience en vente et en contact client dans un environnement dynamique.
          <ul>
            <li>🛒 <b>Tâches :</b> Accueil des clients, mise en rayon, gestion du stock et encaissements</li>
            <li>🤝 <b>Travail d’équipe :</b> Collaboration pour assurer un environnement de vente organisé</li>
            <li>🧭 <b>Compétences développées :</b> Communication, gestion du stress, sens du service</li>
            <li>🎯 <b>Apprentissages :</b> Rigueur, ponctualité et esprit de responsabilité</li>
          </ul>
        `,
        contactTitle: "Contactez-moi",
        contactButton: "Envoyer",
        contactSuccess: "Message envoyé ! (Ceci est une démonstration)",
        footerContact: "Contactez-moi",
        footerCopyright: "&copy; 2025 Muhammad Zuhayr Shaikh. Tous droits réservés.",
      }
    };

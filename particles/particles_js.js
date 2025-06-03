window.onload = function () {
    const particlesContainer = document.getElementById("particles");

    function createParticles() {
        for (let i = 0; i <100; i++) {
            const particle = document.createElement("div");
            particle.classList.add("particle");
            

            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            

            const size = Math.random() * 5 + 1;
            

            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
            
            particlesContainer.appendChild(particle);
        }
    }


    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes float {
            0% { transform: translate(0, 0); opacity: 0.5; }
            25% { transform: translate(20px, 20px); }
            50% { transform: translate(0, 40px); opacity: 0.8; }
            75% { transform: translate(-20px, 20px); }
            100% { transform: translate(0, 0); opacity: 0.5; }
        }
    `;
    document.head.appendChild(style);

    createParticles();
}


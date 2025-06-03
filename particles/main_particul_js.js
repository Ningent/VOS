window.onload = function () {
    const container = document.getElementById("particles");
    const particleCount = Math.floor(window.innerWidth / 6);
  
    // Nettoyer le conteneur
    container.innerHTML = "";
  
    // Animation keyframes partagées
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0%, 100% {
          transform: translate(0, 0) scale(1);
          opacity: 0.3;
        }
        50% {
          transform: translate(20px, -20px) scale(1.2);
          opacity: 0.8;
        }
      }
    `;
    document.head.appendChild(style);
  
    // Génération des particules
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement("div");
      p.className = "particle";
  
      const size = Math.random() * 6 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 10;
      const hue = Math.floor(Math.random() * 60 + 180); // Cyan à violet
  
      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${posX}%;
        top: ${posY}%;
        background: radial-gradient(circle, hsla(${hue}, 100%, 70%, 0.8), hsla(${hue}, 100%, 50%, 0.2));
        animation: float ${duration}s ease-in-out ${delay}s infinite;
      `;
  
      container.appendChild(p);
    }

    const isStar = Math.random() < 0.2; // 20% de chance que ce soit une étoile

    if (isStar) {
        particle.style.background = "white";
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        particle.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;
      }
      

    function spawnShootingStar() {
        const star = document.createElement("div");
        star.className = "shooting-star";
        container.appendChild(star);
      
        star.style.left = `${Math.random() * 80 + 10}%`;
        star.style.top = `${Math.random() * 30 + 10}%`;
      
        setTimeout(() => container.removeChild(star), 2000);
      }
      setInterval(spawnShootingStar, 6000); // Une étoile filante toutes les 6s
      
  
      if (i % 30 === 0) {
        p.style.width = p.style.height = `${size * 10}px`;
        p.style.background = `radial-gradient(circle, hsla(${hue}, 80%, 60%, 0.6), transparent 70%)`;
        p.style.animation = `planetFloat ${duration * 3}s ease-in-out ${delay}s infinite`;
      }
      

    // Regénération au redimensionnement
    window.addEventListener("resize", () => {
      container.innerHTML = "";
      window.onload();
    });
  };
  
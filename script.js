document.addEventListener('DOMContentLoaded', () => {
    const segment1 = document.querySelector('.segment-1');
    const segment2 = document.querySelector('.segment-2');
    const segment3 = document.querySelector('.segment-3');
    const creamMiddle1 = segment1.querySelector('.cream-middle');
    const creamMiddle2 = segment2.querySelector('.cream-middle');
    const creamTopSlide = segment3.querySelector('.cream-top-slide');
    const candle = document.querySelector('.candle');
    const flame = document.querySelector('.flame');
    const happyBirthdayText = document.querySelector('.happy-birthday');
    const birthdayNumber = document.querySelector('.birthday-number');
    const particlesContainer = document.getElementById('particles-js');

    // Función para animar un elemento después de un retraso
    const animateElement = (element, className, delay) => {
        return new Promise(resolve => {
            setTimeout(() => {
                element.classList.add(className);
                // Usamos requestAnimationFrame para asegurar que la clase se aplica antes de resolver
                requestAnimationFrame(() => {
                    // Esperar el final de la animación o un tiempo prudente
                    const animationDuration = parseFloat(getComputedStyle(element).animationDuration) * 1000;
                    const transitionDuration = parseFloat(getComputedStyle(element).transitionDuration) * 1000;
                    const duration = Math.max(animationDuration, transitionDuration);

                    if (duration > 0) {
                        element.addEventListener('animationend', () => resolve(), { once: true });
                        element.addEventListener('transitionend', () => resolve(), { once: true });
                        // Fallback por si no se detecta el fin de la animación/transición
                        setTimeout(() => resolve(), duration + 100);
                    } else {
                        // Si no hay animación/transición, resolver de inmediato
                        resolve();
                    }
                });
            }, delay);
        });
    };

    // Secuencia de animaciones
    const startAnimation = async () => {
        // Pastel Capa 1 y Crema
        await animateElement(segment1, 'slide-in-up', 500); // Aparece la capa
        await animateElement(creamMiddle1, 'cream-scale-in', 100); // La crema aparece poco después

        // Pastel Capa 2 y Crema
        await animateElement(segment2, 'slide-in-up', 500);
        await animateElement(creamMiddle2, 'cream-scale-in', 100);

        // Pastel Capa 3 y Crema Deslizante
        await animateElement(segment3, 'slide-in-up', 500);
        await animateElement(creamTopSlide, 'cream-slide-and-form', 100);

        // Vela
        await animateElement(candle, 'candle-rise', 500);

        // Llama
        await animateElement(flame, 'flame-flicker', 300);

        // Texto "Feliz Cumpleaños!" y Número "32"
        await animateElement(happyBirthdayText, 'text-slide-in', 700);
        await animateElement(birthdayNumber, 'text-slide-in', 200); // Ligeramente después del texto principal

        // Activación de particles.js
        setTimeout(() => {
            // Mostrar el contenedor de partículas
            particlesContainer.style.opacity = 1;

            // Configuración básica para un efecto de "lluvia de estrellas" o fondo animado
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80, // Número de partículas
                        "density": { "enable": true, "value_area": 800 }
                    },
                    "color": { "value": ["#FFD700", "#FF69B4", "#8A2BE2", "#FFFFFF"] }, // Colores variados
                    "shape": { "type": "circle" },
                    "opacity": {
                        "value": 0.6,
                        "random": true,
                        "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": { "enable": false }
                    },
                    "line_linked": { "enable": false }, // Sin líneas entre partículas
                    "move": {
                        "enable": true,
                        "speed": 3, // Velocidad de movimiento
                        "direction": "bottom", // Caerán hacia abajo
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": { "enable": false }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": { "enable": false }, // Desactivar interacción al pasar el mouse
                        "onclick": { "enable": false }, // Desactivar interacción al hacer clic
                        "resize": true
                    }
                },
                "retina_detect": true
            });
        }, 6500); // Este tiempo debe ser lo suficientemente largo para que toda la animación del pastel y el texto haya terminado. Ajusta según sea necesario.

        console.log("Animación completa!");
    };

    startAnimation();
});

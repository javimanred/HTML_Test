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

    // Función para animar un elemento después de un retraso
    const animateElement = (element, className, delay) => {
        return new Promise(resolve => {
            setTimeout(() => {
                element.classList.add(className);
                // Esperamos un poco más para que la animación se complete
                element.addEventListener('animationend', () => resolve(), { once: true });
                // Si la animación no tiene un 'animationend' (ej. transition), resolvemos después de un tiempo prudente
                setTimeout(() => resolve(), delay + 200);
            }, delay);
        });
    };

    // Secuencia de animaciones
    const startAnimation = async () => {
        // Pastel Capa 1 y Crema
        await animateElement(segment1, 'slide-in-up', 500);
        await animateElement(creamMiddle1, 'cream-scale-in', 100); // Ligeramente después de la capa

        // Pastel Capa 2 y Crema
        await animateElement(segment2, 'slide-in-up', 500);
        await animateElement(creamMiddle2, 'cream-scale-in', 100);

        // Pastel Capa 3 y Crema Deslizante
        await animateElement(segment3, 'slide-in-up', 500);
        await animateElement(creamTopSlide, 'cream-slide-and-form', 100);

        // Vela
        await animateElement(candle, 'candle-rise', 500);

        // Llama y Número
        await animateElement(flame, 'flame-flicker', 300); // La llama aparece y parpadea
        await animateElement(happyBirthdayText, 'text-slide-in', 500); // "Feliz Cumpleaños!"
        await animateElement(birthdayNumber, 'text-slide-in', 200); // Número "32" después del texto

        // Aquí iría la lógica para los fuegos artificiales (usando una librería como particles.js)
        // Por ahora, solo un console.log para indicar el final
        // console.log("Animación del pastel y texto completada. ¡Tiempo para fuegos artificiales!");
         await animateElement(flame, 'flame-flicker', 300); // La llama aparece y parpadea
        await animateElement(happyBirthdayText, 'text-slide-in', 500); // "Feliz Cumpleaños!"
        await animateElement(birthdayNumber, 'text-slide-in', 200); // Número "32" después del texto

        // Configuración y activación de particles.js
        setTimeout(() => {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80, // Número de partículas visibles constantemente (para fondo)
                        "density": { "enable": true, "value_area": 800 }
                    },
                    "color": { "value": "#ffffff" }, // Color blanco por defecto
                    "shape": {
                        "type": "circle",
                        "stroke": { "width": 0, "color": "#000000" },
                        "polygon": { "nb_sides": 5 },
                        "image": { "src": "img/github.svg", "width": 100, "height": 100 }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": { "enable": true, "mode": "grab" },
                        "onclick": { "enable": true, "mode": "push" },
                        "resize": true
                    },
                    "modes": {
                        "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
                        "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
                        "repulse": { "distance": 200, "duration": 0.4 },
                        "push": { "particles_nb": 4 },
                        "remove": { "particles_nb": 2 }
                    }
                },
                "retina_detect": true
            });

            // Opcional: revelar el contenedor de partículas si lo tenías inicialmente oculto
            document.getElementById('particles-js').style.opacity = 1;

        }, 6500); // Ajusta este tiempo para que aparezcan los fuegos artificiales cuando quieras.
                  // Debe ser después de que todo el pastel y texto estén animados.

        console.log("Animación del pastel y texto completada. ¡Tiempo para fuegos artificiales!");
    };

    startAnimation();
});


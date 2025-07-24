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
        setTimeout(() => {
    // Configuración para fuegos artificiales (ejemplo básico)
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 0, // Inicia con 0 partículas, las añadiremos al "explotar"
                "density": { "enable": true, "value_area": 800 }
            },
            "color": {
                "value": ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff69b4"] // Colores variados
            },
            "shape": { "type": "circle" },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": { "enable": true, "speed": 10, "size_min": 0.1, "sync": false }
            },
            "line_linked": { "enable": false },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": false },
                "onclick": { "enable": true, "mode": "push" }, // Permite añadir partículas al clic
                "resize": true
            },
            "modes": {
                "push": { "particles_nb": 10 } // Cantidad de partículas a añadir por "empuje"
            }
        },
        "retina_detect": true
    });

    // Para simular una explosión de fuegos artificiales, podemos "empujar" partículas
    // después de un tiempo o un evento específico.
    // Esto es más avanzado y requeriría manipular la API de particles.js,
    // pero para empezar, puedes dejar el "onclick" habilitado para probar.
    // O puedes usar una configuración que ya genere movimiento.

    // Si quieres simular una explosión automática:
    const particlesDiv = document.getElementById('particles-js');
    particlesDiv.style.opacity = 0; // Oculta al inicio
    particlesDiv.style.transition = 'opacity 1s ease-out';

    setTimeout(() => {
        particlesDiv.style.opacity = 1; // Revela el contenedor de partículas
        // Si necesitas que hagan algo más dinámico que la configuración estática,
        // tendrías que interactuar con particlesJS.fn.particles y sus métodos.
        // Pero para una simple lluvia de estrellas, la configuración inicial basta.
    }, 6000); // Aparecen después de que todo el pastel está listo
}, 6000); // Ajusta este tiempo según tu secuencia de animación

        
    };

    startAnimation();
});


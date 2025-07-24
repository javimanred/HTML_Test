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
        console.log("Animación del pastel y texto completada. ¡Tiempo para fuegos artificiales!");
    };

    startAnimation();
});

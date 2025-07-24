document.addEventListener('DOMContentLoaded', () => {
    const layer1 = document.querySelector('.layer-1');
    const layer2 = document.querySelector('.layer-2');
    const layer3 = document.querySelector('.layer-3');
    const topCream = document.querySelector('.top-cream');
    const candle = document.querySelector('.candle');
    const flame = document.querySelector('.flame');
    const number32 = document.querySelector('.number');
    const happyBirthdayText = document.querySelector('.happy-birthday');

    // Sequence of animations
    setTimeout(() => {
        layer1.classList.add('fade-in-scale-up');
    }, 500); // Layer 1 appears

    setTimeout(() => {
        layer2.classList.add('fade-in-scale-up');
    }, 1200); // Layer 2 appears after layer 1

    setTimeout(() => {
        layer3.classList.add('fade-in-scale-up');
    }, 1900); // Layer 3 appears after layer 2

    setTimeout(() => {
        topCream.classList.add('fade-in-scale-up');
    }, 2600); // Cream appears

    setTimeout(() => {
        candle.classList.add('slide-up-scale-y');
        number32.classList.add('fade-in');
    }, 3300); // Candle appears

    setTimeout(() => {
        flame.classList.add('flame-flicker', 'fade-in'); // Flame appears and flickers
    }, 3800);

    setTimeout(() => {
        // Here you would trigger fireworks.
        // For this example, we'll skip direct CSS fireworks due to complexity.
        // If you were using a JS fireworks library, you'd initialize it here.
    }, 4500);

    setTimeout(() => {
        happyBirthdayText.classList.add('text-reveal'); // "Happy Birthday!" text appears
    }, 5500);
});

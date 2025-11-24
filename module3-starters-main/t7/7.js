const img = document.getElementById('target');
const trigger = document.getElementById('trigger');

if (img && trigger) {
    const originalSrc = img.src;
    const hoverSrc = 'img/picB.jpg';

    trigger.addEventListener('mouseenter', () => {
        img.src = hoverSrc;
    });

    trigger.addEventListener('mouseleave', () => {
        img.src = originalSrc;
    });
}
document.querySelectorAll('.tech-row').forEach(row => {
    const track = row.querySelector('.techs-track');
    const isLeftToRight = row.classList.contains('left-to-right');
    const speed = 1;

    // Duplicera innehållet för oändlig scroll
    track.innerHTML += track.innerHTML;

    let x = isLeftToRight ? -track.scrollWidth / 2 : 0;
    let paused = false; // flagga för paus

    // Pausa när musen är över raden
    row.addEventListener('mouseenter', () => paused = true);
    row.addEventListener('mouseleave', () => paused = false);

    function animate() {
        if (!paused) {
            if (isLeftToRight) {
                x += speed; 
                if (x >= 0) x = -track.scrollWidth / 2;
            } else {
                x -= speed; 
                if (Math.abs(x) >= track.scrollWidth / 2) x = 0;
            }

            track.style.transform = `translateX(${x}px)`;
        }
        requestAnimationFrame(animate);
    }

    animate();
});

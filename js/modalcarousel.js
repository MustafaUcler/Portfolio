// �ppna modal
function openModal(projectId) {
    const modal = document.getElementById(projectId + '-modal');
    modal.style.display = 'block';

    // Initiera slideIndex om den inte finns
    if (slideIndices[projectId] === undefined) slideIndices[projectId] = 0;

    const slides = modal.querySelectorAll('.carousel-slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndices[projectId]].classList.add('active');
}
// St�ng modal
function closeModal(projectId) {
    document.getElementById(projectId + '-modal').style.display = 'none';
}

// Klick utanf�r modal st�nger
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// Carousel funktionalitet
let slideIndices = {};

function changeSlide(projectId, n) {
    const slides = document.querySelectorAll(`#${projectId}-carousel .carousel-slide`);
    if (!slideIndices[projectId]) slideIndices[projectId] = 0;
    slides[slideIndices[projectId]].classList.remove('active');

    slideIndices[projectId] += n;
    if (slideIndices[projectId] >= slides.length) slideIndices[projectId] = 0;
    if (slideIndices[projectId] < 0) slideIndices[projectId] = slides.length - 1;

    slides[slideIndices[projectId]].classList.add('active');
}

// Lyssna på alla btn-preview-knappar
document.querySelectorAll('.btn-preview').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault(); // hindra att href="#" scrollar

        // Hämta projectId från närmaste project-card
        const projectId = this.closest('.project-card').dataset.project;

        // Anropa openModal-funktionen
        openModal(projectId);
    });
});

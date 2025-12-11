let slideIndices = {};

// Uppdatera caption
function updateCaption(projectId) {
    const slides = document.querySelectorAll(`#${projectId}-carousel .carousel-slide`);
    const caption = document.getElementById(`${projectId}-caption`);
    caption.textContent = slides[slideIndices[projectId]].dataset.caption;
}

// Öppna modal
function openModal(projectId) {
    const modal = document.getElementById(`${projectId}-modal`);
    modal.style.display = 'block';

    // Initiera slideIndex om den inte finns
    if (slideIndices[projectId] === undefined) slideIndices[projectId] = 0;

    const slides = modal.querySelectorAll('.carousel-slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndices[projectId]].classList.add('active');

    updateCaption(projectId); // Uppdatera caption direkt
    generateIndicators(projectId);
}

// Stäng modal
function closeModal(projectId) {
    document.getElementById(`${projectId}-modal`).style.display = 'none';
}

// Klick utanför modal stänger
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// Byt slide
function changeSlide(projectId, n) {
    const slides = document.querySelectorAll(`#${projectId}-carousel .carousel-slide`);
    if (!slideIndices[projectId]) slideIndices[projectId] = 0;
    slides[slideIndices[projectId]].classList.remove('active');

    slideIndices[projectId] += n;
    if (slideIndices[projectId] >= slides.length) slideIndices[projectId] = 0;
    if (slideIndices[projectId] < 0) slideIndices[projectId] = slides.length - 1;

    slides[slideIndices[projectId]].classList.add('active');
    updateCaption(projectId); // Uppdatera caption
    generateIndicators(projectId);
}

function changeToSlide(projectId, index) {
    const slides = document.querySelectorAll(`#${projectId}-carousel .carousel-slide`);

    slides[slideIndices[projectId]].classList.remove('active');
    slideIndices[projectId] = index;
    slides[index].classList.add('active');

    updateCaption(projectId);
    generateIndicators(projectId);
}

// Lyssna på alla btn-preview-knappar
document.querySelectorAll('.btn-preview').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        // Hämta projectId från närmaste project-card
        const projectId = this.closest('.project-card').dataset.project;

        // Anropa openModal-funktionen
        openModal(projectId);
    });
});

// Genererar indikatorprickar för en carousel
function generateIndicators(projectId) {
    const slides = document.querySelectorAll(`#${projectId}-carousel .carousel-slide`);
    const indicatorContainer = document.getElementById(`${projectId}-indicators`);

    indicatorContainer.innerHTML = ""; // Rensa gamla

    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === slideIndices[projectId]) dot.classList.add("active");

        dot.addEventListener("click", () => {
            changeToSlide(projectId, index);
        });

        indicatorContainer.appendChild(dot);
    });
}

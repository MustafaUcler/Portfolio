let projectIndex = 0;

function slideProjects(direction) {
    const grid = document.querySelector(".project-grid");
    const cards = document.querySelectorAll(".project-card");
    const leftBtn = document.getElementById("proj-left");
    const rightBtn = document.getElementById("proj-right");

    // Räkna hur många kort som ryms per vy
    const containerWidth = document.querySelector(".project-scroll-wrapper").offsetWidth;
    const cardWidth = cards[0].offsetWidth;
    const cardsPerView = Math.floor(containerWidth / cardWidth);

    // Uppdatera index
    projectIndex += direction * cardsPerView;

    // Begränsa index så att minst ett kort alltid syns
    if (projectIndex < 0) projectIndex = 0;
    if (projectIndex > cards.length - cardsPerView) projectIndex = cards.length - cardsPerView;

    // Flytta karusellen
    grid.style.transform = `translateX(${-projectIndex * cardWidth}px)`;

    // Visa eller göm knappar beroende på position
    if (projectIndex === 0) {
        leftBtn.style.display = 'none';
    } else {
        leftBtn.style.display = 'block';
    }

    if (projectIndex >= cards.length - cardsPerView) {
        rightBtn.style.display = 'none'; 
    } else {
        rightBtn.style.display = 'block';
    }
}

// Initialt göm vänsterknappen om vi börjar på första sidan
document.getElementById("proj-left").style.display = 'none';




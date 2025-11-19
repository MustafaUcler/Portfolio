const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

let stars = [];
let speed = 2;

function setup() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    stars = [];
    for (let i = 0; i < 500; i++) {
        stars.push({
            x: Math.random() * canvas.width - canvas.width / 2,
            y: Math.random() * canvas.height - canvas.height / 2,
            z: Math.random() * canvas.width,
        });
    }
}

function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";

    for (let star of stars) {
        star.z -= speed;
        if (star.z <= 0) star.z = canvas.width;

        let k = 128 / star.z;
        let x = star.x * k + canvas.width / 2;
        let y = star.y * k + canvas.height / 2;

        if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) continue;

        let size = (1 - star.z / canvas.width) * 3;
        ctx.fillRect(x, y, size, size);
    }

    requestAnimationFrame(draw);
}

window.addEventListener("resize", setup);

setup();
draw();

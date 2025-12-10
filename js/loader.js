window.addEventListener("load", () => {
    document.body.classList.add("loaded");
    setTimeout(() => document.getElementById("site-loader")?.remove(), 600);
});

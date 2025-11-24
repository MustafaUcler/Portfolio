
const langOptions = document.querySelectorAll(".lang-option");
let currentLang = localStorage.getItem("lang") || "sv";

loadLanguage(currentLang);
updateFlag(currentLang);

/* Öppna/stäng meny */
document.querySelector(".lang-dropdown-btn").addEventListener("click", () => {
    document.querySelector(".language-selector").classList.toggle("active");
});

/* Klick på språk */
langOptions.forEach(option => {
    option.addEventListener("click", () => {
        const lang = option.dataset.lang;

        currentLang = lang;
        localStorage.setItem("lang", lang);

        loadLanguage(lang);
        updateFlag(lang);

        document.querySelector(".language-selector").classList.remove("active");
    });
});

/* Ladda JSON */
function loadLanguage(lang) {
    fetch(`lang/${lang}.json`)
        .then(res => res.json())
        .then(data => applyTranslations(data))
        .catch(err => console.error("Språkfil kunde inte läsas:", err));
}

/* Sätt flagga */
function updateFlag(lang) {
    const flag = document.getElementById("currentFlag");
    if (lang === "sv") flag.src = "images/flag/sweden.png";
    if (lang === "en") flag.src = "images/flag/united-states.png";
    if (lang === "tr") flag.src = "images/flag/turkey.png";
}

/* Översätt DOM */
function applyTranslations(data) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (data[key]) el.innerHTML = data[key];
    });
}

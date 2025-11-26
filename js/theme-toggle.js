    const toggleBtn = document.getElementById("themeToggle");
    const icon = document.getElementById("themeIcon");

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        // Byt ikon
        if (document.body.classList.contains("light-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });
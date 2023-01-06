const themeLink = document.getElementById("themeLink");
const themeSelect = document.getElementById("themeSelect");

function setTheme(mode) {
    if (mode === "system") {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: light)").matches
        ) {
            mode = "light";
        } else {
            mode = "dark";
        }
    }
    if (mode === "light") {
        themeLink.setAttribute("href", "light.css");
    } else {
        themeLink.setAttribute("href", "dark.css");
    }
}

function updateTheme(scheme = null) {
    if (!scheme) {
        var scheme = localStorage.getItem("colorScheme");
        if (scheme === null) {
            localStorage.setItem("colorScheme", "system");
            scheme = "system";
        }
    }
    setTheme(scheme);
    themeSelect.value = scheme;
}

themeSelect.addEventListener("change", (event) => {
    if (themeSelect.value) {
        localStorage.setItem("colorScheme", themeSelect.value);
        updateTheme();
    }
});

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        updateTheme();
    });

updateTheme();

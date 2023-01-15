/*
<p>
    Theme:
    <select id="themeSelect">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select>
</p>
*/

function createThemeSelectionDialog() {
    let themeSelectParagraph = document.createElement("p");
    themeSelectParagraph.innerHTML = "Theme: ";
    let themeSelect = document.createElement("select");
    themeSelect.id = "themeSelect";
    let systemOption = document.createElement("option");
    systemOption.value = "system";
    systemOption.innerHTML = "System";
    themeSelect.appendChild(systemOption);
    let lightOption = document.createElement("option");
    lightOption.value = "light";
    lightOption.innerHTML = "Light";
    themeSelect.appendChild(lightOption);
    let darkOption = document.createElement("option");
    darkOption.value = "dark";
    darkOption.innerHTML = "Dark";
    themeSelect.appendChild(darkOption);
    themeSelectParagraph.appendChild(themeSelect);
    try {
        document.getElementsByClassName("footer")[0].prepend(themeSelectParagraph);
    } catch (error) {
        console.error("Warning: Could not find footer element to add theme selection dialog to.");
        console.error(error);
    }
    return themeSelect;
}

const themeSelect = createThemeSelectionDialog();
const themeLink = document.getElementById("themeLink");

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


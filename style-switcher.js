/* ==========================
   1. Toggle Style Switcher
   ========================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
if (styleSwitcherToggle) {
    styleSwitcherToggle.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    });
}

/* ==========================
   2. Hide Style Switcher on Scroll
   ========================== */
window.addEventListener("scroll", () => {
    const styleSwitcher = document.querySelector(".style-switcher");
    // Only remove the class if it is currently open
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

/* ==========================
   3. Theme Colors
   ========================== */
function setActiveStyle(color) {
    // This logs to the console so you know the function was called
    console.log("Switching to color:", color); 

    const alternateStyles = document.querySelectorAll(".alternate-style");

    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}
/* ==========================
   4. Light and Dark Mode
   ========================== */
const dayNight = document.querySelector(".day-night");
if (dayNight) {
    dayNight.addEventListener("click", () => {
        dayNight.querySelector("i").classList.toggle("fa-sun");
        dayNight.querySelector("i").classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
    });
}

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});
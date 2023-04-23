const toggle = document.getElementById("toggle");
const body = document.body;
const timeDisplay = document.querySelector(".timeDisplay");
const pause = document.querySelector("#pause");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
// const button = document.button;

toggle.addEventListener("change", (e) => {
    if (e.target.checked) {
        body.classList.add("dark-mode");
        body.style.cssText = "transition: .5s; background-color: Black; color: white;"
        timeDisplay.style.cssText = "transition: .5s; color: white;"
        pause.style.cssText = "transition: .5s;   background-color: rgb(166, 166, 0);"
        start.style.cssText = "transition: .5s; background-color: rgb(75, 255, 0);"
        reset.style.cssText = "transition: .5s; background-color: rgb(255, 16, 0);"
    } else {
        body.classList.remove("dark-mode");
        body.style.cssText = "transition: .5s; background-color: white; color: black;"
        timeDisplay.style.cssText = "transition: .5s; color: gray;"
        pause.style.cssText = "transition: .5s; background-color: rgb(255, 255, 47);"
        start.style.cssText = "transition: .5s; background-color: rgb(75, 255, 75);"
        reset.style.cssText = "transition: .5s; background-color: rgb(255, 40, 40);"
    }
}); 

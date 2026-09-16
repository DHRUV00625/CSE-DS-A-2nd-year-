const mouseArea = document.getElementById("mouseArea");

if (mouseArea) {
    mouseArea.addEventListener("click", () => {
        mouseArea.textContent = "You clicked the mouse area!";
    });

    mouseArea.addEventListener("mouseover", () => {
        mouseArea.style.backgroundColor = "lightblue";
    });

    mouseArea.addEventListener("mouseout", () => {
        mouseArea.style.backgroundColor = "";
    });
}
console.log("Hello");

const cursor = document.querySelector(".cursor")

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor()




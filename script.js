const noButton = document.getElementById("noButton");

function moveNoButton() {

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}

noButton.addEventListener("mouseenter", moveNoButton);

noButton.addEventListener("touchstart", function(event) {
    event.preventDefault();
    moveNoButton();
});

const yesButton = document.getElementById("yesButton");

if (yesButton) {
    yesButton.addEventListener("click", function () {
        window.location.href = "yes.html";
    });
}
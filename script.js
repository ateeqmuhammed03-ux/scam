const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbyKtB9UEiz7kFpXs3dvCVCJN-TmIa_V00xeCA6xgNh03qACW7eKT91bz5tCoVL37nz6TQ/exec";

let noAttempts = 0;

function moveNoButton() {

    noAttempts++;

    // First 5 attempts: NO runs away
    if (noAttempts <= 5) {

        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        const maxX =
            window.innerWidth - buttonWidth - 20;

        const maxY =
            window.innerHeight - buttonHeight - 20;

        const randomX =
            Math.random() * maxX;

        const randomY =
            Math.random() * maxY;

        noButton.style.position = "fixed";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

        return;
    }

    // After 5 attempts: stop moving and allow click
    noButton.style.position = "static";
    noButton.innerHTML = "NO 😭";

    noButton.removeEventListener(
        "mouseenter",
        moveNoButton
    );
}


// Desktop mouse
noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


// Mobile / touch
noButton.addEventListener(
    "touchstart",
    function (event) {

        if (noAttempts < 5) {

            event.preventDefault();

            moveNoButton();
        }
    }
);


// YES button
if (yesButton) {

    yesButton.addEventListener(
        "click",
        function () {

            localStorage.setItem(
                "response",
                "YES"
            );

            window.location.href =
                "yes.html";
        }
    );
}


// NO button
noButton.addEventListener(
    "click",
    function () {

        if (noAttempts >= 5) {

            localStorage.setItem(
                "response",
                "NO"
            );

            fetch(WEB_APP_URL, {

                method: "POST",

                mode: "no-cors",

                body: JSON.stringify({
                    response: "NO",
                    date: "",
                    time: "",
                    choice: ""
                })

            })
            .then(function () {

                window.location.href =
                    "no.html";

            })
            .catch(function () {

                window.location.href =
                    "no.html";

            });

        }

    }
);
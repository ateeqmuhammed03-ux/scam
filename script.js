// ========================================
// DATE WEBSITE - MAIN PAGE SCRIPT
// ========================================

const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

let noAttempts = 0;
const MAX_NO_ATTEMPTS = 5;


// ========================================
// MOVE NO BUTTON
// ========================================

function moveNoButton() {

    if (!noButton) return;

    // Stop moving after 5 attempts
    if (noAttempts >= MAX_NO_ATTEMPTS) {
        enableNoButton();
        return;
    }

    noAttempts++;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const padding = 20;

    const maxX = Math.max(
        window.innerWidth - buttonWidth - padding,
        padding
    );

    const maxY = Math.max(
        window.innerHeight - buttonHeight - padding,
        padding
    );

    const randomX =
        padding +
        Math.random() * Math.max(maxX - padding, 0);

    const randomY =
        padding +
        Math.random() * Math.max(maxY - padding, 0);

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    noButton.style.zIndex = "9999";


    // ========================================
    // AFTER 5TH ATTEMPT
    // ========================================

    if (noAttempts >= MAX_NO_ATTEMPTS) {

        // Give browser a moment to display
        // the final moved position.
        requestAnimationFrame(() => {

            noButton.innerHTML = "NO 😭";

        });

    }
}


// ========================================
// ENABLE NO BUTTON
// ========================================

function enableNoButton() {

    if (!noButton) return;

    noButton.innerHTML = "NO 😭";

    // Stop the button from running away
    noButton.removeEventListener(
        "mouseenter",
        handleMouseEnter
    );

    noButton.removeEventListener(
        "touchstart",
        handleTouchStart
    );
}


// ========================================
// DESKTOP HANDLER
// ========================================

function handleMouseEnter() {

    if (noAttempts < MAX_NO_ATTEMPTS) {

        moveNoButton();

    } else {

        enableNoButton();

    }
}


// ========================================
// MOBILE HANDLER
// ========================================

function handleTouchStart(event) {

    if (noAttempts < MAX_NO_ATTEMPTS) {

        event.preventDefault();

        moveNoButton();

    } else {

        enableNoButton();

    }
}


// ========================================
// NO BUTTON EVENTS
// ========================================

if (noButton) {

    noButton.addEventListener(
        "mouseenter",
        handleMouseEnter
    );

    noButton.addEventListener(
        "touchstart",
        handleTouchStart,
        {
            passive: false
        }
    );


    // ========================================
    // NO CLICK
    // ========================================

    noButton.addEventListener(
        "click",
        function (event) {

            // Do nothing until 5 attempts
            if (noAttempts < MAX_NO_ATTEMPTS) {

                event.preventDefault();

                return;
            }


            // Save NO locally
            localStorage.setItem(
                "response",
                "NO"
            );


            // Save pending status for
            // response tracking later
            localStorage.setItem(
                "pendingNoResponse",
                "true"
            );


            // ========================================
            // IMMEDIATE REDIRECT
            // ========================================

            window.location.href = "no.html";

        }
    );
}


// ========================================
// YES BUTTON
// ========================================

if (yesButton) {

    yesButton.addEventListener(
        "click",
        function () {

            // Save YES locally
            localStorage.setItem(
                "response",
                "YES"
            );


            // ========================================
            // IMMEDIATE REDIRECT
            // ========================================

            window.location.href = "yes.html";

        }
    );
}
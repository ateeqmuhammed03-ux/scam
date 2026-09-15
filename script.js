// ========================================
// DATE WEBSITE - YES / NO FLOW
// ========================================

const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

let noAttempts = 0;

const MAX_NO_ATTEMPTS = 5;


// ========================================
// RETURN NO TO ORIGINAL POSITION
// ========================================

function resetNoButton() {

    if (!noButton) return;

    // Remove random fixed positioning
    noButton.style.position = "";
    noButton.style.left = "";
    noButton.style.top = "";
    noButton.style.right = "";
    noButton.style.bottom = "";
    noButton.style.zIndex = "";

    // Show final clickable NO
    noButton.innerHTML = "NO 😭";

    // Stop running away
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
// MOVE NO BUTTON
// ========================================

function moveNoButton() {

    if (!noButton) return;


    // ========================================
    // ALREADY COMPLETED 5 ATTEMPTS
    // ========================================

    if (noAttempts >= MAX_NO_ATTEMPTS) {

        resetNoButton();

        return;
    }


    // Count this attempt
    noAttempts++;


    // ========================================
    // AFTER 5TH ATTEMPT
    // RETURN TO ORIGINAL POSITION
    // ========================================

    if (noAttempts >= MAX_NO_ATTEMPTS) {

        resetNoButton();

        return;
    }


    // ========================================
    // ATTEMPTS 1 - 4
    // MOVE RANDOMLY
    // ========================================

    const buttonWidth =
        noButton.offsetWidth;

    const buttonHeight =
        noButton.offsetHeight;

    const padding = 25;


    const maxX =
        window.innerWidth -
        buttonWidth -
        padding;


    const maxY =
        window.innerHeight -
        buttonHeight -
        padding;


    const randomX =
        padding +
        Math.random() *
        Math.max(
            maxX - padding,
            0
        );


    const randomY =
        padding +
        Math.random() *
        Math.max(
            maxY - padding,
            0
        );


    noButton.style.position = "fixed";

    noButton.style.left =
        randomX + "px";

    noButton.style.top =
        randomY + "px";

    noButton.style.zIndex = "9999";
}


// ========================================
// DESKTOP
// ========================================

function handleMouseEnter() {

    if (
        noAttempts <
        MAX_NO_ATTEMPTS
    ) {

        moveNoButton();

    }
}


// ========================================
// MOBILE
// ========================================

function handleTouchStart(event) {

    if (
        noAttempts <
        MAX_NO_ATTEMPTS
    ) {

        event.preventDefault();

        moveNoButton();

    }
}


// ========================================
// NO BUTTON
// ========================================

if (noButton) {


    // Desktop
    noButton.addEventListener(
        "mouseenter",
        handleMouseEnter
    );


    // Mobile
    noButton.addEventListener(
        "touchstart",
        handleTouchStart,
        {
            passive: false
        }
    );


    // ========================================
    // CLICK NO
    // ========================================

    noButton.addEventListener(
        "click",
        function (event) {


            // Don't allow NO before
            // completing 5 attempts
            if (
                noAttempts <
                MAX_NO_ATTEMPTS
            ) {

                event.preventDefault();

                return;
            }


            // ========================================
            // SAVE NO
            // ========================================

            localStorage.setItem(
                "response",
                "NO"
            );


            localStorage.setItem(
                "pendingNoResponse",
                "true"
            );


            // ========================================
            // GO IMMEDIATELY
            // ========================================

            window.location.href =
                "no.html";

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


            localStorage.setItem(
                "response",
                "YES"
            );


            // ========================================
            // GO IMMEDIATELY
            // ========================================

            window.location.href =
                "yes.html";

        }
    );
}
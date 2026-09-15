// ========================================
// DATE WEBSITE - YES / NO FLOW
// ========================================

const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const buttonsContainer = document.querySelector(".buttons");

let noAttempts = 0;

const MAX_NO_ATTEMPTS = 5;


// ========================================
// RETURN NO BUTTON BESIDE YES
// ========================================

function returnNoButtonHome() {

    if (!noButton || !buttonsContainer) return;


    // ========================================
    // REMOVE MOVING POSITION
    // ========================================

    noButton.style.position = "";
    noButton.style.left = "";
    noButton.style.top = "";
    noButton.style.right = "";
    noButton.style.bottom = "";
    noButton.style.transform = "";
    noButton.style.zIndex = "";


    // ========================================
    // PUT BUTTON BACK INSIDE ORIGINAL
    // BUTTON CONTAINER
    // ========================================

    buttonsContainer.appendChild(noButton);


    // ========================================
    // FINAL NO BUTTON
    // ========================================

    noButton.innerHTML = "NO 😭";


    // ========================================
    // STOP BUTTON FROM RUNNING AWAY
    // ========================================

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
    // COUNT ATTEMPT
    // ========================================

    noAttempts++;


    // ========================================
    // ATTEMPT 5
    // RETURN BESIDE YES
    // ========================================

    if (noAttempts >= MAX_NO_ATTEMPTS) {

        returnNoButtonHome();

        return;
    }


    // ========================================
    // ATTEMPTS 1 - 4
    // MOVE BUTTON AROUND SCREEN
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


    // ========================================
    // MOVE
    // ========================================

    noButton.style.position = "fixed";

    noButton.style.left =
        randomX + "px";

    noButton.style.top =
        randomY + "px";

    noButton.style.right = "auto";
    noButton.style.bottom = "auto";

    noButton.style.zIndex = "9999";
}


// ========================================
// DESKTOP MOUSE
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
// MOBILE / TOUCH
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
// NO BUTTON EVENTS
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


            // ========================================
            // BEFORE 5 ATTEMPTS
            // DO NOT ALLOW SELECTION
            // ========================================

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
            // OPEN NO PAGE IMMEDIATELY
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


            // ========================================
            // SAVE YES
            // ========================================

            localStorage.setItem(
                "response",
                "YES"
            );


            // ========================================
            // OPEN YES PAGE IMMEDIATELY
            // ========================================

            window.location.href =
                "yes.html";

        }
    );
}
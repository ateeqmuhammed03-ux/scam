// ========================================
// FOOD / DATE VIBE SELECTION
// ========================================

const foodOptions =
    document.querySelectorAll(".food-option");


foodOptions.forEach((option) => {

    option.addEventListener(
        "click",
        function () {

            const selectedFood =
                option.dataset.food;


            // ========================================
            // SAVE SELECTION
            // ========================================

            localStorage.setItem(
                "selectedFood",
                selectedFood
            );


            // ========================================
            // SMALL PREMIUM CLICK EFFECT
            // ========================================

            option.style.transform =
                "scale(0.96)";


            // ========================================
            // GO TO FINAL PAGE
            // ========================================

            setTimeout(() => {

                window.location.href =
                    "final.html";

            }, 120);

        }
    );

});
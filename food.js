const foodOptions = document.querySelectorAll(".food-option");

foodOptions.forEach(option => {

    option.addEventListener("click", () => {

        const selectedFood = option.dataset.food;

        localStorage.setItem("selectedFood", selectedFood);

        window.location.href = "final.html";

    });

});
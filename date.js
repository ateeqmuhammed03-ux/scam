const dateInput = document.getElementById("dateInput");
const timeInput = document.getElementById("timeInput");
const setDateButton = document.getElementById("setDateButton");

setDateButton.addEventListener("click", function () {

    const selectedDate = dateInput.value;
    const selectedTime = timeInput.value;

    if (!selectedDate) {
        alert("Pick a day first 😊");
        return;
    }

    if (!selectedTime) {
        alert("Pick a time too 😊");
        return;
    }

    localStorage.setItem("selectedDate", selectedDate);
    localStorage.setItem("selectedTime", selectedTime);

    window.location.href = "food.html";
});
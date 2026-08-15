const selectedDate = localStorage.getItem("selectedDate");
const selectedTime = localStorage.getItem("selectedTime");
const selectedFood = localStorage.getItem("selectedFood");

const finalDate = document.getElementById("finalDate");
const finalTime = document.getElementById("finalTime");
const finalChoice = document.getElementById("finalChoice");

if (selectedDate) {

    const date = new Date(selectedDate + "T12:00:00");

    const formattedDate = date.toLocaleDateString(
        "en-US",
        {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric"
        }
    );

    finalDate.innerHTML =
        "📅 <strong>" + formattedDate + "</strong>";
}

if (selectedTime) {
    finalTime.innerHTML =
        "⏰ <strong>" + selectedTime + "</strong>";
}

if (selectedFood) {
    finalChoice.innerHTML =
        "✨ <strong>" + selectedFood + "</strong>";
}

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyKtB9UEiz7kFpXs3dvCVCJN-TmIa_V00xeCA6xgNh03qACW7eKT91bz5tCoVL37nz6TQ/exec";

fetch(WEB_APP_URL, {
    method: "POST",
    body: JSON.stringify({
        response: "YES",
        date: selectedDate,
        time: selectedTime,
        choice: selectedFood
    })
});
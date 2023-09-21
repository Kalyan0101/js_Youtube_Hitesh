const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.querySelector("#result")

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Enter valid Height <span class = "red">${height}</span>`;

    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Enter valid weight <span class = "red">${weight}</span>`;

    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.5) {
            result.innerHTML = `Your BMI result is <span class = "yellow">${bmi} <b>Under Weight</b></span>`;

        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result.innerHTML = `Your BMI result is <span class = "green">${bmi} <b>Normal</b></span>`;

        } else if (bmi >= 25 && bmi <= 29.9) {
            result.innerHTML = `Your BMI result is <span class = "yellow">${bmi} <b>Over Weight</b></span>`;

        } else {
            result.innerHTML = `Your BMI result is <span class = "red">${bmi} <b>Obesity</b></span>`;
        }
    }
})
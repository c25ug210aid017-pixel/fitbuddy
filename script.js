function calculateFitness() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let resultDiv = document.getElementById("result");

    if (!height || !weight || height <= 0 || weight <= 0) {
        resultDiv.style.color = "red";
        resultDiv.innerText = "தயவுசெய்து சரியான விவரங்களை உள்ளிடவும்!";
        return;
    }

    // BMI கணக்கீடு (Height in Meters)
    let heightInMeters = height / 100;
    let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    // தினசரி நீர் தேவை (Approx. 35ml per kg)
    let waterRequirement = (weight * 0.035).toFixed(1);

    let category = "";
    if (bmi < 18.5) {
        category = "குறைந்த எடை (Underweight) ⚠️";
        resultDiv.style.color = "#e67e22";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "சரியான எடை (Normal) ✅";
        resultDiv.style.color = "#27ae60";
    } else {
        category = "அதிக எடை (Overweight) ⚠️";
        resultDiv.style.color = "#c0392b";
    }

    resultDiv.innerHTML = `
        <p>உங்கள் BMI: <b>${bmi}</b></p>
        <p>நிலை: <b>${category}</b></p>
        <p>தினசரி நீர் தேவை: <b>${waterRequirement} லிட்டர்</b> 💧</p>
    `;
}
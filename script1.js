function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const conversionType = document.getElementById('conversionType').value;
    let result;

    if (isNaN(temperatureInput)) {
        result = "Please enter a valid temperature.";
    } else {
        if (conversionType === "fahrenheitToCelsius") {
            result = ((temperatureInput - 32) * 5/9).toFixed(2) + "°C";
        } else {
            result = ((temperatureInput * 9/5) + 32).toFixed(2) + "°F";
        }
    }

    document.getElementById('result').textContent = result;
}
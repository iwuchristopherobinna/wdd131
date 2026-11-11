// Footer Details: Current Year & Last Modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Static Weather Values matching HTML content
const tempC = 9; // °C
const windSpeedKmH = 12; // km/h

// 3.3 Requirement: One-line function to calculate Metric Wind Chill (°C and km/h)
// Formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
const calculateWindChill = (temp, speed) => 
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

// Function to update display based on condition checks
function displayWindChill() {
    const chillElement = document.getElementById("chill");

    // Metric Conditions: Temp <= 10 °C and Wind Speed > 4.8 km/h
    if (tempC <= 10 && windSpeedKmH > 4.8) {
        chillElement.textContent = `${calculateWindChill(tempC, windSpeedKmH)} °C`;
    } else {
        chillElement.textContent = "N/A";
    }
}

// Execute on page load
displayWindChill();
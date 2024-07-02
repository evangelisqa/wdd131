//To calculate windchill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    }
    else{
        return 'N/A';
    }
}

// Notify the windchill value on page load
window.onload = function(){
    //Static values for temp. and wind speed
    var temperature = 30; // in Celsius
    var windSpeed = 10; // in km/h

    //To calculate wind chill
    var windChill = calculateWindChill(temperature, windSpeed);

    // To display wind chill
    var windChillValue = document.getElementById('wind-chill-value');
    windChillValue.textContent = windChill;
}

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified);
const options = {year: 'numeric', month: 'long', day:'numeric'};

document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate.toLocaleDateString (undefined, options)}`;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate.toLocaleTimeString (undefined, options)}`;
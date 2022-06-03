function convertFar(valNum) { // фаренгейты в цельсии
    valNum = parseFloat(valNum);
    if (isNaN(valNum)) {
        document.getElementById("inputCelsius").value = "";
        document.getElementById("inputKelvin").value = "";
    }
    else {
        document.getElementById("inputCelsius").value = (valNum - 32) / 1.8;
        document.getElementById("inputKelvin").value = ((valNum - 32) / 1.8) + 273.15;
    }
}
function convertCel(valNum) { // цельсии в фаренгейты
    valNum = parseFloat(valNum);
    if (isNaN(valNum)) {
        document.getElementById("inputFahrenheit").value = "";
        document.getElementById("inputKelvin").value = "";
    }
    else {
        document.getElementById("inputKelvin").value = valNum + 273.15;
        document.getElementById("inputFahrenheit").value = (valNum * 1.8) + 32;
    }
}
function convertKel(valNum) { // кельвины в цельсии
    valNum = parseFloat(valNum);
    if (isNaN(valNum)) {
        document.getElementById("inputCelsius").value = "";
        document.getElementById("inputFahrenheit").value = "";
    }
    else {
        document.getElementById("inputCelsius").value = valNum - 273.15;
        document.getElementById("inputFahrenheit").value = ((valNum - 273.15) * 1.8) + 32;
    }
}
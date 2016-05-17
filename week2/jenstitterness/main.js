var convertButton = document.getElementById('convertButton'),
    celsiusInput = document.getElementById('celsiusInput'),
    fahrenheitInput = document.getElementById('fahrenheitInput'),
    temperatureInput = document.getElementById('temperatureInput'),
    answerHeader = document.getElementById('answerHeader');

convertButton.addEventListener('click', function(event) {
    var answer;

    if (celsiusInput.checked) {
        answer = toCelsius(temperatureInput.value);
    } else {
        answer = toFahrenheit(temperatureInput.value);
    }

    answerHeader.innerText =  answer;
});


/*

F = x * 9 / 5 + 32
C = x - 32 * 5 /9

*/

var toFahrenheit = function(x) {
    return x * 9 / 5 + 32;
}

var toCelsius = function(x) {
    return (x - 32) * 5 / 9;
}

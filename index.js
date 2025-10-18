const userPrompt = Number(prompt("Zadejte teplotu ve stupních Fahrenheita."));

if (isNaN(userPrompt)) {
    document.body.innerHTML += "<h1>Zadejte prosím číselnou hodnotu.</h1>";
} else {
const resultCalculated = (userPrompt - 32) * (5/9);
const resultRounded = resultCalculated.toFixed(1).replace('.', ',');
document.body.innerHTML += `<h1>${userPrompt} °F je ${resultRounded} °C</h1>.`;
}

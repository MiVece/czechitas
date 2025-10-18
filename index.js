const userPrompt = Number(prompt("Zadejte teplotu ve stupních Fahrenheita."));
const resultCalculated = (userPrompt - 32) * (5/9);
const resultRounded = resultCalculated.toFixed(1).replace('.', ',');
document.body.innerHTML += `<h1>${userPrompt} °F je ${resultRounded} °C.`;
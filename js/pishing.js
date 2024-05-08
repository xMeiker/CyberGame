// Juego de phishing
const phishingLevels = [
    ["phishing-email1.png", "Este es el correo electrónico de phishing nivel 1"],
    ["phishing-email2.png", "Este es el correo electrónico de phishing nivel 2"],
    ["phishing-email3.png", "Este es el correo electrónico de phishing nivel 3"]
];

let currentPhishingLevel = 0;

function showPhishingGame() {
    const phishingGameContainer = document.getElementById('phishing-game-container');
    phishingGameContainer.innerHTML = `
        <p>¡Bienvenido al Juego de Identificación de Phishing - Nivel ${currentPhishingLevel + 1}!</p>
        <p>Evalúa el siguiente correo electrónico y decide si es legítimo o de phishing:</p>
        <img src="${phishingLevels[currentPhishingLevel][0]}" alt="Correo electrónico de phishing">
        <div>
            <button onclick="checkPhishing(true)">Phishing</button>
            <button onclick="checkPhishing(false)">Legítimo</button>
        </div>
        <p id="phishing-result"></p>
    `;
}

function checkPhishing(isPhishing) {
    const resultElement = document.getElementById('phishing-result');
    if ((isPhishing && currentPhishingLevel === 0) || (!isPhishing && currentPhishingLevel !== 0)) {
        resultElement.textContent = "¡Correcto! Este correo electrónico es de phishing.";
        if (currentPhishingLevel < phishingLevels.length - 1) {
            currentPhishingLevel++;
            showPhishingGame();
        }
    } else {
        resultElement.textContent = "Incorrecto. Este correo electrónico no es de phishing.";
    }
}

showPhishingGame(); // Mostrar el juego al cargar la página


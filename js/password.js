// Desafío de contraseñas
const passwordLevels = [
    ["Password123", "Esta es la contraseña nivel 1"],
    ["SecurePass456", "Esta es la contraseña nivel 2"],
    ["SuperStrongPass789", "Esta es la contraseña nivel 3"]
];

let currentPasswordLevel = 0;

function showPasswordChallenge() {
    const passwordChallengeContainer = document.getElementById('password-challenge-container');
    passwordChallengeContainer.innerHTML = `
        <p>¡Bienvenido al Desafío de Seguridad de Contraseñas - Nivel ${currentPasswordLevel + 1}!</p>
        <p>Evalúa la siguiente contraseña y decide si es segura o no:</p>
        <p>Contraseña: <span id="password">${passwordLevels[currentPasswordLevel][0]}</span></p>
        <div>
            <button onclick="checkPassword(true)">Segura</button>
            <button onclick="checkPassword(false)">No Segura</button>
        </div>
        <p id="password-result"></p>
    `;
}

function checkPassword(isSecure) {
    const resultElement = document.getElementById('password-result');
    if ((isSecure && currentPasswordLevel === 0) || (!isSecure && currentPasswordLevel !== 0)) {
        resultElement.textContent = "¡Correcto! Esta contraseña es segura.";
        if (currentPasswordLevel < passwordLevels.length - 1) {
            currentPasswordLevel++;
            showPasswordChallenge();
        }
    } else {
        resultElement.textContent = "Incorrecto. Esta contraseña no es segura.";
    }
}

showPasswordChallenge(); // Mostrar el desafío al cargar la página
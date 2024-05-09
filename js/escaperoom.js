// Clase base para los desafíos de ciberseguridad
class Challenge {
    constructor(description) {
        this.description = description;
    }
}

// Desafío de contraseña
class PasswordChallenge extends Challenge {
    constructor() {
        super("Encuentra la contraseña para acceder al archivo seguro.");
    }
}

// Desafío de phishing
class PhishingChallenge extends Challenge {
    constructor() {
        super("Identifica el correo electrónico de phishing.");
    }
}

// Factory Method para crear desafíos
class ChallengeFactory {
    createChallenge(type) {
        switch (type) {
            case "password":
                return new PasswordChallenge();
            case "phishing":
                return new PhishingChallenge();
            default:
                throw new Error("Tipo de desafío no válido.");
        }
    }
}

// Función para verificar la contraseña
function checkPassword() {
    var password = document.getElementById("password-input").value;
    var messageElement = document.getElementById("password-message");
    if (password === "12680") {
        messageElement.textContent = "¡Contraseña correcta! Has desbloqueado el archivo seguro.";
        // Crear instancia del desafío de phishing
        const factory = new ChallengeFactory();
        const phishingChallenge = factory.createChallenge("phishing");
        console.log(phishingChallenge.description); // Solo para propósitos de demostración
        document.getElementById("phishing-room").style.display = "block"; // Muestra la habitación de phishing
    } else {
        messageElement.textContent = "Contraseña incorrecta. Intenta de nuevo.";
    }
}

// Función para verificar el desafío de phishing
function checkPhishing(isPhishing) {
    var messageElement = document.getElementById("phishing-message");
    if (isPhishing) {
        messageElement.textContent = "¡Correcto! Has identificado el correo electrónico de phishing.";
    } else {
        messageElement.textContent = "Incorrecto. El correo electrónico es legítimo.";
    }
}
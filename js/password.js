//Juego Password
// Estado base
class PasswordState {
    constructor(challenge) {
        this.challenge = challenge;
    }

    handlePassword(isSecure) {
        throw new Error('Este método debe ser implementado en las subclases');
    }

    show() {
        this.challenge.showPasswordChallenge();
    }
}

// Estado concreto: Estado de contraseña segura
class PasswordStateSecure extends PasswordState {
    handlePassword(isSecure) {
        if (isSecure) {
            this.challenge.correctAnswer();
        } else {
            this.challenge.incorrectAnswer();
        }
    }
}

// Estado concreto: Estado de contraseña no segura
class PasswordStateInsecure extends PasswordState {
    handlePassword(isSecure) {
        if (!isSecure) {
            this.challenge.correctAnswer();
        } else {
            this.challenge.incorrectAnswer();
        }
    }
}

// Contexto
class PasswordChallenge {
    constructor() {
        this.passwordLevels = [
            ["Password123", "Esta es la contraseña nivel 1"],
            ["SecurePass456", "Esta es la contraseña nivel 2"],
            ["SuperStrongPass789", "Esta es la contraseña nivel 3"]
        ];
        this.currentPasswordLevel = 0;
        this.state = new PasswordStateSecure(this);
    }

    setState(state) {
        this.state = state;
        this.show();
    }

    showPasswordChallenge() {
        const passwordChallengeContainer = document.getElementById('password-challenge-container');
        passwordChallengeContainer.innerHTML = `
            <h1>¡Bienvenido al Desafío de Seguridad de Contraseñas - Nivel ${this.currentPasswordLevel + 1}!</h1>
            <p>Evalúa la siguiente contraseña y decide si es segura o no:</p>
            <p>Contraseña: <span id="password">${this.passwordLevels[this.currentPasswordLevel][0]}</span></p>
            <div>
                <button onclick="challenge.checkPassword(true)">Segura</button>
                <button onclick="challenge.checkPassword(false)">No Segura</button>
            </div>
            <p id="password-result"></p>
        `;
    }

    checkPassword(isSecure) {
        this.state.handlePassword(isSecure);
    }

    correctAnswer() {
        const resultElement = document.getElementById('password-result');
        resultElement.textContent = "¡Correcto! Esta contraseña es segura.";
        if (this.currentPasswordLevel < this.passwordLevels.length - 1) {
            this.currentPasswordLevel++;
            this.showPasswordChallenge();
        }
    }

    incorrectAnswer() {
        const resultElement = document.getElementById('password-result');
        resultElement.textContent = "Incorrecto. Esta contraseña no es segura.";
    }
}

const challenge = new PasswordChallenge();
challenge.showPasswordChallenge(); // Mostrar el desafío al cargar la página
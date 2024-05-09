// Estado base
class PhishingState {
    constructor(game) {
        this.game = game;
    }

    handlePhishing(isPhishing) {
        throw new Error('Este método debe ser implementado en las subclases');
    }

    show() {
        this.game.showPhishingGame();
    }
}

// Estado concreto: Estado de phishing
class PhishingStatePhishing extends PhishingState {
    handlePhishing(isPhishing) {
        if (isPhishing) {
            this.game.correctAnswer();
        } else {
            this.game.incorrectAnswer();
        }
    }
}

// Contexto
class PhishingGame {
    constructor() {
        this.phishingLevels = [
            ["/assets/images/pishing1.jpg", "Este es el correo electrónico de phishing nivel 1"],
            ["/assets/images/pishing2.jpg", "Este es el correo electrónico de phishing nivel 2"],
            ["/assets/images/nopishing1.webp", "Este es el correo electrónico legítimo nivel 3"],
            ["/assets/images/nopishing2.webp", "Este es el correo electrónico legítimo nivel 4"]
            // Agrega más niveles aquí
        ];
        this.currentPhishingLevel = 0;
        this.state = new PhishingStatePhishing(this);
    }

    setState(state) {
        this.state = state;
        this.show();
    }

    showPhishingGame() {
        const phishingGameContainer = document.getElementById('phishing-game-container');
        phishingGameContainer.innerHTML = `
            <h1>¡Bienvenido al Juego de Identificación de Phishing - Nivel ${this.currentPhishingLevel + 1}!</h1>
            <p>Evalúa el siguiente correo electrónico y decide si es legítimo o de phishing:</p>
            <img src="${this.phishingLevels[this.currentPhishingLevel][0]}" alt="Correo electrónico de phishing">
            <div>
                <button onclick="game.checkPhishing(true)">Phishing</button>
                <button onclick="game.checkPhishing(false)">Legítimo</button>
            </div>
            <p id="phishing-result"></p>
        `;
    }

    checkPhishing(isPhishing) {
        this.state.handlePhishing(isPhishing);
    }

    correctAnswer() {
        const resultElement = document.getElementById('phishing-result');
        resultElement.textContent = "¡Correcto! Este correo electrónico es de phishing.";
        if (this.currentPhishingLevel < this.phishingLevels.length - 1) {
            this.currentPhishingLevel++;
            this.showPhishingGame(); // Mostrar el siguiente nivel
        }
    }

    incorrectAnswer() {
        const resultElement = document.getElementById('phishing-result');
        resultElement.textContent = "Incorrecto. Este correo electrónico no es de phishing.";
    }
}

const game = new PhishingGame();
game.showPhishingGame(); // Mostrar el juego al cargar la página

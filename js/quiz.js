// Quiz de ciberseguridad
const quizLevels = [
    [
        { question: "¿Qué es un ataque de phishing?", options: ["Un intento de obtener información confidencial de forma fraudulenta", "Un tipo de malware", "Una técnica para proteger la red"], correctAnswer: 0 },
        { question: "¿Qué es un ataque de fuerza bruta?", options: ["Un tipo de ataque DDoS", "Un método para robar contraseñas probando muchas combinaciones posibles", "Un tipo de ataque de ransomware"], correctAnswer: 1 },
        { question: "¿Qué es un cortafuegos?", options: ["Una medida de seguridad física para prevenir incendios", "Un dispositivo o software que controla el tráfico de red", "Un software antivirus"], correctAnswer: 1 }
    ],
    [
        { question: "¿Qué es un ataque de ingeniería social?", options: ["Un tipo de ataque DDoS", "Un intento de manipular a las personas para que revelen información confidencial", "Un método para cifrar archivos y solicitar un rescate"], correctAnswer: 1 },
        { question: "¿Qué es un ataque de ransomware?", options: ["Un tipo de ataque DDoS", "Un método para robar contraseñas probando muchas combinaciones posibles", "Un software malicioso que cifra archivos y solicita un rescate"], correctAnswer: 2 },
        { question: "¿Qué es la autenticación de dos factores?", options: ["Un método para autenticar usuarios utilizando dos contraseñas diferentes", "Un método que requiere que los usuarios proporcionen dos formas de identificación para acceder a una cuenta", "Un método para cifrar la comunicación entre un servidor y un cliente"], correctAnswer: 1 }
    ],
    [
        { question: "¿Qué es un virus informático?", options: ["Un programa malicioso que se propaga a través de redes sociales", "Un programa que infecta archivos y se replica a sí mismo en otros archivos o sistemas", "Una forma de ataque de phishing"], correctAnswer: 1 },
        { question: "¿Qué es la ingeniería inversa?", options: ["Un método para recuperar datos perdidos de dispositivos de almacenamiento dañados", "Un proceso para descompilar y analizar un programa para comprender su funcionamiento interno", "Una forma de ataque DDoS"], correctAnswer: 1 },
        { question: "¿Qué es una vulnerabilidad de día cero?", options: ["Una vulnerabilidad que ha estado presente durante un largo período de tiempo", "Una vulnerabilidad que se ha solucionado mediante un parche de seguridad", "Una vulnerabilidad recién descubierta que aún no tiene una solución o parche disponible"], correctAnswer: 2 }
    ]
];

let currentQuizLevel = 0;

function showQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    let quizHTML = '';

    // Generar HTML para cada pregunta del nivel actual
    quizLevels[currentQuizLevel].forEach((question, index) => {
        quizHTML += `
            <div class="question">
                <p>${index + 1}. ${question.question}</p>
                <ul>
                    ${question.options.map((option, optionIndex) => `
                        <li>
                            <label>
                                <input type="radio" name="question${index}" value="${optionIndex}">
                                ${option}
                            </label>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    });

    // Agregar botón de enviar
    quizHTML += '<button onclick="checkQuiz()">Enviar respuestas</button>';

    // Mostrar el quiz en el contenedor
    quizContainer.innerHTML = quizHTML;
}

function checkQuiz() {
    const quizResultElement = document.createElement('div');
    let correctAnswers = 0;

    // Verificar cada pregunta
    quizLevels[currentQuizLevel].forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            const selectedAnswer = parseInt(selectedOption.value);
            if (selectedAnswer === question.correctAnswer) {
                correctAnswers++;
            }
        }
    });

    // Mostrar resultado del quiz
    quizResultElement.innerHTML = `
        <p>Has respondido correctamente ${correctAnswers} de ${quizLevels[currentQuizLevel].length} preguntas.</p>
        <p>${correctAnswers === quizLevels[currentQuizLevel].length ? '¡Felicidades! ¡Has completado el nivel!' : 'Sigue practicando para mejorar.'}</p>
    `;

    // Si todas las respuestas son correctas, pasar al siguiente nivel
    if (correctAnswers === quizLevels[currentQuizLevel].length && currentQuizLevel < quizLevels.length - 1) {
        currentQuizLevel++;
    }

    // Reemplazar el contenido del quiz con el resultado
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    quizContainer.appendChild(quizResultElement);

    // Mostrar el quiz del siguiente nivel si es necesario
    if (currentQuizLevel < quizLevels.length) {
        showQuiz();
    }
}
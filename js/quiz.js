const questions = [
    { question: "¿Qué es un ataque de phishing?", options: ["Un intento de obtener información confidencial de forma fraudulenta", "Un tipo de malware", "Una técnica para proteger la red"], correctAnswer: 0 },
    { question: "¿Qué es un ataque de fuerza bruta?", options: ["Un tipo de ataque DDoS", "Un método para robar contraseñas probando muchas combinaciones posibles", "Un tipo de ataque de ransomware"], correctAnswer: 1 },
    { question: "¿Qué es un cortafuegos?", options: ["Una medida de seguridad física para prevenir incendios", "Un dispositivo o software que controla el tráfico de red", "Un software antivirus"], correctAnswer: 1 },
    { question: "¿Qué es un ataque de ingeniería social?", options: ["Un tipo de ataque DDoS", "Un intento de manipular a las personas para que revelen información confidencial", "Un método para cifrar archivos y solicitar un rescate"], correctAnswer: 1 },
    { question: "¿Qué es un ataque de ransomware?", options: ["Un tipo de ataque DDoS", "Un método para robar contraseñas probando muchas combinaciones posibles", "Un software malicioso que cifra archivos y solicita un rescate"], correctAnswer: 2 },
    { question: "¿Qué es la autenticación de dos factores?", options: ["Un método para autenticar usuarios utilizando dos contraseñas diferentes", "Un método que requiere que los usuarios proporcionen dos formas de identificación para acceder a una cuenta", "Un método para cifrar la comunicación entre un servidor y un cliente"], correctAnswer: 1 },
    { question: "¿Qué es un virus informático?", options: ["Un programa malicioso que se propaga a través de redes sociales", "Un programa que infecta archivos y se replica a sí mismo en otros archivos o sistemas", "Una forma de ataque de phishing"], correctAnswer: 1 },
    { question: "¿Qué es la ingeniería inversa?", options: ["Un método para recuperar datos perdidos de dispositivos de almacenamiento dañados", "Un proceso para descompilar y analizar un programa para comprender su funcionamiento interno", "Una forma de ataque DDoS"], correctAnswer: 1 },
    { question: "¿Qué es una vulnerabilidad de día cero?", options: ["Una vulnerabilidad que ha estado presente durante un largo período de tiempo", "Una vulnerabilidad que se ha solucionado mediante un parche de seguridad", "Una vulnerabilidad recién descubierta que aún no tiene una solución o parche disponible"], correctAnswer: 2 },
    { question: "¿Qué es la ingeniería social?", options: ["Una técnica de manipulación psicológica para obtener información confidencial", "Una rama de la ingeniería que se enfoca en la seguridad de la información", "Una táctica de defensa contra ataques cibernéticos"], correctAnswer: 0 }
];

let currentQuestion = 0;

const quizForm = document.getElementById('quiz-form');
const questionElement = document.getElementById('question');
const answerSelect = document.getElementById('answer');
const feedbackElement = document.getElementById('feedback');

function displayQuestion() {
  const currentQuestionObj = questions[currentQuestion];
  questionElement.textContent = currentQuestionObj.question;
  answerSelect.innerHTML = '';
  currentQuestionObj.options.forEach((option, index) => {
    const optionElement = document.createElement('option');
    optionElement.textContent = option;
    optionElement.value = index;
    answerSelect.appendChild(optionElement);
  });
}

function checkAnswer(event) {
  event.preventDefault();
  const selectedAnswerIndex = answerSelect.value;
  if (selectedAnswerIndex === '') {
    feedbackElement.textContent = "Por favor, selecciona una respuesta.";
    return;
  }
  const correctAnswerIndex = questions[currentQuestion].correctAnswer;
  if (parseInt(selectedAnswerIndex) === correctAnswerIndex) {
    feedbackElement.textContent = "¡Respuesta correcta!";
    answerSelect.value = '';
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      feedbackElement.textContent = "¡Felicidades! ¡Has completado el quiz!";
    }
  } else {
    feedbackElement.textContent = "Respuesta incorrecta. Por favor, intenta de nuevo.";
  }
}

quizForm.addEventListener('submit', checkAnswer);

displayQuestion();

  
  
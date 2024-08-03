// Sample questions for the quiz
const quizData = [
    {
        question: "What is her favorite color?",
        choices: ["Red", "Blue", "Green", "Yellow"],
        answer: "Blue"
    },
    {
        question: "Where was our first date?",
        choices: ["Restaurant", "Movie Theater", "Park", "Beach"],
        answer: "Restaurant"
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');

    questionElement.textContent = quizData[currentQuestionIndex].question;
    choicesElement.innerHTML = '';

    quizData[currentQuestionIndex].choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice);
        choicesElement.appendChild(button);
    });
}

function checkAnswer(selectedChoice) {
    const isCorrect = selectedChoice === quizData[currentQuestionIndex].answer;
    alert(isCorrect ? 'Correct!' : 'Wrong!');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        alert('Quiz finished! Great job!');
    }
}

// Initialize the quiz
displayQuestion();

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
    {
        question: "What is his favorite movie?",
        choices: ["Inception", "The Matrix", "The Shawshank Redemption", "The Godfather"],
        answer: "Inception"
    },
    {
        question: "What is her favorite food?",
        choices: ["Pizza", "Sushi", "Pasta", "Burgers"],
        answer: "Sushi"
    },
    {
        question: "Which city would she love to visit?",
        choices: ["Paris", "Tokyo", "New York", "Sydney"],
        answer: "Tokyo"
    },
    {
        question: "What is his favorite hobby?",
        choices: ["Reading", "Gaming", "Cooking", "Traveling"],
        answer: "Gaming"
    },
    {
        question: "What is her favorite season?",
        choices: ["Spring", "Summer", "Autumn", "Winter"],
        answer: "Autumn"
    },
    {
        question: "What is his favorite sport?",
        choices: ["Football", "Basketball", "Tennis", "Soccer"],
        answer: "Basketball"
    },
    {
        question: "What is her favorite book?",
        choices: ["Pride and Prejudice", "1984", "To Kill a Mockingbird", "The Great Gatsby"],
        answer: "Pride and Prejudice"
    },
    {
        question: "What is his favorite ice cream flavor?",
        choices: ["Vanilla", "Chocolate", "Strawberry", "Mint Chocolate Chip"],
        answer: "Mint Chocolate Chip"
    }
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

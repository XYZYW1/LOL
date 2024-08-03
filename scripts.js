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
    },
    {
        question: "What is her favorite animal?",
        choices: ["Cat", "Dog", "Bird", "Fish"],
        answer: "Dog"
    },
    {
        question: "What is his favorite drink?",
        choices: ["Tea", "Coffee", "Juice", "Soda"],
        answer: "Coffee"
    },
    {
        question: "What is her favorite holiday destination?",
        choices: ["Mountains", "Beach", "City", "Countryside"],
        answer: "Beach"
    },
    {
        question: "What is his favorite genre of music?",
        choices: ["Rock", "Pop", "Classical", "Jazz"],
        answer: "Rock"
    },
    {
        question: "What is her favorite flower?",
        choices: ["Rose", "Lily", "Tulip", "Daisy"],
        answer: "Rose"
    },
    {
        question: "What is his favorite season?",
        choices: ["Spring", "Summer", "Autumn", "Winter"],
        answer: "Winter"
    },
    {
        question: "What is her favorite TV show?",
        choices: ["Friends", "Game of Thrones", "Breaking Bad", "The Office"],
        answer: "Friends"
    },
    {
        question: "What is his favorite dessert?",
        choices: ["Cake", "Ice Cream", "Pie", "Cookies"],
        answer: "Ice Cream"
    },
    {
        question: "What is her favorite hobby?",
        choices: ["Painting", "Reading", "Cooking", "Dancing"],
        answer: "Painting"
    },
    {
        question: "What is his favorite fruit?",
        choices: ["Apple", "Banana", "Orange", "Grapes"],
        answer: "Banana"
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
    nextQuestion();
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

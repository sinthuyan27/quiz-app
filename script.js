const questions = [
    {
        question: "What is the capital of sriLanka?",
        answers: ["jaffna", "Colombo", "Kandy", "Trincomalee"],
        correctAnswer: 2
    },
    {
        question: "Who is the best 'cricketer'?",
        answers: ["Sachin Tendulkar", "Virat Kohli", "Rohit Sharma", "Suresh Raina"],
        correctAnswer: 1
    },
    {
        question: "how many centuries virat kohli recached?",
        answers: ["43", "54", "78", "81"],
        correctAnswer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    const buttons = document.getElementById("answers").getElementsByClassName("btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = question.answers[i];
    }
}

function selectAnswer(index) {
    const question = questions[currentQuestionIndex];
    if (index === question.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("result-text").innerText = `You scored ${score} out of ${questions.length}`;
}

// Start the quiz when the page loads
window.onload = startQuiz;

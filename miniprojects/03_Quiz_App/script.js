const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}

        ]
    },{
        question: "Which country gives students the longest summer holiday??",
        answers: [
            {text: "United States", correct: false},
            {text: "Italy", correct: true},
            {text: "Japan", correct: false},
            {text: "Germany Answer", correct: false}

        ]
    },{
        question: " What is the title of Rupert Holmes’ hit song about liking Piña Coladas and getting caught in the rain?",
        answers: [
            {text: "Escape", correct: true},
            {text: "Paradise", correct: false},
            {text: "Rainy Day", correct: false},
            {text: "Found Out", correct: false}

        ]
    },{
        question: " Which outdoor equipment manufacturer came under fire in 2019 for quietly replacing photos on Wikipedia with those featuring their own products?",
        answers: [
            {text: "Patagonia", correct: false},
            {text: "The North Face", correct: true},
            {text: "Columbia", correct: false},
            {text: "Arc'teryx", correct: false}

        ]
    },{
    question: "Which planet is known as the Red Planet?",
    answers: [
        {text: "Venus", correct: false},
        {text: "Mars", correct: true},
        {text: "Jupiter", correct: false},
        {text: "Saturn", correct: false}
    ]
},{
    question: "Who developed JavaScript?",
    answers: [
        {text: "Brendan Eich", correct: true},
        {text: "James Gosling", correct: false},
        {text: "Dennis Ritchie", correct: false},
        {text: "Guido van Rossum", correct: false}
    ]
},{
    question: "What is the capital of Australia?",
    answers: [
        {text: "Sydney", correct: false},
        {text: "Melbourne", correct: false},
        {text: "Canberra", correct: true},
        {text: "Perth", correct: false}
    ]
},{
    question: "Which is the largest ocean on Earth?",
    answers: [
        {text: "Atlantic Ocean", correct: false},
        {text: "Indian Ocean", correct: false},
        {text: "Pacific Ocean", correct: true},
        {text: "Arctic Ocean", correct: false}
    ]
},{
    question: "Which programming language is primarily used for styling web pages?",
    answers: [
        {text: "HTML", correct: false},
        {text: "JavaScript", correct: false},
        {text: "CSS", correct: true},
        {text: "Python", correct: false}
    ]
},{
    question: "Who painted the Mona Lisa?",
    answers: [
        {text: "Vincent van Gogh", correct: false},
        {text: "Leonardo da Vinci", correct: true},
        {text: "Pablo Picasso", correct: false},
        {text: "Michelangelo", correct: false}
    ]
},{
    question: "What is the smallest prime number?",
    answers: [
        {text: "0", correct: false},
        {text: "1", correct: false},
        {text: "2", correct: true},
        {text: "3", correct: false}
    ]
},{
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
        {text: "China", correct: false},
        {text: "South Korea", correct: false},
        {text: "Japan", correct: true},
        {text: "Thailand", correct: false}
    ]
},{
    question: "Which HTML tag is used to create a hyperlink?",
    answers: [
        {text: "<link>", correct: false},
        {text: "<a>", correct: true},
        {text: "<href>", correct: false},
        {text: "<url>", correct: false}
    ]
},{
    question: "What does CPU stand for?",
    answers: [
        {text: "Central Process Unit", correct: false},
        {text: "Central Processing Unit", correct: true},
        {text: "Computer Processing Unit", correct: false},
        {text: "Control Processing Unit", correct: false}
    ]
}
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML =
        questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML ="Play Again";
    nextButton.style.display = "block"
}

nextButton.addEventListener("click",() => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
const questions=[
    {
        question:"larget animal",
        answers:[
            {text:"shark",correct: false},
            {text:"shark",correct: false},
            {text:"shark",correct: false},
            {text:"bluewhale",correct: true},
        ]
    
    },
    {
        question:"larget animal",
        answers:[
            {text:"shark",correct: false},
            {text:"shark",correct: false},
            {text:"shark",correct: false},
            {text:"bluewhale",correct: true},
        ]
    
    },
    {
        question:"larget animal",
        answers:[
            {text:"shark",correct: false},
            {text:"shark",correct: false},
            {text:"shark",correct: false},
            {text:"bluewhale",correct: true},
        ]
    
    },
       { question:"larget animal",
        answers:[
            {text:"shark",correct: false},
            {text:"shark",correct: false},
            {text:"shark",correct: false},
            {text:"bluewhale",correct: true},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex +1;
    questionElement.innerHTML = questionNo+ ". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonsElement.appendChild(button);

        
    });
}
startQuiz();

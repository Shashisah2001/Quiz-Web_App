const questions = [
    {
        question:" Who is known as the father of computers?",
        answer:[
            {text:"Charles Petty", correct:false},
            {text:"Charles Babbage", correct:true},
            {text:"Elon Musk", correct:false},
            {text:"Issac Newton", correct:false},
        ]
    },
    {
        question:" Who founded the Electronic Frontier Foundation (EFF)?",
        answer:[
            {text:" John Carol", correct:false},
            {text:" John Perry Barlow", correct:true},
            {text:"Steve Jobs", correct:false},
            {text:"Tony Stark", correct:false},
        ]
    },
    {
    question:" Who developed the first programmable computer?",
    answer:[
        {text:" Konrad Zuse", correct:true},
        {text:"Lady Gaga", correct:false},
        {text:"Mary Curie", correct:false},
        {text:"Yuri Gagri", correct:false},
    ]
    },
    {
        question:" Who developed the first successful laser printer?",
        answer:[
            {text:"Gary Starkweather ", correct:true},
            {text:"John Walker ", correct:false},
            {text:"harry Malton", correct:false},
            {text:"Abraham ", correct:false},
        ]
        },
        {
            question:" Who designed the first commercially successful microprocessor?",
            answer:[
                {text:"John Walton", correct:false},
                {text:"Tony Stark", correct:false},
                {text:"Federico Faggin", correct:true},
                {text:"Fredy Faggin", correct:false},
            ]
            },
            {
                question:"Who founded Microsoft?",
                answer:[
                    {text:"Steve Jobs", correct:false},
                    {text:"Elon Musk", correct:false},
                    {text:"Sundar Pichai", correct:false},
                    {text:"Bill Gates", correct:true},
                ]
                },
                {
                    question:" Who created the first practical telephone?",
                    answer:[
                        {text:" Antonio Meucci", correct:true},
                        {text:"Alexendar Graham Bell", correct:false},
                        {text:"Charles babbage", correct:false},
                        {text:"Lady Gaga", correct:false},
                    ]
                    },
                    {
                        question:"Who developed the World Wide Web?",
                        answer:[
                            {text:"Bill Gates", correct:false},
                            {text:" Tim Berners-Lee", correct:true},
                            {text:"steve Jobs", correct:false},
                            {text:"Elon Musk", correct:false},
                        ]
                        },
    {
        question:" Who invented the barcode?",
        answer:[
            {text:"Isacc Newton", correct:false},
            {text:"Gallelio", correct:false},
            {text:"Joseph Woodland", correct:false},
            {text:" Norman Joseph Woodland", correct:true},
        ] 
    },
    {
        question:" Who invented the computer mouse?",
        answer:[
            {text:"Isacc Newton", correct:false},
            {text:"Norman Joseph Woodland", correct:false},
            {text:"Joseph Woodland", correct:false},
            {text:" Douglas Engelbart", correct:true},
        ] 
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function  resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } 
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
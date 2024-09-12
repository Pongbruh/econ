const quizData = [
    {
        question: "What is Gross Domestic Product (GDP)?",
        options: ["The total value of all foreign investments in a country.", "The market value of all final goods and services produced within a country in a given period.", "The income earned by a country's citizens abroad.", "Go Do it Pong"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a method of calculating GDP?",
        options: ["Production Approach", "Income Approach", "Inflation Approach"],
        answer: 2
    },
    {
        question: "What does Real GDP account for that Nominal GDP does not?",
        options: ["Depreciation of capital", "Inflation or price changes over time"],
        answer: 1
    },
    {
        question: "The Consumer Price Index (CPI) is primarily used to:",
        options: ["Measure changes in government spending.", "Track changes in the prices of goods and services typically purchased by households.", "Measure changes in GDP."],
        answer: 1
    },
    {
        question: "What is inflation?",
        options: ["A decrease in the purchasing power of money.", "A decrease in the price of goods and services.", "A measure of total national income."],
        answer: 0
    },
    {
        question: "Do you love me?",
        options: ["Yes", "Not really", "No", "Maybe"],
        answer: 0
    },
];

let currentQuestion = 0;
let score = 0;
const quiz = document.getElementById('quiz');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const startBtn = document.getElementById('start-btn');
const message = document.getElementById('message');

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    quiz.innerHTML = `
        <h2>${questionData.question}</h2>
        ${questionData.options.map((option, index) =>
        `<div class="option" onclick="selectOption(${index})">${option}</div>`).join('')}
    `;
}

function selectOption(selectedOption) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[selectedOption].classList.add('selected');
    quizData[currentQuestion].selected = selectedOption;
}

function showScore() {
    quiz.innerHTML = `<h2>Your Score: ${score} / ${quizData.length}</h2>`;
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'none';
}

function handleNext() {
    const selected = quizData[currentQuestion].selected;
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function handleSubmit() {
    handleNext();
}

function startQuiz() {
    message.style.display = 'none';
    startBtn.style.display = 'none';
    quiz.style.display = 'block';
    nextBtn.style.display = 'block';
    loadQuestion();
}

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', handleNext);
submitBtn.addEventListener('click', handleSubmit);


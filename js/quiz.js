const allQuestions = [
    {
        question: "My favorite way to spend free time?",
        answers: [
            "Sleeping",
            "Rage baiting you",
            "Overthinking life",
            "All of the above",
        ],
        correct: 4,
    },
    {
        question: "When's my birthday'",
        answers: ["06 june", "11 june", "13 june", "16 june"],
        correct: 3,
    },
    {
        question: "What scares me more?",
        answers: ["Failure", "Wasted potential", "Being misunderstood", "Cockroaches"],
        correct: 3,
    },
    {
        question: "My biggest insecurity is",
        answers: ["I look like my sisters classmates'", "My car", "I'm short", "I don't have any"],
        correct: 1,
    },
    {
        question: "Am I a manipulator",
        answers: ["yes","no"],
        correct: 1,
    },
    {
        question: "In my friend group, what role do I play",
        answers: ["Quiet one", "The driver", "Mature", "Silly and Goofy"],
        correct: 4,
    },
    {
        question: "If I had one son, what would I name him",
        answers: [
            "Ibrahim",
            "Abdullah",
            "Ahmad",
            "Chukwuemeka",
        ],
        correct: 1,
    },
    {
        question: "What keeps me up at night",
        answers: [
            "I sleep like a baby",
            "Existential dread",
            "Thoughts of a life without you",
            "Mental stimulation",
        ],
        correct: 3,
    },
    {
        question: "Which am I afraid of more",
        answers: [
            "To fail time and time again",
            "To be rejected by someone I highly respect",
            "To disappoint those who expect much from me",
            "Change and uncertainty",
        ],
        correct: 2,
    },
    {
        question: "Who do i hate more",
        answers: ["Dogo", "Hanif", "Tariq", "Hirah"],
        correct: 4
    },
    {
        question: "What i hate most about you",
        answers: ["Your nose", "Constantly rejecting me", "not opening my tiktoks", "none of da above"],
        correct: 3
    },
    {
        question: "My favorite memory with you",
        answers: ["Late night calls", "Driving you home", "Walking you home",],
        correct: 1
    },
    {
        question: "How many pics of you do I have in my photos",
        answers: ["1", "around 5", "9+", "17"],
        correct: 3
    },
    {
        question: "What i love most about you",
        answers: ["Your sense of humor", "Your fine face", "Your ****", "you"],
        correct: 4
    },
    {
        question: "Why did I make this website",
        answers: [
            "To advance my coding skills",
            "I had too much free time",
            "To impress you and make you fall in love with me",
            "All of the above",
        ],
        correct: 3,
    },
];
const quizEl = document.getElementById("quiz");

let questions = allQuestions;   // use all questions directly
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart");

function startQuiz() {
    currentQuestion = 0;
    score = 0;

    quizEl.classList.remove("hidden");
    scoreEl.classList.add("hidden");
    restartBtn.classList.add("hidden");

    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index);
        answersEl.appendChild(btn);
    });
}

function checkAnswer(index) {
    if ((index + 1) === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizEl.classList.add("hidden");
    scoreEl.classList.remove("hidden");
    restartBtn.classList.remove("hidden");

    let message = "";

    if (score === questions.length) {
        message = "Okay wow… you actually know me ";
    } else if (score >= questions.length / 2) {
        message = "Hmm… Not bad";
    } else {
        message = "💀 you no try sha";
    }

    scoreEl.innerHTML = `You scored ${score}/${questions.length}.<br>${message}`;
}

restartBtn.onclick = startQuiz;

// start quiz immediately when page loads
startQuiz();
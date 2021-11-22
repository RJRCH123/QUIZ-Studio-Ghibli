const quizData = [
    {
        number: "1/10",
        question: "Which movie does the Studio Ghibli logo belong to?",
        a: "Howl's castle",
        b: "Princess Mononoke",
        c: "Spirited Away",
        d: "My neighbor Totoro",
        correct: "d",
    },
    {
        number: "2/10",
        question: "This magazine is considered the origin of the Ghibli studios:",
        a: "Gakken",
        b: "Tokuma Shoten",
        c: "Nagasaki",
        d: "Dol",
        correct: "b",
    },
    {
        number: "3/10",
        question: "In 2014, Studio Ghibli announced that it would not be producing any more films. Which was the reason?",
        a: "Hayao Miyasaki's absence",
        b: "Discussions between the founders",
        c: "They went bankrupt",
        d: "Judicial problems",
        correct: "a",
    },
    {
        number: "4/10",
        question: "What movie was released a year before the studio was founded?",
        a: "My neighbor totoro",
        b: "Nausica of the Valley of the Wind",
        c: "Howl's castle",
        d: "My neighbors the Yamada",
        correct: "b",
    },
    {
        number: "5/10",
        question: "What was the film that won the award for best animated film at the Oscars?",
        a: "Howl's castle",
        b: "Princess Mononoke",
        c: "My neighbor totoro",
        d: "Spirited Away",
        correct: "d",
    },
    {
        number: "6/10",
        question: "It is a recurring theme in his films and is a great hobby of Miyazaki.",
        a: "The family",
        b: "The aviation",
        c: "Animals",
        d: "Wooded landscapes",
        correct: "b",
    },
    {
        number: "7/10",
        question: "What Japanese character do they narrate about in the movie ‘The Wind Rises’?",
        a: "Aeronautical Engineer Jiro Horikoshi",
        b: "Emperor Horikoshi",
        c: "Admiral Yamamoto",
        d: "President Yamamoto",
        correct: "a",
    },
    {
        number: "8/10",
        question: "In which movie were two script versions created? One for Ghibli and one for Disney.",
        a: "Porco Rosso",
        b: "Princess mononoke",
        c: "The Red Turtle",
        d: "The wind picks up",
        correct: "b",
    },
    {
        number: "9/10",
        question: "What is the only Ghibli movie that has Live Action?",
        a: "The fireflies's grave",
        b: "Tales of Earthsea",
        c: "Princess mononoke",
        d: "Pompoko",
        correct: "a",
    },
    {
        number: "10/10",
        question: "In which movie can we see the representation of Miyazaki?",
        a: "My neighbor totoro",
        b: "Kiki's Delivery Service",
        c: "Howl's castle",
        d: "My neighbors the Yamada",
        correct: "b",
    },
];
const quiz = document.getElementById('quiz')
const number = document.getElementById('number')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    number.innerText = currentQuizData.number
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `

                <img class="toto" src="./Imagenes/Totoro1.png" alt="Totoro">    

                <h2>Score: ${score}/${quizData.length} respuestas correctas.</h2>

                <button onclick="location.reload()">Volver a Jugar</button>
            `
        }
    }
})


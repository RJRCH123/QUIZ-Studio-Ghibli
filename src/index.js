const quizData = [
    {
        number: "1/10",
        question: "¿A qué película pertenece el logo del Studio Ghibli?",
        a: "El castillo vagabundo",
        b: "La princesa Mononoke",
        c: "El viaje de Chihiro",
        d: "Mi vecino Totoro",
        correct: "d",
    },
    {
        number: "2/10",
        question: "Esta revista es considerada el origen de los estudios Ghibli:",
        a: "Gakken",
        b: "Tokuma Shoten",
        c: "Nagasaki",
        d: "Dol",
        correct: "b",
    },
    {
        number: "3/10",
        question: "En 2014, Studio Ghibli anunció que no produciría más películas. ¿Cuál fue la razón?",
        a: "La ausencia de Hayao Miyasaki",
        b: "Discusiones entre los fundadores",
        c: "Se fueron a la quiebra",
        d: "Problemas judiciales",
        correct: "a",
    },
    {
        number: "4/10",
        question: "¿Qué película fue estrenada un año antes de la fundación del estudio?",
        a: "Mi vecino Totoro",
        b: "Nausica del Valle del Viento",
        c: "El castillo vagabundo",
        d: "Mis vecinos los Yamada",
        correct: "b",
    },
    {
        number: "5/10",
        question: "¿Cuál fue la película que se llevó el galardón a mejor película animada en los premios Oscar?",
        a: "El castillo vagabundo",
        b: "La princesa Mononoke",
        c: "Mi vecino Totoro",
        d: "El viaje de Chihiro",
        correct: "d",
    },
    {
        number: "6/10",
        question: "Es un tema recurrente en sus películas y es una gran afición de Miyazaki.",
        a: "La familia",
        b: "La aviación",
        c: "Los animales",
        d: "Los paisajes boscosos",
        correct: "b",
    },
    {
        number: "7/10",
        question: "¿De qué personaje japonés narran en la película ‘El viento se levanta’?",
        a: "El ingeniero aeronáutico Jiro Horikoshi",
        b: "El emperador Horikoshi",
        c: "El almirante Yamamoto",
        d: "El presidente Yamamoto",
        correct: "a",
    },
    {
        number: "8/10",
        question: "¿En qué película se crearon dos versiones de guión? Una para Ghibli y otra, para Disney.",
        a: "Porco Rosso",
        b: "La princesa Mononoke",
        c: "La Tortuga Roja",
        d: "El viento se levanta",
        correct: "b",
    },
    {
        number: "9/10",
        question: "¿Cúal es la única película de Ghibli que tiene Live Action?",
        a: "La tumba de las Luciérnagas",
        b: "Cuentos de Terramar",
        c: "La princesa Mononoke",
        d: "Pompoko",
        correct: "a",
    },
    {
        number: "10/10",
        question: "¿En qué película podemos ver a la representación de Miyazaki?",
        a: "Mi vecino Totoro",
        b: "Kiki's Delivery Service",
        c: "El castillo vagabundo",
        d: "Mis vecinos los Yamada",
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


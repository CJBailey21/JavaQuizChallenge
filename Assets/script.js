var wrapperEl = document.querySelector('.wrapper')
var timerEl = document.querySelector('.time')
var btn = document.querySelector('.start')

var questions = [
    {
        question: 'What is the shorthand for Javascript?', 
        anwser: {
            a: 'js',
            b: 'css',
            c: 'html'
        },
        correct: 'a'
    },
    {
        question: 'Arrays in Javascript can be used to store what?',
        anwser: {
            a: 'Numbers, strings, and other arrays',
            b: 'Booleans',
            C: 'both a and c'
        },
        correct: 'c'
    },
    {
        question: 'Commonly used data types do not include?',
        anwser: {
            a: 'Booleans',
            b: 'strings',
            c: 'prompts'
        },
        correct: 'c'
    },
    {
        question: '',
        anwser: {
            a: '',
            b: '',
            c: ''
        },
        correct: ''
    },
    {
        question: '',
        anwser: {
            a: '',
            b: '',
            c: ''
        },
        correct: ''
    }
]

btn.addEventListener('click', start)
console.log(questions[0].question)


function startTimer()
{
    var timer = 10;
    setInterval(function() {
        timer--;
        if (timer >= 0) {
            span = document.getElementById('timer');
            span.innerHTML = timer;
        }
        if (timer === 0) {
            document.querySelector('.timer').style = 'color: red;'
            alert("There's no time!");
            clearInterval(timer);
        }
      }, 1000);
}

function start()
{
    document.querySelector('.timer').style="color: green;";
    startTimer();
};

// for (var i = 0; i < questions.length; i++) {
//     var newEl = document.createElement('p')

//     newEl.innerText = questions[i].question;

//     wrapperEl.append(newEl)
// }

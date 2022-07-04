//variables
var wrapperEl = document.querySelector('.wrapper')
var timerEl = document.querySelector('.time')
var btn = document.querySelector('.start')
var an1Btn = document.querySelector('#an1')
var an2Btn = document.querySelector('#an2')
var an3Btn = document.querySelector('#an3')
var qNum = 0
var score = 0
//arrays for both the leaders initials and score, questions with the anwsers and correct anwser
var leaders = [
    
]

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
        anwser: [{
            a: 'Numbers, strings, and other arrays',
            b: 'Booleans',
            C: 'both a and c'
        }],
        correct: 'c'
    },
    {
        question: 'Commonly used data types do not include?',
        anwser: [{
            a: 'Booleans',
            b: 'strings',
            c: 'prompts'
        }],
        correct: 'c'
    }
]

//event listeners for buttons
btn.addEventListener('click', start)
an1Btn.addEventListener('click', moveOn)
an2Btn.addEventListener('click', moveOn)
an3Btn.addEventListener('click', moveOn)

//function to set the questions on the page
function populateQuestion() {
    console.log(questions);
    document.getElementById('question').innerText = questions[qNum].question
    document.getElementById('an1').innerText = questions[qNum].anwser.a
    document.getElementById('an2').innerText = questions[qNum].anwser.b
    document.getElementById('an3').innerText = questions[qNum].anwser.c
}
//function to move onto the next question 
function moveOn(clickedAnwser) {
    clickedAnwser()
    qNum++;
    scoreCard()
    if (qNum >= questions.length) {
        endQuiz()
    }
    populateQuestion()  
}
//function for scoreboard and time lost for wrong anwsers
function scoreCard(clickedAnwser) {
    if (questions[qNum].correct == clickedAnwser) {
        score++;
    } else {
        timer--;
    }
}
//end of game reset
function reset() {
    qNum = 0
    timer = 60
    score = 0
    document.getElementById('question').innerText = ''
    document.getElementById('an1').innerText = ''
    document.getElementById('an2').innerText = ''
    document.getElementById('an3').innerText = ''
    document.querySelector('.questions').style="display: none"
}
//ends the quiz and runs the function to reset and add person to scoreboard
function endQuiz() {
    alert(`congrats! you scored ${score}`)
    //add score to local storage
    addPersonToScoreboard()
    clearInterval(startTimer) 
    reset()
}

function addPersonToScoreboard() {
    var initials = prompt('Enter initials here')
    leaders.push({
        initials: initials,
        score: score
    })
}

//function to run timer

function startTimer()
{
    var timer = 60;
    setInterval(function() {
        timer--;
        if (timer >= 0) {
            span = document.getElementById('timer');
            span.innerHTML = timer;
        }
        if (timer <= 0) {
            document.querySelector('.timer').style = 'color: red;'
            alert("There's no time!");
            clearInterval(startTimer);
        }
      }, 1000);
}

function start()
{
    document.querySelector('.timer').style="color: green;";
    document.querySelector('.questions').style="display: flex"
    startTimer();
    populateQuestion();
};

// for (var i = 0; i < questions.length; i++) {
//     var newEl = document.createElement('p')

//     newEl.innerText = questions[i].question;

//     wrapperEl.append(newEl)
// }

/* object containing information about the quiz in its various properties, including a questions property that contains an array of question objects */

var quiz = {
    "name": "Super Hero Name Quiz",
    "description": "How many super heroes can you name?",
    "question": "What is the real name of ",
    "questions": [
        {"question": "Superman", "answer": "Clarke Kent"},
        {"question": "Batman", "answer": "Bruce Wayne"},
        {"question": "Wonderwoman", "answer": "Dianna Prince"}
    ]
}

///views  + dom references - stores html elements that we will be updating with each question+answer ///

var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");
var $start = document.getElementById("start");
var $form = document.getElementById("answer");

///view functions///

function update(element,content,klass) {
    var p = element.firstChild || document.createElement("p"); // check element has first child or create new para and assigns to p
    p.textContent = content; // textContent property for p set to the content provided as an argument to the function
    element.appendChild(p); // this is then appended to the element
    if(klass) {
        p.className = klass; // if klass has been set, add this as the className to p
    }
}

function hide(element){
    element.style.display = "none";
}

function show(element){
    element.style.display = "block";
}

//Event Listeners

$start.addEventListener("click", function(){
    play(quiz);
}, false);

// Hide the form at the start of the game

hide($form);


//function definitions

function play(quiz){
    var score = 0; //initialize score to track the number of correct answers
    update($score,score);
    // hide button and show form
    hide($start);
    show($form);
    // add event listener to form for when it's submitted
    $form.addEventListener('submit', function(event) {
        event.preventDefault();
        check($form[0].value);
    }, false);
    var i = 0;
    chooseQuestion();

    // Nested functions

    function chooseQuestion(){
        var question = quiz.questions[i].question;
        ask(question);
    }

    function ask(question) {
        update($question,quiz.question + question);
        $form[0].value = "";
        $form[0].focus();
    }

    function check(answer) {
        if(answer === quiz.questions[i].answer) {
        update($feedback, "Correct!", "right");

    // increase score by 1

        score++;
        update($score,score);

    } else {
        update($feedback, "Wrong!", "wrong");
    }
        i++;
        if(i === quiz.questions.length) {
            gameOver();
        } else {
            chooseQuestion();
        }
    }


    function gameOver(){
        update($question, "Game Over! You scored " + score + " points.");
        hide($form);
        show($start);
    }
}


//define quiz title
var quizTitle;
//define quiz content
var quizContent;
//define quiz answer
var quizAnswer;
//define quiz number
var quizNumber;

//build quizarray which show  quiztitle, quiznumber, quizcontent as well as quiz right answer.
function BuildQuizArray()
{

    //choose three questions
    quizNumber = 3;
    quizTitle = new Array("1+1=?", "2+2=?", "3+3=?");
    //three options for each question
    quizContent = new Array();
    quizContent[0] = new Array("3","5","2");
    quizContent[1] = new Array("4","2","7");
    quizContent[2] = new Array("5", "6", "7");
    //quiz right answer index
    quizAnswer = new Array(2, 0, 1);
}

//current question
var nowTopic = 0;

var isStart = false;
var correctNum = 0;
var errorNum = 0;

//click paly button
function StartQuiz() {

//create question list
    BuildQuizArray();
//dispaly current question
    document.getElementById("quiztitle").innerText =quizTitle[nowTopic];

    document.getElementById("qv0").innerText = quizContent[nowTopic][0];
    document.getElementById("qv1").innerText = quizContent[nowTopic][1];
    document.getElementById("qv2").innerText = quizContent[nowTopic][2];
//start timer
    startTimer();
    isStart = true;
}

//choose the right answer, then click confirm and verify the answer
function CheckQuiz() {

    if ( !isStart)
    {
        alert("Please click 'Play Now' ");
        return;
    }

    var answer = document.getElementsByName("qa");
    var value;
    var selectAnswer;
// for loop to repeat the quiz.
    for (var i = 0; i < answer.length; i++) {
        if (answer[i].checked) {
            value = answer[i].value;
            selectAnswer = answer[i];
            break;
        }
    }

    if (selectAnswer == null) {
        alert("please choose one ");
        return;
    }

    if (value == quizAnswer[nowTopic]) {
        alert("Correct!");
        correctNum++;
    }
    else {
        alert("Error!");
        errorNum++;
    }

    selectAnswer.checked = false;

    clearInterval(myInterval);
    nowTimer = 10;

    nowTopic++;
    if (nowTopic < quizNumber)
        StartQuiz();
    else {
        document.getElementById("timeout").innerText = "All Quiz Completed";
        document.getElementById("nowQuiz").innerHTML = "Number of correct answers: " + correctNum + "<br />" + "Number of error answers: " + errorNum;

       // document.getElementById("nowQuiz").style.display = "none";
    }
}

var myInterval ;
var nowTimer = 10;
function QuizTimer() {

    document.getElementById("timeout").innerText = "Remaining Time:  "+ nowTimer +" s";
    nowTimer--;
    if (nowTimer == 0) {
        clearInterval(myInterval);
        nowTimer = 10;
        document.getElementById("timeout").innerText = "Sorry, Timeout!";
    }

}

function startTimer() {
    myInterval = setInterval("QuizTimer()", 1000);
}


//define quiz title
var quizTitle;
//define quiz content
var quizContent;
//define quiz answer
var quizAnswer;
//define quiz number
var quizNumber;

//build quizarray which show  quiztitle, quiznumber, quizcontent as well as quiz right answer.
function BuildQuizArray() {

    //choose three questions
    quizNumber = 3;
    quizTitle = new Array("In what city did the Commonwealth Parliament first sit?", "In what state/territory was the highest recorded temperature, of 53oC, recorded?", "What year did Cyclone Tracy hit Darwin?");
    //three options for each question
    quizContent = new Array();
    quizContent[0] = new Array("Sydney", "Melbourne", "Adelaide");
    quizContent[1] = new Array("Queensland", "Melbourne", "Canberra");
    quizContent[2] = new Array("1981", "1969", "1974");
    //quiz right answer index
    quizAnswer = new Array(1, 0, 2);
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
    document.getElementById("quiztitle").innerText = quizTitle[nowTopic];

    document.getElementById("qv0").innerText = quizContent[nowTopic][0];
    document.getElementById("qv1").innerText = quizContent[nowTopic][1];
    document.getElementById("qv2").innerText = quizContent[nowTopic][2];
    //start timer
    if (!isStart)
        startTimer();
    isStart = true;

    document.getElementById("playgame").style.display = "none";
    document.getElementById("nowQuiz").style.display = "block";
    document.getElementById("confirmBtn").style.display = "block";

}

//choose the right answer, then click confirm and verify the answer
function CheckQuiz() {

    if (!isStart) {
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
        alert("Error! Time deducted: 5s");
        errorNum++;
        nowTimer = nowTimer - 5;
    }


    selectAnswer.checked = false;


    nowTopic++;
    if (nowTopic < quizNumber)
        StartQuiz();
    else {
        document.getElementById("timeout").innerText = "All Quiz Completed";
        document.getElementById("yourName").style.display = "block";
        document.getElementById("confirmBtn").style.display = "none";

        document.getElementById("nowQuiz").style.display = "none";

        clearInterval(myInterval);
        nowTimer = 60;

    }
}
// submit name
function submitName() {
    document.getElementById("quizResult").style.display = "block";
    document.getElementById("yourName").style.display = "none";
    //document.getElementById("nowQuiz").innerHTML = "Hi " + document.getElementById("yName").value + "; <br/><br/>Number of correct answers: " + correctNum + "<br /><br />" + "Number of error answers: " + errorNum;
    document.getElementById("resUserName").innerText = document.getElementById("yName").value;
    document.getElementById("resScore").innerText = correctNum * 10;
    document.getElementById("resCorrNum").innerText = correctNum;
    document.getElementById("resErrNum").innerText = errorNum;
    document.getElementById("gobackBtn").style.display = "block";
}

var myInterval;
var nowTimer = 60;
function QuizTimer() {

    document.getElementById("timeout").innerText = "Remaining Time:  " + nowTimer + " s";
    nowTimer--;
    if (nowTimer <= 0) {
        clearInterval(myInterval);
        nowTimer = 60;
        document.getElementById("timeout").innerText = "Sorry, Timeout!";
    }

}
// start Timer
function startTimer() {
    myInterval = setInterval("QuizTimer()", 1000);
}

// return to quiz
function goBack() {
    self.location.href = 'index.html';
}
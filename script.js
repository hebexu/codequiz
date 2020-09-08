var quizTitle
var quizContent
var quizAnswer
var quizNumber

function BuildQuizArray(){
    quizNumber = 3;
    quizTitle = new Array("1+1=?", "2+2=?", "3+3=?");

    quizContent = new Array();
    quizContent[0] = new Array("3","5","2");
    quizContent[1] = new Array("4","2","7");
    quizContent[2] = new Array("5", "6", "7");

    quizAnswer = new Array(2, 0, 1);


}

var nowTopic = 0;
function StartQuiz()
{
    BuildQuizArray();

    document.getElementById("quiztitle").innerText =quizTitle[nowTopic];

    

    document.getElementById("qv0").innerText = quizContent[nowTopic][0];
    document.getElementById("qv1").innerText = quizContent[nowTopic][1];
    document.getElementById("qv2").innerText = quizContent[nowTopic][2];

    startTimer();
}

function checkQuiz() {

    var answer = document.getElementsByName("qa");
    var value;
    var selectAnswer;
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

    if(value ==quizAnswer[nowTopic])
    {
    alert("Correct!");
    }
    else
    alert("Error!");

selectAnswer.checked = false;

    clearInterval(myInterval);
    nowTimer = 10;

    nowTopic++;
    if (nowTopic<quizNumber)
    StartQuiz();
}

var myInterval ;
var nowTimer = 10;
function QuizTimer() {
    document.getElementById("timeout").innerText = nowTimer +" s";
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
}

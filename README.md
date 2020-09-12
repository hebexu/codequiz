# codequiz
1. Project Introduction
This page will show three quizes for user, it will automatically display the next quiz once user finishes one, untill three quizes are finished. 
User could click "play" button to start for quizes.
It will take maximum 10 seconds to answer each quiz, and will show "Timeout" if user run out of time for the quiz. 
User click "Confirm" button to finish to answer the quiz. 
The page will show the next quiz automatically after the page verify and alert whether the answer is right? 
It will show the number of right answer quiz and wrong answer quiz after finishing 3 quizes.
The date of development: 4th Sep, 2020.
Developer: Hebe

2. Project coding introduction:
The project includes 3 source files: 
index.html is responsible for user interface and communication operation;
script.js is responsible for playing quizes.
style.css is responsible for the display style of HTML.
index.html will call script.js file and sytle.css file. 

3. Quiz implementation introduction:
script.js is responsible for the introduction of main functions of the logic of answering quizes. 
BuildQuizArray() function, initializes three quizes, and is capable for changing the quiz numbers. 
StartQuiz()， when user click "play now", the page will show quizes and start for 10 seconds countdown.
checkQuiz(),  click "Confirm" button after choosing answer options, then will call the function for verifying the right answer. The page will dispaly next quiz if there is unanswered quiz. 
QuizTimer()， enables countdown counter, the countdown will be displayed on screen. It will show "Timeout", if it exceeds 10 seconds. 
startTimer()，enables timer program.

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
index.html： 负责面向用户的显示和交互操作。
script.js 负责生成随机密码的JavaScript 脚本文件。
style.css ： 负责网页的显示样式。
index.html 文件将引用 script.js 和 style.css 。

3. Quiz的主要实现说明
script.js 文件负责答题逻辑的主要函数实现说明
BuildQuizArray() 函数，主要用于初始化 3道题目。 当然，此处也可以将题目改为任意数量。
StartQuiz()， 当用户点击 Play Now时，在界面上显示题目，并开始10秒倒计时。
checkQuiz(),  选好选项后， 点击Confirm 按钮， 将调用该函数验证答案，并提示回答是否正确。如果还有未答的题目， 则启动显示下一题
QuizTimer()， 倒计时计数器启动，在界面上显示倒计时，如果超过10秒，则显示Timeout信息。
startTimer()，启动计时程序

var readlineSync = require('readline-sync');
var userName=readlineSync.question("Enter your name:");
var log = console.log;

log("Hello"+userName+" Let's check your F1 knowledge");

var score=0;

var questionList={
  questionOne:{
    question:"1.Lewis Hamilton won the first F1 world championship title when he raced for which team?",
    options:["McLaren","Mercedes","Red Bull"],
  answer:"0"
},
questionTwo:{
    question:"2.The title “Grand Prix” was first used for a motor race in which country?",
    options:["France","Germany","The United States"],
  answer:"0"
},
questionThree:{
    question:"3.What is the nickname of Ferrari – one of the most successful racing teams in F1 history?",
    options:["The Dancing Donkey","The Prancing Horse","The Prancing Pony"],
  answer:"2"
},
questionFour:{
    question:"4.Which driver won the first ever F1 world championship title?",
    options:["Juan Manuel Fangio","Alberto Ascari","Giuseppe Farina"],
  answer:"2"
},
questionFive:{
    question:"5.What does a red flag mean in the race?",
    options:["There is oil spilled on the track","The race is stopped","There is no red flag in F1"],
  answer:"1"
}
};

function displayQuestions(item){
  var userInput = readlineSync.keyInSelect(questionList[item].options,questionList[item].question,{cancel:"None of the above"});
  log("-------------------------------------------------------------------");
  if (userInput==questionList[item].answer){
    score=score+1;
  }
};
var objList=Object.keys(questionList);
var obj=objList.map(item=>{displayQuestions(item)})
log(`Your Score: ${score}`);

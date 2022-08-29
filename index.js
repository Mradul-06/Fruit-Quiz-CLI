var readlinesync = require("readline-sync");
var score = 0;

function quizPlay(question,answer){
  var userAnswer = readlinesync.question(question);
  if (userAnswer === answer){
    console.log("you are right");
    score=score+1;
    console.log("your score is "+score) 
  }
  else{
    console.log("you were wrong");
    score=score-1;
    console.log("your score is "+score)
  }
}
console.log("enter your name")
var userName = readlinesync.prompt("enter username")

quizPlay("what color is banana ", "yellow");

quizPlay("what color is apple ","red");

quizPlay("what color is orange ", "orange");

quizPlay("what color is strawberry ", "red");

quizPlay("what color is  grapes ", "green");
console.log(userName,"your final score is",score)


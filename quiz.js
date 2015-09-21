// quiz begins, no answers correct
var correct = 0;

// ask questions
var answer1 = prompt("Name a programming language that's also a gem")
if ( answer1.toUpperCase() === 'RUBY') {
  correct += 1;
}
var answer2 = prompt("Name a programming language that's also a snake")
if ( answer2.toUpperCase() === 'PYTHON') {
  correct += 1;
}
var answer3 = prompt("What language do you use to style web pages?")
if ( answer3.toUpperCase() === 'CSS') {
  correct += 1;
}
var answer4 = prompt("What languagedo you use to build the structure of web pages")
if ( answer4.toUpperCase() === 'HTML') {
  correct += 1;
}
var answer5 = prompt("What lanugage do you use to add behavior or interactivity to a web page?")
if ( answer5.toUpperCase() === 'JAVASCRIPT') {
  correct += 1;
}

// output results/rank
if ( correct === 5 ) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if ( correct >= 3 ) {
  document.write("<p><strong>You earned a silver crown.</strong></p>");
} else if (correct >= 1 ) {
  document.write("<p><strong>You, earned a bronze medal.</strong></p>");
} else (correct >= 1 ) {
  document.write("<p><strong>Well, sometime the bar eats you.</strong></p>");
}



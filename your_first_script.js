/*
var intro = "Hi my name is Artem and I am ____ years old.";
var age = 32;
intro = "Hi my name is Artem and I am " + age + " years old.";
console.log(intro);
var num2 = 10;
age + "" + num2;
console.log(age + "" + num2);
var cat1 = "Misty";
var cat2 = "Shadow";
var sentence = "I have two cats, " + cat1 + " and " + cat2 + ".";
var age1 = 3;
var age2 = 5;
sentence = sentence + ". And they are " + age1 + " and " + age2 + " years old.";
console.warn("Warning!");
console.error("Error!");
var test = document.getElementById("test");
var oldText = test.innerHTML;
test.innerHTML = "<strong>Hello, World!</strong>";
var name = document.getElementById("name");
name.innerText = "Artem";
var headline = document.getElementById("headline");
var Myname = "Artem";
headline.innerText = "Hello, " + Myname + "!";
var sentenceNode = document.getElementById("sentence");
var sentence = sentenceNode.innerText;
var upperSentence = sentence.toUpperCase();
sentenceNode.innerText = upperSentence;
var lowerSentence = sentence.toLowerCase();
sentenceNode.innerText = lowerSentence;
var firstTenChars = sentence.substring(0, 10);
var allWords = sentence.split(" ");
var bracketWords = "[" + allWords.join("][") + "]";
var firstThreeWords = allWords.slice(0, 3);
var middleWords = allWords.slice(2, 5);
var makeSentence = middleWords.join(" ");
sentenceNode.innerText = makeSentence;
var favoriteColor = prompt("What is your favorite color?");
var customInputNode = document.getElementById("customInput");
favoriteColor = favoriteColor.toLowerCase();
customInputNode.innerText = favoriteColor;
var myname = prompt("What is your name?");
var welcomeNode = document.getElementById("welcome");
if (myname.toLowerCase() == "artem") {
    welcomeNode.innerText = "Hello, Artem!";
} else {
    welcomeNode.innerText = "Hello, stranger!";
}
var headline = document.getElementById("welcome");    
var input = prompt("What course are you taking?")
var inputLower = input.toLowerCase();
if (inputLower == "javascript") {
    headline.innerText = "You are taking the JavaScript course!";
} else {
    headline.innerText = "You are taking a different course."; 
}
var url = prompt("Enter a URL:");
var httpNode = url.slice(0, 4);
if (httpNode != "http") {
    url = "http://" + url;
}
var headline = document.getElementById("welcome");
headline.innerHTML = url;

var Myname = "Kalob";

if(Myname == "Kalob") {
 console.log('Welcome back, Kalob!');  
} else if (Myname == "Artem") {
 console.log('Hello, Artem!');          
} else if (Myname == "John") {
 console.log('Hi, John!');          
} else {
 console.log('Hello, stranger!');          
}

switch (Myname) {
    case "Kalob":
        console.log('Welcome back, Kalob!');
        break;
    case "Artem":
        console.log('Hello, Artem!');
        break;
    case "John":
        console.log('Hi, John!');
        break;
    default:
        console.log('Hello, stranger!');
}

num1 = 100;
num2 = 33.5;
sum = num1 / num2;
console.log(sum);

var isCat = true;
if (isCat) {
    console.log('This is a cat.');
} else {
    console.log('This is not a cat.');
}
var CatName = prompt("What is your cat's name?");

if (CatName.toLowerCase() == "misty") {
    var isCat;
} else {
    var isCat = false;
}
if(!isCat) {
    console.log('This is not Misty.');
}
if(isCat != true) {
    console.log('This is not a cat.');
}
var isCat = 1;
var isDog = 0;
*/
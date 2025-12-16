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

names = ["Artem", "Kalob", "John", "Jane"];
nums = Array(10, 20, 30, 40, 50);
names.push("Mary");
mary = names.pop();

var age = 30;
age = Number(age);
if(age) {
  console.log("You have a proper number")
  if(age >= 18) {
    console.log("You can vote!")
  }
}
console.log(typeof(age));
age = String(age);

var isCat = "true";
isCat = Boolean(isCat);
var course = "JS for Beginners";
course = Array(course)

var course = "js"
if(course != "php") {
  console.log("Is a JS course!")
}
var age = 17;

var personAge = prompt("what is your age");
personAge = Number(personAge);

if (!isNaN(personAge)) {
  if (personAge >= 18) {
    document.getElementById("welcome").innerText = "You are Adult"
  }
}

function greeting(name, age) {
  console.log("Hello " + name + " " + age + " years old");
  return "SpaceX"
}
greeting("Artem", 32);
var varName = greeting();


function doMath(num) {
  num = Number(num);
  if(num) {
    var newNumber = (num + 100) / 3
    return newNumber;
  } else {
    return false;
  }
}
var customNum = doMath(343);
console.log(customNum)


function $(id) {
  return document.getElementById(id)
}

var title = $("title")
title.innerText = "Custom unner text"

function cToF(c_num) {
  var fahrenheit = (c_num * 1.8) + 32;
  return fahrenheit
}

var zero = cToF(0) 
console.log(zero);

function tipCalc(sum, tip = sum * 0.1) {
  var totalBill = sum + tip;
  return totalBill;
}

var tipNumber = tipCalc(20,10) 
console.log(tipNumber)

var title = document.querySelector(".title")
title.innerText = "Changed!"
var small = title.querySelector("small")
var a = document.querySelector("a")
a.innerText = "Coding For Everybody.com"

var lis = document.querySelectorAll("li")
lis[0].innerText = "Anything i want";

var input = document.querySelector(".form-control")
input.value = "Hehe"
console.log(input.value)

var totalClicks = 0;
function clickMe() {
  totalClicks++;
  console.log("You have Clicked this btn " + totalClicks + " times")
}

var num = 100;
function calculate() {
  var input = document.querySelector(".form-control");
  var inputNum = Number(input.value);
  var totalValue = inputNum + num;
  var h1 = document.querySelector("h1");
  var span = h1.querySelector("span");
  span.innerText = totalValue
}

function calculateTip() {
  const firstInput = document.querySelector(".bill-amount");
  let billAmount = Number(firstInput.value);
  const secondInput = document.querySelector(".tip-percent");
  let tipPercent = Number(secondInput.value);
  var tipPercentAmount = Number(billAmount) / 100 * Number(tipPercent);
  var totalBill = Number(billAmount) + Number(tipPercentAmount);
  return totalB¡ill;
}

var number = calculateTip();
  var totalBillEl = document.querySelector("span");
  totalBillEl.innerText = number;

console.log('calculate')

function calculateIt() {
  var billAmount = Number(document.querySelector(".bill-amount").value);
  var tipPercent = Number(document.querySelector(".tip-percent").value);
  console.log(billAmount, tipPercent)
tipPercent = tipPercent / 100;
  var totalTip = billAmount * tipPercent;
  var totalBill = billAmount + totalTip;
  document.querySelector(".span").innerText = totalBill;
}

var getName = (function() {
    return document.querySelector(".name").value
})();

(function LoadApp() { 
    console.log("App Loading...");
    // Load event logic here
    console.log("App Loaded.");
})();

function getPerson(name) {
    this.name = name;
    this.profession = "Developer";
    return this
}

var btn = document.querySelector(".btn")
var totalClicks = 0;
btn.addEventListener("click", function(event) {
    totalClicks++;
    document.querySelector(".span").innerText = totalClicks;
});

let nameInput = document.querySelector(".js-name");
let nameElem = document.querySelector(".js-change-name");
nameInput.addEventListener("input", function(event) {
    nameElem.innerText = event.target.value;
})

let nameInput = document.querySelector(".js-name");
let nameElem = document.querySelector(".js-change-name");
function callback(event) {
    nameElem.innerText = event.target.value;
}
nameInput.addEventListener("input", callback);

let bgColorInput = document.querySelector(".js-bg-color");
let textColorInput = document.querySelector(".js-text-color");
let body = document.querySelector("body");
bgColorInput.addEventListener("input", function(event) { 
  let color = event.target.value;
  switch(color) {
    case "red":
    case "blue":
      body.style.backgroundColor = color;
      break;
    default:
      body.style.backgroundColor = "white";
      break
  }
});
textColorInput.addEventListener("input", function(event) { 
  body.style.color = event.target.value;
});

let bgColorInput = document.querySelector(".js-bg-color");
let textColorInput = document.querySelector(".js-text-color");
let fontSizeInput = document.querySelector(".js-font-size");
let body = document.querySelector("body");
bgColorInput.addEventListener("input", function(event) {
  body.style.backgroundColor = event.target.value;
});
textColorInput.addEventListener("input", function(event) {
  body.style.color = event.target.value;
});
fontSizeInput.addEventListener("input", function(event) {
  body.style.fontSize = event.target.value + "px";
});

person = {
  name: "Artem",
  age: 32, 
  cats: ["Misty", "Shadow"]
}
console.log(person.age);
person["sound"] = function() {
  console.log(this.name + " says Woof!");
}
person.getCats = function() {
  alert(this.name + " has " + this.cats.length + " cats.");
}


for(var i=0; i<10; i++) {
  console.log(i);
}

var names = ["Artem", "Kalob", "John", "Jane"];
function toEmail(name) {
  return name.toLowerCase() + "@example.com";
}

for(var i=0; i<names.length; i++) {
  var currentName = toEmail(names[i]);
  console.log(currentName);
}

var num = Number(prompt("Enter a number:"));
var startingNum = 0;
while(startingNum < num) {
  console.log(startingNum);
  startingNum++;
}

var ul = document.querySelector(".js-list");
var html = "";
var num = Number(prompt("Enter a number:"));
var startingNum = 1;
while(startingNum <= num) {
  html = html + "<li>" + startingNum + "</li>"
  startingNum++;
}
ul.innerHTML = html;

var names = ["Artem", "Kalob", "John", "Jane"];
names.forEach(function(name, index) {
  console.log(index + ": " + name);
 })
 
var lis = document.querySelectorAll(".js-text");
lis.forEach(function(node, index) { 
  if(index >= 10) { 
    node.remove();
    return false;
  }
  node.innerText = "Item " + (index + 1);

})

let guessInput = document.querySelector(".guess-input");
let body = document.querySelector("body");
let correctNumber = 7;
 while (correctNumber != userGuess) {
  guessInput.addEventListener("input", function(event) { 
  if (Number(guessInput.value) == correctNumber) {
    body.style.backgroundColor = green;
    return: true
  } else {
    body.style.backgroundColor = red;
    alert("Try Again");
    return: false
  }
});
 }
*/

let correctNumber = 12;
let body = document.querySelector("body");
while (true)  {
  userGuess = Number(prompt("Enter your Guess"));
  if (userGuess === correctNumber) {
    alert("correct")
    body.style.backgroundColor = "green";
    break;
  } else {
    alert("try again");
    body.style.backgroundColor = "red";
  }
}
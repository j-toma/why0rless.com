function shuffle(array) {
  for (var i=array.length-1; i>0; i--) {
    var j = Math.floor(Math.random() * (i+1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {

  var data = ev.dataTransfer.getData("text");
  ev.preventDefault();
  if (!ev.target.hasChildNodes()) {
    var node = document.getElementById(data);
    // node.setAttribute('id', 'dropZone');
    ev.target.appendChild(node);
  }
  checkFull();
}

//
// looks out the window,
// plays on his phone
// listen to
// their pen was left behind
// look over
// talk about
// go through the exercise
// speak up
// write down
// sent out
// hand out
// get used to
// turn around
// come back you cant go to the toilet
// turn down the volume
// put out your cigarrette


var class11b = {
  1: {
    key: 1,
    sentenceStart: "I was glad that Lucky didn't turn",
    sentenceEnd: "to talk to Shay.",
    answer: "around",
    number: 0
  },
  2: {
    key: 2,
    sentenceStart: "Even though we have security cameras in class, some students still play",
    sentenceEnd: "their phones",
    answer: "on",
    number: 0
  },
  3: {
    key: 3,
    sentenceStart: "Selina is a good student because she is always listening",
    sentenceEnd: "the teacher.",
    answer: "to",
    number: 0
  },
  4: {
    key: 4,
    sentenceStart: "Luke likes to talk",
    sentenceEnd: "computers.",
    answer: "about",
    number: 0
  },
  5: {
    key: 5,
    sentenceStart: "Put",
    sentenceEnd: "your cigarettes and come back to class.",
    answer: "out",
    number: 0
  },
  6: {
    key: 6,
    sentenceStart: "Yesterday I asked Tony to come",
    sentenceEnd: "to the blackboard and draw a giraffe.",
    answer: "up",
    number: 0
  },
  7: {
    key: 7,
    sentenceStart: "Mike writes",
    sentenceEnd: "new vocabulary in his GAC011 book.",
    answer: "down",
    number: 0
  },
  8: {
    key: 8,
    sentenceStart: "Does anyone want me to look",
    sentenceEnd: "their essay before it's due?",
    answer: "over",
    number: 0
  },
  9: {
    key: 9,
    sentenceStart: "Edison used to sit",
    sentenceEnd: "Balance.",
    answer: "beside",
    number: 0
  },
  10: {
    key: 10,
    sentenceStart: "Balance used to sit",
    sentenceEnd: "Tony.",
    answer: "behind",
    number: 0
  }
}

var class11a = {
  1: {
    key: 1,
    sentenceStart: "Jonathan helped me plug",
    sentenceEnd: "the speaker.",
    answer: "in",
    number: 0
  },
  2: {
    key: 2,
    sentenceStart: "Leo almost always sits",
    sentenceEnd: "Oliver.",
    answer: "beside",
    number: 0
  },
  3: {
    key: 3,
    sentenceStart: "Stars came back from break",
    sentenceEnd: "a new haircut.",
    answer: "with",
    number: 0
  },
  4: {
    key: 4,
    sentenceStart: "This semester, lots of students are bringing their laptops",
    sentenceEnd: "class.",
    answer: "to",
    number: 0
  },
  5: {
    key: 5,
    sentenceStart: "I wish you guys would talk more",
    sentenceEnd: "your personal lives.",
    answer: "about",
    number: 0
  },
  6: {
    key: 6,
    sentenceStart: "Once I caught Jessica looking",
    sentenceEnd: "clothes on TaoBao.",
    answer: "at",
    number: 0
  },
  7: {
    key: 7,
    sentenceStart: "During GAC class, I can often see students working",
    sentenceEnd: "ACT or IELTS material.",
    answer: "on",
    number: 0
  },
  8: {
    key: 8,
    sentenceStart: "Today I want to spend some time looking",
    sentenceEnd: "your tests from last week.",
    answer: "over",
    number: 0
  },
  9: {
    key: 9,
    sentenceStart: "Yoko went",
    sentenceEnd: "that exercise very quickly.",
    answer: "through",
    number: 0
  },
  10: {
    key: 10,
    sentenceStart: "Ivy, please hand",
    sentenceEnd: "these papers for me.",
    answer: "out",
    number: 0
  }
}

var class10 = {
  1: {
    key: 1,
    sentenceStart: "Steve, hurry up! Get",
    sentenceEnd: "the car.",
    answer: "in",
    number: 0
  },
  2: {
    key: 2,
    sentenceStart: "Alice, here comes 119. Quick, get",
    sentenceEnd: "the bus.",
    answer: "on",
    number: 0
  },
  3: {
    key: 3,
    sentenceStart: "Johnny comes",
    sentenceEnd: "Venezuela.",
    answer: "from",
    number: 0
  },
  4: {
    key: 4,
    sentenceStart: "I am going to catch him",
    sentenceEnd: "surprise.",
    answer: "by",
    number: 0
  },
  5: {
    key: 5,
    sentenceStart: "Miranda threw the ball",
    sentenceEnd: "Andy",
    answer: "to",
    number: 0
  },
  6: {
    key: 6,
    sentenceStart: "Ulrica didn't know how Tom got",
    sentenceEnd: "so much trouble.",
    answer: "into",
    number: 0
  },
  7: {
    key: 7,
    sentenceStart: "Jonathan and Ryan biked",
    sentenceEnd: "Dian Chi in just 5 hours!",
    answer: "around",
    number: 0
  },
  8: {
    key: 8,
    sentenceStart: "Allen played",
    sentenceEnd: "Tony in the final round.",
    answer: "against",
    number: 0
  },
  9: {
    key: 9,
    sentenceStart: "Gray and Jing Ran jumped",
    sentenceEnd: "the fence to avoid an angry dog.",
    answer: "over",
    number: 0
  },
  10: {
    key: 10,
    sentenceStart: "Amy always sits",
    sentenceEnd: "class without falling asleep.",
    answer: "through",
    number: 0
  }
}

var data = class10;
// var data = [class10, class11a, class11b];
function selectSentences(sentences) {
  clear();
  data = sentences;
  init();
}

function clear () {
  document.getElementById('wordBank').innerHTML = "";
  document.getElementById('fillIns').innerHTML = "";
  if (document.getElementById('result').childNodes.length != 0) {
    document.getElementById('result').innerHTML = "";
  }
}

var keys = Object.keys(data);
var clone = keys.slice();
var homeOrder = shuffle(keys);

function genHomes () {
  var wordBank = document.getElementById('wordBank');
  for (var i=0; i<keys.length;i++) {
    var home = document.createElement('div');
    home.setAttribute('class', 'home');
    home.setAttribute('id', 'home' + (i + 1));
    home.ondrop = function () { drop(event) };
    home.ondragover = function () { allowDrop(event) };
    home.appendChild(genWord(i));
    wordBank.appendChild(home);
  }
}

function genWord (i) {
  var word = document.createElement('span');
  word.setAttribute('id', 'word' + data[homeOrder[i]]['key']);
  word.setAttribute('data-key', data[homeOrder[i]]['key']);
  word.setAttribute('draggable', 'true');
  word.ondragstart = function () { drag(event) };
  word.innerHTML = data[homeOrder[i]]['answer'];
  return word;
}

var fillOrder = shuffle(clone);
function genFillIns () {
  var fillIns = document.getElementById('fillIns');
  for (var i=0; i<keys.length;i++) {
    var fillIn = document.createElement('div');
    fillIn.setAttribute('id', 'fillIn' + (i+1));
    // fillIn.setAttribute('data-key', data[fillOrder[i]]['key']);
    fillIn.appendChild(genSentence(i+1,data[fillOrder[i]]['key']));
    fillIns.appendChild(fillIn);
  }
}

function genSentence (num, key) {
  //edit data
  data[key]['number'] = num;

  var sentence = document.createElement('div');
  sentence.setAttribute('id', 'sentence' + (key+1));

  var sentenceStart = document.createElement('span');
  sentenceStart.innerHTML = num + '. ' + data[key]['sentenceStart']+' ';
  sentence.appendChild(sentenceStart);

  var blank = document.createElement('span');
  blank.setAttribute('id', 'dropZone');
  blank.setAttribute('class', 'dropZone');
  blank.ondrop = function () { drop(event) };
  blank.ondragover = function () { allowDrop(event) };
  blank.setAttribute('data-key', key);
  sentence.appendChild(blank)

  var sentenceEnd = document.createElement('span');
  sentenceEnd.innerHTML = ' '+data[key]['sentenceEnd'];
  sentence.appendChild(sentenceEnd);

  return sentence;
}

function init () {
  genHomes();
  genFillIns();
}

init();


function checkFull () {
  var bankCount = Object.keys(data).length;
  var bank = document.getElementById('wordBank').childNodes;
  for (var i=0;i<bank.length;i++) {
    if (bank[i].childNodes.length == 0) {
      bankCount--
    }
  }
  if (bankCount == 0) {
    checkAnswers();
  }
}

function checkAnswers () {
  var correctCount = 0;
  var incorrectNumbers = [];
  var answers = document.getElementsByClassName('dropZone');
  for (var i=0;i<answers.length;i++) {
    var sentenceKey = answers[i].dataset.key;
    var answerKey = answers[i].childNodes[0].dataset.key;
    if (sentenceKey === answerKey) {
      answers[i].style.color = 'green';
      // answers[i].childNodes[0].setAttribute('id', 'correct');
      correctCount++
    } else {
      incorrectNumbers.push(data[sentenceKey]['number']);
      console.log(answers[i].childNodes[0]);
      restore(answers[i].childNodes[0]);
      // answers[i].style.color = 'red';
      // answers[i].childNodes[0].setAttribute('id', 'incorrect');
    }
  }
  var result = document.getElementById('result');
  if (correctCount === Object.keys(data).length) {
    result.innerHTML = "<p>All your answers are correct!</p>"
    result.style.color = "green";
    result.style.fontSize = "xx-large";
  } else {
    result.innerHTML = "Some of your answers are incorrect: " + incorrectNumbers;
    result.style.color = "red";
    result.style.fontSize = "xx-large";
  }
  // return incorrectNumbers;
}

function restore (word) {
  var homes = document.getElementsByClassName('home');
  for (var i=0; i<homes.length;i++) {
    if (homes[i].childNodes.length ==0) {
      homes[i].append(word);
      break;
    }
  }
}

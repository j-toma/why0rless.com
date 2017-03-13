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
    ev.target.appendChild(document.getElementById(data));
  }
  checkFull();
}

var data = {
  1: {
    key: 1,
    sentenceStart: "Steve, hurry up! Get",
    sentenceEnd: "the car.",
    answer: "in"
  },
  2: {
    key: 2,
    sentenceStart: "Alice, here comes 119. Quick, get",
    sentenceEnd: "the bus.",
    answer: "on"
  },
  3: {
    key: 3,
    sentenceStart: "Johnny comes",
    sentenceEnd: "Venezuela.",
    answer: "from"
  },
  4: {
    key: 4,
    sentenceStart: "I am going to catch him",
    sentenceEnd: "surprise",
    answer: "by"
  },
  5: {
    key: 5,
    sentenceStart: "Miranda threw the ball",
    sentenceEnd: "Andy",
    answer: "to"
  },
  6: {
    key: 6,
    sentenceStart: "Ulrica didn't know how Tom got",
    sentenceEnd: "so much trouble",
    answer: "into"
  },
  7: {
    key: 7,
    sentenceStart: "Jonathan and Ryan biked",
    sentenceEnd: "Dian Chi in just 5 hours!",
    answer: "around"
  },
  8: {
    key: 8,
    sentenceStart: "Allen played",
    sentenceEnd: "Tony in the final round.",
    answer: "against"
  },
  9: {
    key: 9,
    sentenceStart: "Gray and Jing Ran jumped",
    sentenceEnd: "the fence to avoid an angry dog.",
    answer: "over"
  },
  10: {
    key: 10,
    sentenceStart: "Amy always sits",
    sentenceEnd: "class without falling asleep.",
    answer: "through"
  }

}

var keys = Object.keys(data);
var clone = keys.slice();
var homeOrder = shuffle(keys);

function genHomes () {
  var wordBank = document.getElementById('wordBank');
  for (var i=0; i<keys.length;i++) {
    var home = document.createElement('div');
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
    fillIn.appendChild(genSentence(data[fillOrder[i]]['key']));
    fillIns.appendChild(fillIn);
  }
}

function genSentence (i) {
  var sentence = document.createElement('div');
  sentence.setAttribute('id', 'sentence' + (i+1));

  var sentenceStart = document.createElement('span');
  sentenceStart.innerHTML = data[i]['sentenceStart']+' ';
  sentence.appendChild(sentenceStart);

  var blank = document.createElement('span');
  blank.setAttribute('id', 'dropZone');
  blank.setAttribute('class', 'dropZone');
  blank.ondrop = function () { drop(event) };
  blank.ondragover = function () { allowDrop(event) };
  blank.setAttribute('data-key', i);
  sentence.appendChild(blank)

  var sentenceEnd = document.createElement('span');
  sentenceEnd.innerHTML = ' '+data[i]['sentenceEnd'];
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
  var incorrectKeys = [];
  var answers = document.getElementsByClassName('dropZone');
  for (var i=0;i<answers.length;i++) {
    var sentenceKey = answers[i].dataset.key;
    var answerKey = answers[i].childNodes[0].dataset.key;
    if (sentenceKey === answerKey) {
      correctCount++
    } else {
      incorrectKeys.push(sentenceKey);
    }
  }
  if (correctCount === Object.keys(data).length) {
    alert("You did it!");
    history.go(-1);
  } else {
    alert("Some of your answers are incorect.")
  }
}

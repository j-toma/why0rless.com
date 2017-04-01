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
  checkFinish();
}

function shuffle(array) {
  var order = Array.apply(null, {length: array.length}).map(Number.call, Number);
  for (var i=array.length-1; i>0; i--) {
    var j = Math.floor(Math.random() * (i+1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    var t = order[i];
    order[i] = order[j];
    order[j] = t;
  }
  return [array, order];
}

function randomChoice(array) {
    return array[Math.floor(arr.length * Math.random())];
}

var data = {
  1: {
    key: 1,
    phrase: "I have no responsibilities here whatsoever.",
    solved: false
  },
  2: {
    key: 2,
    phrase: "We're in the business of saving lives.",
    solved: false
  },
  3: {
    key: 3,
    phrase: "And the hits just keep on coming.",
    solved: false
  },
  4: {
    key: 4,
    phrase: "Another day another dollar.",
    solved: false
  },
  5: {
    key: 5,
    phrase: "Gotta play 'em as they lay.",
    solved: false
  },
  6: {
    key: 6,
    phrase: "What goes around comes around.",
    solved: false
  },
  7: {
    key: 7,
    phrase: "If you can't beat 'em, join 'em.",
    solved: false
  },
  8: {
    key: 8,
    phrase: "No flies on you.",
    solved: false
  },
  9: {
    key: 9,
    phrase: "A rolling stone gathers no moss.",
    solved: false
  },
  10: {
    key: 10,
    phrase: "It ain't over 'till the fat lady sings.",
    solved: false
  },
  11: {
    key: 11,
    phrase: "You don't need a patch on your arm to have honor.",
    solved: false
  },
  12: {
    key: 12,
    phrase: "You can't handle the truth.",
    solved: false
  }
};

var mainDiv = document.getElementById('scramble');
var unscrambledAtLeastOne = false;
function init () {
  unscrambledAtLeastOne = false;
  genUnsolved();
  // genUnscrambled();
}
init();

// function genMainHeading () {
//   var heading = document.createElement('h1');
//   heading.innerHTML = "Scramble";
//   mainDiv.appendChild(heading);
// }
//
// function genUnsolvedHeading () {
//   var unsolved = document.createElement('div');
//   var unsolvedHeading = document.createElement('h4');
//   unsolvedHeading.innerHTML = "Scrambled Phrases:";
//   unsolved.setAttribute('id', 'unsolved');
//   unsolved.appendChild(unsolvedHeading);
//   genUnsolved();
// }

function genUnsolved () {
  var unsolvedBox = document.getElementById('unsolvedBox');
  var unsolvedButtons = document.getElementById('unsolvedButtons');
  unsolvedButtons.innerHTML = "";
  for (var i=1; i<Object.keys(data).length+1; i++) {
    if (data[i]['solved']==false) {
      var button = document.createElement('button');
      button.setAttribute('id', 'button'+i);
      button.innerHTML = i;
      button.value = data[i]['phrase'];
      button.onclick = function () { genScrambledPhrase(this.value) };
      unsolvedButtons.appendChild(button);
    }
  unsolvedBox.appendChild(unsolvedButtons);
  }
}

function genScrambledPhrase (phrase,key) {
  var phraseAsList = phrase.split(" ");
  var shuffled = shuffle(phraseAsList);
  var phraseAsScrambledList = shuffled[0];
  var order = shuffled[1];
  genHomes(phraseAsScrambledList, order);
  genSlots(phraseAsList.length);
}

function genHomes(l,o) {
  // var homes = document.createElement('div');
  // var selectedPhrase = document.createElement('div');
  // selectedPhrase.innerHTML = "<b>Selected Scramble:</b>";
  // homes.appendChild(selectedPhrase);
  // homes.setAttribute('id', 'homes');
  var homesBox = document.getElementById('homesBox');
  var homes = document.getElementById('homes');
  homes.innerHTML = "";
  for (var i=0;i<l.length;i++) {
    var home = document.createElement('div');
    home.setAttribute('id', 'home');
    home.setAttribute('class', 'home'+i)
    home.appendChild(genWord(l[i],o[i]));
    home.ondrop = function () { drop(event) };
    home.ondragover = function () { allowDrop(event) };
    homes.appendChild(home);
  }
  homesBox.appendChild(homes);
}

function genWord(w,k) {
  var word = document.createElement('div');
  word.setAttribute('id', 'word'+'-'+w);
  word.setAttribute('draggable', 'true');
  word.setAttribute('data-key', k);
  word.ondragstart = function () { drag(event) };
  word.innerHTML = w;
  return word;
}

function genSlots(n) {
  var slots = document.getElementById('slots');
  slots.innerHTML = "";
  for (var i=0;i<n;i++) {
    var slot = document.createElement('div');
    slot.setAttribute('id', 'slot');
    slot.setAttribute('data-key', i);
    slot.ondrop = function () { drop(event) };
    slot.ondragover = function () { allowDrop(event) };
    slots.appendChild(slot);
  }
  document.getElementById('slotsBox').appendChild(slots);

  // genUnscrambled should be in init, but because i have generate homes and home together,
  // as with slot and slots, it would appear before them, which is not nice
  // a solution would be to separate genHomes and genHome, same with slots.

}

// function genUnscrambled () {
//   // var unscrambled = document.createElement('div');
//   // unscrambled.setAttribute('id','unscrambled');
//   // //  heading
//   // var unscrambledHeading = document.createElement('h4');
//   // unscrambledHeading.innerHTML = "Successfully Unscrambled Phrases:";
//   // unscrambled.appendChild(unscrambledHeading);
//   var unscrambled = document.getElementById('unscrambled');
//   // starting
//   var startingMessage = document.createElement('div');
//   startingMessage.setAttribute('id', 'startingMessage');
//   startingMessage.innerHTML += "You have not unscrambled ANY phrases yet."
//   if (unscrambledAtLeastOne==false) {
//     unscrambled.appendChild(startingMessage);
//   }
//   mainDiv.appendChild(unscrambled);
// }

function checkFinish () {
  var slots = document.getElementById('slots').childNodes;
  var slotCount = 0;
  for (var i=0;i<slots.length;i++) {
    if (slots[i].childNodes.length != 0) {
      slotCount++;
    }
  }
  if (slotCount == slots.length) {
    checkAnswers();
  }
}

function checkAnswers () {
  var slots = document.getElementById('slots').childNodes;
  var correctCount = 0;
  var ans = [];
  for (var i=0;i<slots.length;i++) {
    var wordKey = slots[i].childNodes[0].dataset.key;
    var slotKey = slots[i].dataset.key;
    if (wordKey == slotKey) {
      correctCount++;
      ans.push(slots[i].textContent);
    }
  }
  if (correctCount == slots.length) {
    alert('Good Job');
    var ans_phrase = ans.join(" ");
    for (var i=1;i<Object.keys(data).length+1;i++) {
      if (ans_phrase == data[i]['phrase']) {
        var correctPhraseKey = data[i]['key'];
      }
    }
    success(correctPhraseKey);
  } else {
    alert('Try again');
  }
}

function success(key) {
  // logic
  data[key]['solved'] = true;
  //location
  var unscrambled = document.getElementById('unscrambled');
  // display
  messages.innerHTML = "";
  var phrase = document.createElement('p');
  phrase.innerHTML = data[key]['phrase'];
  unscrambled.appendChild(phrase);
  // reset unsolved
  genUnsolved();


  console.log('The correct phrase has key ', key, 'and phrase', data[key]['phrase']);
}

var scrambledPhrase = document.createElement('div');
var slots = document.createElement('div');
var solved = document.createElement('div');

function genPhrases() {
  for (var i=0;i<Object.keys(data).length;i++) {
    var phrase = document.createElement('p');
    phrase.innerHTML = data[i+1]['phrase'];
    mainDiv.appendChild(phrase);
  }
}

console.log("balls");

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
    phrase: "It ain't over till the fat lady sings.",
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
var heading = document.createElement('h1');
heading.innerHTML = "Phrases";
mainDiv.appendChild(heading);

for (var i=0; i<Object.keys(data).length; i++) {
  var phrase = document.createElement('div');
  phrase.setAttribute('id', 'phrase');
  phrase.innerHTML = data[i+1]['phrase'];
  mainDiv.appendChild(phrase);
}

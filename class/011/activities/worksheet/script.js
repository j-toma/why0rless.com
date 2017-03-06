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
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  checkComplete();
}

var data = {
  1: {
    step: 1,
    content: "Determine the worksheet's purpose, what it will include, and how the information will be organized."
  },
  2: {
    step: 2,
    content: "Enter the data and the formulas into the worksheet."
  },
  3: {
    step: 3,
    content: "Test the worksheet."
  },
  4: {
    step: 4,
    content: "Edit the worksheet to correct any errors and make modifications."
  },
  5: {
    step: 5,
    content: "Document the worksheet."
  },
  6: {
    step: 6,
    content: "Improve the appearance of the worksheet."
  },
  7: {
    step: 7,
    content: "Save and print the completed worksheet."
  }
};

var keys = Object.keys(data);
var homeOrder = shuffle(keys);

var homes = document.getElementById('homes');
function genHomes () {
  // 0 to 6
  for (var i=0; i<keys.length;i++) {
    var home = document.createElement('div');
    home.setAttribute('id', 'home' + (i + 1));
    home.ondrop = function () { drop(event) };
    home.ondragover = function () { allowDrop(event) };
    home.appendChild(genStep(i));
    homes.appendChild(home);
  }
}

var slots = document.getElementById('slots');
function genSlots () {
  // 0 to 6
  for (var i=0; i<keys.length;i++) {
    var slot = document.createElement('div');
    slot.setAttribute('id', 'slot' + (i + 1));
    slot.setAttribute('data-key', i+1);
    slot.innerHTML = i+1;
    slot.ondrop = function () { drop(event) };
    slot.ondragover = function () { allowDrop(event) };
    slots.appendChild(slot);
  }
}

function genStep (i) {
  var step = document.createElement('div');
  step.setAttribute('id', 'step' + data[homeOrder[i]]['step']);
  step.setAttribute('data-key', data[homeOrder[i]]['step']);
  step.setAttribute('draggable', 'true');
  step.ondragstart = function () { drag(event) };
  step.innerHTML = "<p>" + data[homeOrder[i]]['content'] + "</p>";
  return step;
}

function checkFull () {
  if (slots.childNodes.length > 6) {
    checkComplete();
  }
}

function checkComplete () {
  var correctCount = 0;
  for (var i=1; i<keys.length+1;i++) {
    var slot = slots.childNodes[i-1];
    if (slot.childNodes.length > 1) {
      var step = slot.childNodes[1];
      if (slot.dataset.key === step.dataset.key) {
        correctCount += 1;
      }
    }
  }
  if (correctCount == 7) {
    alert("You win!");
    alert("Aren't you happy?")
    history.go(-1);
  }
}

function init () {
  genHomes();
  genSlots();
}

init();

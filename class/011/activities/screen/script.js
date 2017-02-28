var data = {
  1: {
    key: 1,
    label: "Quick Access Toolbar",
    question: "screen1",
    answer: "ascreen1"
  },
  2: {
    key: 2,
    label: "Tab Row",
    question: "screen2",
    answer: "ascreen2"
  },
  3: {
    key: 3,
    label: "Title Bar",
    question: "screen3",
    answer: "ascreen3"
  },
  4: {
    key: 4,
    label: "Minimize, Restore, Close buttons",
    question: "screen4",
    answer: "ascreen4"
  }
}



// var buttonStop = document.getElementById('button-stop');
// buttonStop.onclick = function() {
//    clearInterval(Interval);
// }


// var buttonReset = document.getElementById('button-reset');
// buttonReset.onclick = function() {
//   clearInterval(Interval);
//   minutes = "00";
//   tens = "00";
//   seconds = "00";
//   appendMinutes.innerHTML = minutes;
//   appendTens.innerHTML = tens;
//   appendSeconds.innerHTML = seconds;
// }

var Interval;
var seconds = 00;
var tens = 00;
var minutes = 00;
var hours = 00;

function timer () {
  // var buttonStart = document.getElementById('button-start');
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var appendMinutes = document.getElementById("minutes")
  var appendHours = document.getElementById("hours")
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
  // need to hide start button

  function startTimer () {
    tens++;
    if (tens < 9) {appendTens.innerHTML = "0" + tens;}
    if (tens > 9) {appendTens.innerHTML = tens;}
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {appendSeconds.innerHTML = seconds;}
    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + tens;
    }
    if (minutes > 59) {
      clearInterval(Interval);
      alert("Please take a break!")
    }
  }
}

function shuffle(array) {
  for (var i=array.length-1; i>0; i--) {
    var j = Math.floor(Math.random() * (i+1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function genPic(i) {
  ansPage = false;
  var str = '<img src="img/screen' + i + '.jpg" style="width:100%";>'
  return str
}

var ansPage = false;
function genAnsPic(i) {
  ansPage = true;
  var str = '<img src="img/ascreen' + i + '.jpg" style="width:100%; height=700px;">'
  return str
}

function genLabels () {
  var labelOrder = shuffle(Object.keys(data));
  var labels = document.getElementById('labels');
  for (var i=0;i<labelOrder.length;i++) {
    var label = document.createElement('input');
    label.setAttribute('class', 'button');
    label.setAttribute('type','button');
    var id = 'label' + data[labelOrder[i]]['key'];
    label.setAttribute('id', id);
    label.setAttribute('value', data[labelOrder[i]]['label']);
    label.setAttribute('data-key', data[labelOrder[i]]['key']);
    label.onclick = function () { if (!ansPage) { handleClick(this) } else { } };
    labels.appendChild(label);
  }
}

var wrong_answer_count = 0;
function handleClick(input) {
  if (input.dataset.key === current) {
    document.getElementById('pictureContainer').innerHTML = genAnsPic(input.dataset.key);
    clearInterval(Interval);
    // alert('donkey  balls');
    // next();
    document.getElementById('label'+input.dataset.key).style.visibility = "hidden";
    document.getElementById('button-continue').style.visibility = "visible";
  }
  else {
    wrong_answer_count++;
    if (wrong_answer_count === 10) {
      alert('You seem to be having trouble. Please check page 6 of your book.');
    }
    else if (wrong_answer_count === 20) {
      alert('Are you just guessing?');
    }
    else if (wrong_answer_count === 30) {
      alert("Isn't your finger getting tired of randomly clicking? Go study!");
    }
    else if (wrong_answer_count === 40) {
      alert("You have clicked incorrectly over 40 times. This could be a new record.")
    }
    else if (wrong_answer_count > 50) {
      alert("I suggest you refresh the page.")
    }
  }
}

var picOrder = shuffle(Object.keys(data));
var current = picOrder[-1];
function game () {
  document.getElementById('button-start').style.visibility = "hidden";
  timer();
  genLabels();
  next();
}

function next () {
  if (picOrder.length > 0) {
    current = picOrder.pop();
    timer();
    document.getElementById('pictureContainer').innerHTML = genPic(current);
    document.getElementById('button-continue').style.visibility = "hidden";
  }
  else {
    var s = "<p>You win! You did it in " + minutes + " minutes " + "and " + seconds + " seconds.</p>";
    var t = "<p>You clicked incorrectly " + wrong_answer_count + " times.</p>";
    document.getElementById('pictureContainer').innerHTML = s + t;
    document.getElementById('button-continue').setAttribute('value', 'resart');
    document.getElementById('button-continue').onclick = function () { location.reload()};
  }
}

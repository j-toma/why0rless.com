var data = {
  1: {
    label: "Ribbon",
    question: "screen1",
    answer: "ascreen1"
  },
  2: {
    label: "Tab Row",
    question: "screen2",
    answer: "ascreen2"
  },
  3: {
    label: "Title Bar",
    question: "screen3",
    answer: "ascreen3"
  },
  4: {
    label: "Minimize, Restore, Close buttons",
    question: "screen4",
    answer: "ascreen4"
  }
}

window.onload = function () {

  var seconds = 00;
  var tens = 00;
  var minutes = 00;
  var hours = 00;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var appendMinutes = document.getElementById("minutes")
  var appendHours = document.getElementById("hours")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {
     clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  buttonStop.onclick = function() {
     clearInterval(Interval);
  }
  buttonReset.onclick = function() {
    clearInterval(Interval);
    minutes = "00";
    tens = "00";
  	seconds = "00";
    appendMinutes.innerHTML = minutes;
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }

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

function genPicOrder() {
  var picOrder = shuffle(Object.keys(data));
  console.log(picOrder);
}

function genPic(i) {
  var div = document.getElementById('pictureContainer');
  div.innerHTML = '<img src="img/screen' + i + '.jpg" style="width:1000px; height=700px;">'
}

function genAnsPic(i) {
  var div = document.getElementById('pictureContainer');
  div.innerHTML = '<img src="img/screen' + i + '.jpg" style="width:1000px; height=700px;">'
}

function genList () {

}

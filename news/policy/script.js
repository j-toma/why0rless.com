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
  checkFinish();
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

function openArticle(evt, article, source) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tabsource" and hide them
    tabsource = document.getElementsByClassName("tabsource");
    for (i = 0; i < tabsource.length; i++) {
        tabsource[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab

    document.getElementById(source).style.display = "block";
    evt.currentTarget.className += " active";

    removeWords(article);
}

function removeWords (article) {
  // create a DOM element to replace one with class 'article-text' inside class 'article'
  var newText = document.createElement("div");
  newText.id = article+'Text';
  newText.setAttribute('class', 'article-text')

  // var removedWords = document.createElement("div")
  var removedWordsList = [];

  // get current
  var textString = article+'Text';
  var oldText = document.getElementById(textString);
  var oldParagraphs = oldText.getElementsByTagName('p');
  for (var i=0;i<oldParagraphs.length;i++) {
    // isolate word to be replaced with a blank and split the sentence
    var oldParagraph = oldParagraphs[i];
    var oldWordList = oldParagraph.textContent.split(" ");
    var randomWord = oldWordList[Math.floor(oldWordList.length*Math.random())]
    var randWordIndex = oldWordList.indexOf(randomWord);
    var firstHalf = oldWordList.slice(0,randWordIndex);
    var secondHalf = oldWordList.slice(randWordIndex+1);

    // create DOM element for paragraph
    var newParagraph = document.createElement('p');
    // paragraph start
    var pStart = document.createElement('span');
    pStart.innerHTML = firstHalf.join(" ") + " ";
    newParagraph.appendChild(pStart);
    // each p will use the same blank
    var blank = document.createElement('span');
    blank.setAttribute('id','blank'+i);
    blank.setAttribute('data-key', i);
    blank.setAttribute('class','blank');
    blank.ondrop = function () { drop(event) };
    blank.ondragover = function () { allowDrop(event) };
    // blank.innerHTML = "_______";
    newParagraph.appendChild(blank);
    // paragraph end
    var pEnd = document.createElement('span');
    pEnd.innerHTML = " " + secondHalf.join(" ");
    newParagraph.appendChild(pEnd);
    // add to newText
    newText.appendChild(newParagraph);

    // add replaced word to removedWords
    var removedWord = document.createElement('span');
    removedWord.setAttribute('id', 'removedWord'+i);
    removedWord.setAttribute('class', 'removedWord');
    removedWord.setAttribute('data-key', i);
    removedWord.setAttribute('draggable', 'true');
    removedWord.ondragstart = function () { drag(event) };
    removedWord.innerHTML = randomWord;
    // removedWords.appendChild(removedWord);
    removedWordsList.push(removedWord);
  }

  // replace old text
  var actionDiv = oldText.parentNode;
  actionDiv.replaceChild(newText,oldText);

  // make DOM element for word bank
  var wordBank = document.getElementById("wordBank");
  if (wordBank != null) {
    while (wordBank.firstChild) {
      wordBank.removeChild(wordBank.firstChild)
    }
  } else {
    var wordBank = document.createElement('div');
    wordBank.id = "wordBank";
    wordBank.setAttribute('class', 'wordBank');
  }

  // shuffle removed words
  var shuffledRemovedWords = shuffle(removedWordsList);
  for (var i=0;i<shuffledRemovedWords.length;i++) {
    // create homes
    var home = document.createElement('div');
    home.setAttribute('class', 'home');
    home.setAttribute('id', 'home' + (i + 1));
    home.ondrop = function () { drop(event) };
    home.ondragover = function () { allowDrop(event) };
    // fill with removedWords
    home.appendChild(shuffledRemovedWords[i]);
    // add to wordBank
    wordBank.appendChild(home);
  }
  // add wordbank before text
  actionDiv.insertBefore(wordBank,newText);


  // display
  document.getElementById(article).style.display = "block";
}

function checkFinish () {
  var bank = document.getElementById('wordBank').childNodes;
  var bankCount = bank.length;
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
  var answers = document.getElementsByClassName('blank');
  for (var i=0;i<answers.length;i++) {
    var sentenceKey = answers[i].dataset.key;
    var answerKey = answers[i].childNodes[0].dataset.key;
    if (sentenceKey === answerKey) {
      answers[i].style.color = 'green';
      correctCount++
    } else {
      restore(answers[i].childNodes[0]);
      // answers[i].removeChild(answers[i].childNodes[0]);
    }
  }
}

function restore (word) {
  var homes = document.getElementsByClassName('home');
  for (var i=0; i<homes.length;i++) {
      console.log(homes[i])
    if (homes[i].childNodes.length == 0) {
      homes[i].appendChild(word);
      break;
    }
  }
}































// Some bullshit

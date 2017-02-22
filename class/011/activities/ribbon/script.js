var data = [
  {
    key: 1,
    concept: 'File',
    explanation: 'Save, Save As, Close, Info, Recent, New, Print, Save & Send, Help, Add-Ins, Exit'
  },
  {
    key: 2,
    concept: 'Home',
    explanation: 'Clipboard, Font, Alignment, Number, Styles, Cells, Editing'
  },
  {
    key: 3,
    concept: 'Insert',
    explanation: 'Table, Illustrations, Charts, Sparklines, Filter, Links, Text, Symbols'
  },
  {
    key: 4,
    concept: 'Page Layout',
    explanation: 'Themes, Page Setup, Scale to Fit, Sheet Options, Arrange'
  },
  {
    key: 5,
    concept: 'Formulas',
    explanation: 'Function Library, Defined Names, Formula Auditing, Calculation'
  },
  {
    key: 6,
    concept: 'Data',
    explanation: 'Get External Data, Connections, Sort & Filter, Data Tools, Outline'
  },
  {
    key: 7,
    concept: 'Review',
    explanation: 'Proofing, Language, Comments, Changes'
  },
  {
    key: 8,
    concept: 'View',
    explanation: 'Workbook Views, Show, Zoom, Window, Macros'
  }
];

function addTable() {
  var startButton = document.getElementById('create');
  startButton.style.display = 'none';

  var tableDiv = document.getElementById("basicVocab")
  var table = document.createElement('TABLE')
  var tableBody = document.createElement('TBODY')

  table.border = '1'
  table.appendChild(tableBody);

  //heading
  var heading = ['Concept','Explanantion'];
  var tr = document.createElement('TR');
  tableBody.appendChild(tr);
  for (i=0;i<heading.length; i++) {
    var th = document.createElement('TH')
    th.width = '150';
    th.appendChild(document.createTextNode(heading[i]));
    tr.appendChild(th);
  }

  //create random order
  var conceptPlace = [];
  var explanationPlace = [];
  for (var i=0; i<data.length; i++) {
    conceptPlace.push(i);
    explanationPlace.push(i);
  }
  conceptPlace.sort(function() {return Math.random()-0.5});
  explanationPlace.sort(function() {return Math.random()-0.5});

// create the table
  for (var i=0; i<data.length; i++) {
    var tr = document.createElement('TR');

    // the concepts
    var tdC = document.createElement('TD');
    var conceptDiv = document.createElement('div');
    conceptDiv.setAttribute('id', 'conceptDiv');
    conceptDiv.setAttribute('data-key', data[conceptPlace[i]]['key']);
    conceptDiv.onclick = function() { handleClick(this) };
    conceptDiv.innerHTML = conceptDiv.innerHTML + data[conceptPlace[i]]['concept'];
    tdC.appendChild(conceptDiv);
    tr.appendChild(tdC);

    // the explanations
    var tdE = document.createElement('TD');
    var explanationDiv = document.createElement('div');
    explanationDiv.setAttribute('id', 'explanationDiv');
    explanationDiv.setAttribute('data-key', data[explanationPlace[i]]['key']);
    explanationDiv.onclick = function() { handleClick(this) };
    explanationDiv.innerHTML = explanationDiv.innerHTML + data[explanationPlace[i]]['explanation'];
    tdE.appendChild(explanationDiv);
    tr.appendChild(tdE);

    tableBody.appendChild(tr);
  }
  tableDiv.appendChild(table);
}

// deal with clicks
var clicked = [];
function handleClick(div) {
  if (clicked.length < 2) {
    div.style.color = 'gray';
    clicked.push(div)
  }
  if (clicked.length === 2) {
    testMatch(clicked[0],clicked[1]);
  }
  // console.log(clicked);
}

// check if click on matching
function testMatch(div1,div2) {
  if (div1.dataset.key === div2.dataset.key) {
    div1.style.color = 'green';
    div2.style.color = 'green';
    var ul = document.getElementById('correct');
    // this is a big weakness (it relies on the order of the data rather than properly using the key)
    // var key = div1.dataset.key;
    // try a for loop (probably slow?)
    for (var i=0; i<data.length;i++) {
      if (data[i].key == div1.dataset.key) {
        ul.innerHTML = ul.innerHTML + '<li>' + data[i]['concept'] + ' --> ' + data[i]['explanation'] + '.</li>';
      }
    }
    // ul.innerHTML = ul.innerHTML + '<li>' + data[key-1]['concept'] + ' ' + data[key-1]['explanation'] + '.</li>'
  } else {
    // reset shading if no match
    div1.style.color = 'black';
    div2.style.color = 'black';
  }
  // reset click memory
  clicked = [];
}

var correctCards = 0;
$(init);

var data = [
  {
    key: 1,
    role: 'Coach',
    shortDesc: 'maintain harmony',
    longDesc: "They build rapport with team members and ensure that each member is valued for their contributions. Their role involves motivating others and creating a positive atmosphere. They seek to overcome differences so that the team can work collaboratively and effectively together."
  },
  {
    key: 2,
    role: 'Explorer',
    shortDesc: 'discover new',
    longDesc: "They are forward-looking and seek to improve the status quo by discovering new ways of achieving a better outcome for the future of the organisation. They attention is directed to beneficial change and uncovering valuable hidden potential in people, siuations and things."
  },
  {
    key: 3,
    role: 'Scultpor',
    shortDesc: 'clarify understanding',
    longDesc: 'They ensure that a clear picture and understanding of the specific team task is achieved so as to attain their goals effectively with a view to future expansion.'
  },
  {
    key: 4,
    role: 'Conductor',
    shortDesc: 'plan and organise',
    longDesc: "They identify appropriate team roles, responsibilities, skills and resources for the assigned task. Once appropriate plans and procedures are established, they ensure that they are followed accordingly."
  },
  {
    key: 5,
    role: 'Crusader',
    shortDesc: 'take action',
    longDesc: "They are action-oriented and aim to maintain the team's sense of urgency. They use their personal experience and knowledge to assess the team tasks and ensure that they are completed efficiently."
  },
  {
    key: 6,
    role: 'Curator',
    shortDesc: 'evaluate and emphasize',
    longDesc: "They evaluate the ideas and suggestions offered by team mebers and emphasize those ideas, suggestions and thoughts that are important and significant for the team's purpose and ultimate goal. They are drive by values and inner convictions."
  },
  {
    key: 7,
    role: 'Scientist',
    shortDesc: 'analyse and explain',
    longDesc: "They formulate hypotheses and gather evidence to support the explanations provided. They help conceptualise ideas to enable a clear understanding of solutions."
  },
  {
    key: 8,
    role: 'Innovator',
    shortDesc: 'create ideas',
    longDesc: "They create fresh ideas and insights based on their imaginations and observations of the world around them. They provide unique solutions to issues and generate long-term vision."
  }
];

function init() {

  // hide success message
  $('#successShort').hide();
  $('#successShort').css({
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  });

  $('#successLong').hide();
  $('#successLong').css({
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  });

  $('#longDescSlot').hide();


  // reset game
  correctCards = 0;
  $('#cardPile').html('');
  $('#shortDescSlot').html('');
  $('#longDescSlot').html('');

  // create the pile of shuffled cards
  // var roles = ['1. Coach','2. Explorer','3. Scultpor','4. Conductor','5. Crusader','6. Scientist','7. Curator','8. Innovator'];
  // var numRole = [1,2,3,4,5,6,7,8];
  // var numLongDesc = [1,2,3,4,5,6,7,8];
  // var numShortDesc = [1,2,3,4,5,6,7,8];
  // var roles = {
  //   1: 'Coach', 2: 'Explorer', 3: 'Scultpor', 4: 'Conductor', 5: 'Crusader', 6: 'Curator', 7: 'Scientist', 8: 'Innovator'
  // };
  // var longDescription = {
  //   7: 'analyse and organise things and attempt to provide an explanation of how they work',
  //   8: 'create fresh ideas and insights based on their imaginations and observations of the world around them',
  //   6: 'evaluate the ideas and suggestions offered by team members and emphasize on those ideas, suggestions and thoughts that are important and significant to the team',
  //   5: "action-oriented and aim to maintain the team's sense of urgency",
  //   3: 'focus on details, clarity and vision',
  //   1: 'maintain harmony within the team, build rapport with the team members and ensure that each member is valued for their contribution',
  //   4: 'plan and orgainse team tasks, ensure procedure is followed',
  //   2: 'look forward and seek to improve the status quo by discovering new ways of achieving a better outcome for the future of the organisation'
  // };
  // var shortDescription = {
  //   1: ''
  //
  // };


  // var order1 = numbers.sort(function() {return Math.random() - 0.5});
  // var order2 = order1.sort(function() {return Math.random() * 0.5});
  // var numProps = [2];
  var numRole = [1,2,3,4,5,6,7,8];
  var numLongDesc = [1,2,3,4,5,6,7,8];
  var numShortDesc = [1,2,3,4,5,6,7,8];
  numRole.sort(function() {return Math.random()-0.5});
  numLongDesc.sort(function() {return Math.random()-0.5});
  numShortDesc.sort(function() {return Math.random()-0.5});
  // roles.sort(function() {return Math.random() - 0.5});
  // var words = ['one','two','three','four','five','six','seven','eight'];
  for (var i=0; i<8; i++) {
  // $('<div>' + numDict[numbers[i]] + '</div>').data('number', numbers[i]).attr('id', 'card'+numbers[i]).appendTo('#cardPile').draggable({
  //   $('<div>' + numbers[i] + '</div>').data('number', numbers[i]).attr('id', 'card'+numbers[i]).appendTo('#cardPile').draggable({
  //     containment: '#content',
  //     stack: '#cardPile div',
  //     cursor: 'move',
  //     revert: true
  //   });
  //   $('<div>' + words[i] + '</div>').data('number',i+1).appendTo('#cardSlots').droppable({
  //     accept: '#cardPile div',
  //     hoverClass: 'hovered',
  //     drop: handleCardDrop
  //   });
  // }
    // $('<div>' + data[numRole[i]-1]['role']+ "'s House" + '</div>').attr('id', 'pile'+numRole[i+1]).appendTo('#cardPiles');
    // for (var j=0; j<numProps; j++) {
    //   $('<div>' + data[numRole[i]-1]['role'] + '</div>').attr('id', 'card' + j).appendTo('#' + data[numRole[i]-1]['role']).draggable({
    //       containment: '#content',
    //       stack: '#cardPiles div',
    //       cursor: 'move',
    //       revert: true
    //     });
      // }
    $('<div>' + data[numRole[i]-1]['role'] + '</div>').data('number', numRole[i]).attr('id', 'card'+data[numRole[i]-1]['key']).appendTo('#cardPile').draggable({
      containment: '#content',
      // start: function(event, ui) { $(this).css('z-index", a++'); }
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    });
    $('<div>' + data[numShortDesc[i]-1]['shortDesc'] + '</div>').data('number', numShortDesc[i]).appendTo('#shortDescSlot').droppable({
        accept: '#cardPile div',
        hoverClass: 'hovered',
        drop: handleDropShort
    });
    $('<div>' + data[numLongDesc[i]-1]['longDesc'] + '</div>').data('number', numLongDesc[i]).appendTo('#longDescSlot').droppable({
        accept: '#cardPile div',
        hoverClass: 'hovered',
        drop: handleDropLong
    });
  }
}

//   $('<div>' + roles[numRole[i]] + '</div>').data('number', numRole[i]).attr('id', 'card'+numRole[i]).appendTo('#cardPile').draggable({
//     containment: '#content',
//     start: function(event, ui) { $(this).css('z-index", a++'); }
//     stack: '#cardPile div',
//     cursor: 'move',
//     revert: true
//   });
//
//   $('<div>' + longDescription[numLongDesc[i]] + '</div>').data('number',numLongDesc[i]).appendTo('#cardSlots').droppable({
//     accept: '#cardPile div',
//     hoverClass: 'hovered',
//     drop: handleCardDrop
//   });
// }
  // for (var i=0; i<8; i++) {
  //   $('<div>' + roles[i] + '</div>').data('number', i).attr('id', 'card'+roles[i]).appendTo('#cardPile').draggable({
  //     containment: '#content',
  //     stack: '#cardPile div',
  //     cursor: 'move',
  //     revert: true
  //   });
  // }

  // Create the card slots
  // var words = ['one','two','three','four','five','six','seven','eight'];
  // var defDictName = {
  //   'Scientist': 'analyse and organise things and attempt to provide an explanation of how they work',
  //   'Innovator': 'create fresh ideas and insights based on their imaginations and observations of the world around them',
  //   'Curator': 'evaluate the ideas and suggestions offered by team members and emphasize on those ideas, suggestions and thoughts that are important and significant to the team',
  //   'Crusader': "action-oriented and aim to maintain the team's sense of urgency",
  //   'Scultpor': 'focus on details, clarity and vision',
  //   'Coach': 'maintain harmony within the team, build rapport with the team members and ensure that each member is valued for their contribution',
  //   'Conductor': 'plan and orgainse team tasks, ensure procedure is followed',
  //   'Explorer': 'look forward and seek to improve the status quo by discovering new ways of achieving a better outcome for the future of the organisation'
  // };
  // var defDictNum = {
  //   7: 'analyse and organise things and attempt to provide an explanation of how they work',
  //   8: 'create fresh ideas and insights based on their imaginations and observations of the world around them',
  //   6: 'evaluate the ideas and suggestions offered by team members and emphasize on those ideas, suggestions and thoughts that are important and significant to the team',
  //   5: "action-oriented and aim to maintain the team's sense of urgency",
  //   3: 'focus on details, clarity and vision',
  //   1: 'maintain harmony within the team, build rapport with the team members and ensure that each member is valued for their contribution',
  //   4: 'plan and orgainse team tasks, ensure procedure is followed',
  //   2: 'look forward and seek to improve the status quo by discovering new ways of achieving a better outcome for the future of the organisation'
  // };
  // var answerKey = {
  //   7: 'Scientist',
  //   8: 'Innovator',
  //   6: 'Curator',
  //   5: "Crusader",
  //   3: 'Scultpor',
  //   1: 'Coach',
  //   4: 'Conductor',
  //   2: 'Explorer'
  // };
  // for (var i=1;i<=8;i++) {
  //   $('<div>' + words[i-1] + '</div>').data('number',i).appendTo('#cardSlots').droppable({
  //     accept: '#cardPile div',
  //     hoverClass: 'hovered',
  //     drop: handleCardDrop
  //   });
  // }




function handleDropShort(event,ui) {

  var slotNumber = $(this).data('number');
  // console.log('slotNumber: ', slotNumber);
  var cardNumber = ui.draggable.data('number');
  // console.log('cardNumber: ', cardNumber);


  // If the card was dropped in the correct slot,
  // change the card color, position it directly
  // on top of the slot, and prevent it from moving

  if (slotNumber==cardNumber) {
    ui.draggable.addClass('correct');
    ui.draggable.draggable('disable');
    $(this).droppable('disable');
    ui.draggable.position({of: $(this), my:'left top', at:'left top'});
    ui.draggable.draggable('option','revert',false);
    correctCards++;
  }

  // if (slotNumber!=cardNumber) {
  //   // ui.draggable.addClass('correct');
  //   // ui.draggable.draggable('disable');
  //   // $(this).droppable('disable');
  //   ui.draggable.position({of: $(this), my:'left top', at:'left top'});
  //   ui.draggable.draggable('option','revert',false)
  // }

  // If all cards correct, display message and reset
  if (correctCards == 8) {
    $('#successShort').show();
    $('#successShort').animate({
      left: '380px',
      top: '200px',
      width: '400px',
      height: '100px',
      opacity: 1
    });
  }
}

function short2Long(event,ui) {
  correctCards = 0;
  $('#cardPile').html('');
  var numRole = [1,2,3,4,5,6,7,8];
  numRole.sort(function() {return Math.random()-0.5});
  for (var i=0; i<8; i++) {
    $('<div>' + data[numRole[i]-1]['role'] + '</div>').data('number', numRole[i]).attr('id', 'card'+numRole[i]).appendTo('#cardPile').draggable({
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    });
  }
  $('#shortDescSlot').hide();
  $('#successShort').hide();
  $('#longDescSlot').show();
}

function handleDropLong(event,ui) {

  var slotNumber = $(this).data('number');
  console.log('slotNumber: ', slotNumber);
  var cardNumber = ui.draggable.data('number');
  console.log('cardNumber: ', cardNumber);


  // If the card was dropped in the correct slot,
  // change the card color, position it directly
  // on top of the slot, and prevent it from moving

  if (slotNumber==cardNumber) {
    ui.draggable.addClass('correct');
    ui.draggable.draggable('disable');
    $(this).droppable('disable');
    ui.draggable.position({of: $(this), my:'left top', at:'left top'});
    ui.draggable.draggable('option','revert',false);
    correctCards++;
  }

  // if (slotNumber!=cardNumber) {
  //   // ui.draggable.addClass('correct');
  //   // ui.draggable.draggable('disable');
  //   // $(this).droppable('disable');
  //   ui.draggable.position({of: $(this), my:'left top', at:'left top'});
  //   ui.draggable.draggable('option','revert',false)
  // }

  // If all cards correct, display message and reset
  if (correctCards == 8) {
    $('#successLong').show();
    $('#successLong').animate({
      left: '380px',
      top: '200px',
      width: '400px',
      height: '100px',
      opacity: 1
    });
  }
}

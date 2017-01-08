var correctCards = 0;
$( init );

function init() {

  // hide success message
  $('#successMessage').hide();
  $('#successMessage').css({
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  });

  // reset game
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  // create the pile of shuffled cards
  var numbers = [1,2,3,4,5,6,7,8,9,10];
  numbers.sort(function() {return Math.,random() - 0.5});

  for (var i=0; i<10; i++) {
    $('<div>' + numbers[i] + '</div>').data('number', numbers[i]).attr('id', 'card'+numbers[i]).appendTo('#cardPile').draggable({
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    });
  }

  // Create the card slots
  var words = ['one','two','three','four','five','six','seven','eight','nine','ten'];
  for (var i=1;i<=10;i++) {
    $('<div>' + words[i-1] + '</div>').data('number',i).appendTo('#cardSlots').droppable({
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    });
  }
}

function handleCardDrop(event,ui) {
  var slotNumber = $(this).data('number');
  var cardNumber = ui.draggable.data('number');

  // If the card was dropped in the correct slot,
  // change the card solour, position it directly
  // on top of the slot, and prevent it from moving

  if (slotNumber==cardNumber) {
    ui.draggable.addClass('correct');
    ui.draggable.draggable('disable');
    $(this).droppable('disable');
    ui.draggable.position({of: $(this), my:'left top', at:'left top'});
    ui.draggable.draggable('option','revert',false);
    correctCards++;
  }

  // If all cards correct, display message and reset
  if (correctCards == 10) {
    $('successMessage').show();
    $('successMessage').animate({
      left: '380px',
      top: '200px',
      width: '400px',
      height: '100px',
      opacity: 1
    });
  }
}

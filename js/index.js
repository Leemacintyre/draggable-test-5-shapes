bgcolor = '#f1a899'
droppedBg = '#BC6C25'
let count = 0
const button = $('#button')

function checkActive() {
  if (count === 5) {
    $(button).addClass('active')
  }
}

$('.star-container').draggable();

$('.p_star-container').droppable({
  
  accept: '.star-container, .square-container, .circle-container, .pentagon-container, .pac-man-container',
  
  drop: function (event, ui) {
    $('.p_star-container').css('background-color', droppedBg).droppable('option', 'disabled', true)
    $(ui.draggable).draggable('option', 'disabled', true)
    count++
    checkActive();
  },
});


$('.square-container').draggable();

$('.p_square-container').droppable({
  accept: '.star-container, .square-container, .circle-container, .pentagon-container, .pac-man-container',
  
  drop: function (event, ui) {
    $('.p_square-container').css('background-color', droppedBg).droppable('option', 'disabled', true)
    $(ui.draggable).draggable('option', 'disabled', true)
    count++
    checkActive();
  },
})


$('.circle-container').draggable();
$('.p_circle-container').droppable({
  accept: '.star-container, .square-container, .circle-container, .pentagon-container, .pac-man-container',
  
  drop: function (event, ui) {
    $('.p_circle-container').css('background-color', droppedBg).droppable('option', 'disabled', true)
    $(ui.draggable).draggable('option', 'disabled', true)
    count++
    checkActive();
  },
});


$('.pentagon-container').draggable();
$('.p_pentagon-container').droppable({
  accept: '.star-container, .square-container, .circle-container, .pentagon-container, .pac-man-container',
  
  drop: function (event, ui) {
    $('.p_pentagon-container').css('background-color', droppedBg).droppable('option', 'disabled', true)
    $(ui.draggable).draggable('option', 'disabled', true)
    count++
    checkActive();
  },
});


$('.pac-man-container').draggable();
$('.p_pac-man-container').droppable({
  accept: '.star-container, .square-container, .circle-container, .pentagon-container, .pac-man-container',
  
  drop: function (event, ui) {
    $('.p_pac-man-container').css('background-color', droppedBg).droppable('option', 'disabled', true)
    $(ui.draggable).draggable('option', 'disabled', true)
    count++
    checkActive();
  },
});

$(button).click(function () {
  setTimeout(function () {
    $('.star-container').animate({
      top: 345, left: -27
    });
    $('.square-container').animate({
      top: 345, left: -11
    });
    $('.circle-container').animate({
      top: 345, left: 5
    });
    $('.pentagon-container').animate({
      top: 345, left: 26
    });
    $('.pac-man-container').animate({
      top: 345, left: 37
    });
  }, 2000);
  
  
});


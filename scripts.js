$(document).ready(main);
$('#drawer-toggle').on('click', toggleDrawer)

function toggleDrawer() {
  $('#drawer').slideToggle('fast')
}

var main = function() {
  $('#drawer-toggle').click(function() {
    $('#drawer-toggle-label').animate({
      left: "200px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  $('#drawer-toggle').click(function() {
    $('#drawer-toggle-label').animate({
      left: "4px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });
};

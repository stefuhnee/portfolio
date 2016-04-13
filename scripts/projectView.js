var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', 'li', function() {
    $('section.tab-content').hide();
    var $clickedSection = $(this).attr('data-content');
    $('#' + $clickedSection).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

projectView.setTeasers = function() {
  var $extraParagraphs = $('.project-body *:nth-of-type(n+2)');
  $extraParagraphs.hide();
  $('a.read-less').hide();
  $('a.read-on').on('click', function(e) {
    e.preventDefault();
    $(this).prev().children().fadeIn();
    $(this).hide();
    $(this).next().show();
  });
  $('a.read-less').on('click', function(e) {
    e.preventDefault();
    $extraParagraphs.fadeOut();
    $(this).prev().show();
    $(this).hide();
  });
};

$(document).ready(function() {
  projectView.handleMainNav();
  projectView.setTeasers();
});

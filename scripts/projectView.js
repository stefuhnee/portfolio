var projectView = {};

projectView.handleCategoryFilter = function() {
  $('.filters ul').on('click', 'li', function(e) {
    e.preventDefault();
    $('.article-box').hide();
    $('article[data-category="' + $(this).text() + '"]').show();
  });
};

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

projectView.handleFilterNav = function() {
  $('.filters').hide();
  $('.filter-heading').on('click', function() {
    $(this).hide();
    $('.filters').slideToggle();
    $('.filter-exit').on('click', function() {
      $('.filters').slideToggle();
    });
  });
};

$(document).ready(function() {
  projectView.handleCategoryFilter();
  projectView.handleMainNav();
  projectView.setTeasers();
  projectView.handleFilterNav();
});

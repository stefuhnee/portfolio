var projectView = {};

projectView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function(e) {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').show();
    } else {
      $('article').show();
      $('article.template').hide();
    }
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

$(document).ready(function() {
  projectView.handleCategoryFilter();
  projectView.handleMainNav();
  projectView.setTeasers();
});

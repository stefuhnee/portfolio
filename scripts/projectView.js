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
    console.log($(this).text());
    if ($(this).text() === 'About') {
      $('#main-header h1').hide();
      $('#main-header').height('auto');
    } else {
      $('#main-header h1').show();
      $('#main-header').height('auto');
    }
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
    $('.filters').slideToggle('slow');
  });
  $('.filter-exit').on('click', function() {
    $('.filters').slideToggle('fast');
    $('.filter-heading').fadeIn('slow');
    $('.article-box').show();
  });
};

projectView.handleOverlay = function() {
  $('.article-box ul').on('click', '.preview', function(event) {
    event.preventDefault();
    $('.overlay').addClass('active-overlay');
    $('.overlay img').show();
    var $imgSrc = $(this).data('img-src');
    $('.overlay img').attr('src', $imgSrc);
    $('.overlay').on('click', function() {
      $(this).removeClass('active-overlay');
      $('.overlay img').hide();
    });
  });
};

projectView.imageHover = function() {
  $('#about-img-container img').on('mouseover', function() {
    console.log('hover');
    $(this).attr('src', 'img/profile-color.png');
  });
  $('#about-img-container img').on('mouseout', function() {
    console.log('hover');
    $(this).attr('src', 'img/profile.png');
  });
};


projectView.initIndexPage = function() {
  Project.all.forEach(function(a){
    $('#projects').append(a.toHTML('#project-template'));
    if (categories.indexOf(a.category)) {
      $('.filters ul').append(a.toHTML('#category-filter-template'));
      categories.push(a.category);
    };
  });
};


$(document).ready(function() {
  projectView.handleCategoryFilter();
  projectView.handleMainNav();
  projectView.setTeasers();
  projectView.handleFilterNav();
  projectView.handleOverlay();
  projectView.imageHover();
});

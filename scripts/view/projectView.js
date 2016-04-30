(function(module) {
  var projectView = {};

  projectView.handleCategoryFilter = function() {
    $('.filters ul').on('click', 'li', function() {
      $('.article-box').hide();
      page('/category/' + $(this).text().replace(/\W+/g, '+'));
    });
  };

  projectView.displayCategories = function(category) {
    $('article[data-category="' + category + '"]').show();
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
    $('.filters-list').hide();
    $('.filters-heading').on('click', function() {
      $(this).hide();
      $('.filters-list').slideDown('slow');
    });
    $('.filters-exit').on('click', function() {
      $('.filters-list').hide();
      $('.filters-heading').fadeIn('slow');
      $('.article-box').show();
    });
  };

  projectView.handleOverlay = function() {
    $('.article-box ul').on('click', '.preview', function(event) {
      event.preventDefault();
      $('.overlay').addClass('active-overlay');
      var $imgSrc = $(this).data('img-src');
      $('.active-overlay img').attr('src', $imgSrc);
      $('.active-overlay img').show();
      $('.active-overlay').on('click', function() {
        $(this).removeClass('active-overlay');
        $('.overlay img').hide();
      });
    });
  };

  projectView.imageHover = function() {
    $('#about-img-container img').on('mouseover', function() {
      $(this).attr('src', 'img/profile-color.png');
    });
    $('#about-img-container img').on('mouseout', function() {
      $(this).attr('src', 'img/profile.png');
    });
  };


  projectView.initIndexPage = function() {
    var categories = [];
    Project.all.forEach(function(a){
      $('#projects').append(a.toHTML('#project-template'));
      if (categories.indexOf(a.category)) {
        $('.filters ul').append(a.toHTML('#category-filter-template'));
        categories.push(a.category);
      };
    });
    projectView.handleCategoryFilter();
    projectView.setTeasers();
    projectView.handleFilterNav();
    projectView.handleOverlay();
    projectView.imageHover();
  };

  module.projectView = projectView;

})(window);

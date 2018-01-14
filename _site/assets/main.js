(function(global) {
  // when card is hovered
  onResize();
  $('.card').hover(onCardHover, onCardHover);
  $('.skills li').hover(onSkillsHover, onSkillsHover);
  $('.experience-type h2').hover(onTypeHover, onTypeHover);
  $(window).scroll(onScroll);
  $(window).resize(onResize);

  // Add the sticky class when you leave the scroll position
  function onScroll() {
    if ($('.experience').position().top + $('.experience').height() <= $(window).scrollTop() + $('.experience-type').height() + 15) {
      $('.experience-type').css('position', 'absolute');
      $('.experience-type').css('top', `${ $('.experience').position().top + $('.experience').height() - $('.experience-type').height() + 15 }px`);
    }

    else if ($(window).scrollTop() >= $('.experience').position().top - 30) {
      $('.experience-type').css('position', 'fixed');
      $('.experience-type').css('top', '30px');
    }

    else {
      $('.experience-type').css('position', 'absolute');
      $('.experience-type').css('top', $('.experience').position().top);
      $('.experience-type').css('left', `${$('.experience').position().left}px`);
    }
  }

  function onResize() {
    $('.experience-type').css('position', 'absolute');
    $('.experience-type').css('top', $('.experience').position().top);
    $('.experience-type').css('left', `${$('.experience').position().left}px`);
    onScroll();
  }

  function onCardHover() {
    var $elem = $(this);
    var skills = Object.keys($elem.data()).filter((attribute) => attribute.startsWith("skill")).map(el => el.toLowerCase().slice(5));
    highlightSkills(skills);
    highlightType($elem.data('type'));
  }

  function onSkillsHover() {
    var $elem = $(this);
    highlightCards($elem.data('skill'));
  }

  function onTypeHover() {
    var $elem = $(this);
    $(`.card[data-type=${$elem.text()}]`).toggleClass('feature');
    $('.card').not(`[data-type=${$elem.text()}]`).toggleClass('subdued');
    highlightType($elem.text());
  }

  function highlightSkills(skills) {
    for (skill of skills) {
      $(`[data-skill=${skill}]`).toggleClass('hilited');
    }
  }

  function highlightType(type) {
    $(`.experience-type h2:contains(${type})`).toggleClass('subdued');
    $('.experience-type h2.active').toggleClass('subdued');
  }

  function highlightCards(skill) {
    $('.card').not(`[data-skill-${skill}]`).toggleClass('subdued');
    $(`.card[data-skill-${skill}]`).toggleClass('feature');
  }
})(this);
(function(global) {
  jQuery.extend(jQuery.expr[':'], { 
    "dataStartsWith" : function(el, i, p, n) {  
      var pCamel = p[3].replace(/-([a-z])/ig, function(m,$1) { return $1.toUpperCase(); });
      return Object.keys(el.dataset).some(function(i, v){
        return i.indexOf(pCamel) > -1;
      });
    }
  });

  // when card is hovered
  $('.card').hover(onCardHoverEnter, onCardHoverExit);

  function onCardHoverEnter() {
    var $elem = $(this);
    var skills = Object.keys($elem.data()).filter((attribute) => attribute.startsWith("skill")).map(el => el.toLowerCase().slice(5));
    highlightSkills(skills);
    highlightType($elem.data('type'));
  }

  function onCardHoverExit() {
    var skills = Object.keys($(this).data()).filter((attribute) => attribute.startsWith("skill")).map(el => el.toLowerCase().slice(5));
    highlightSkills(skills);
  }

  function highlightSkills(skills) {
    for (skill of skills) {
      $(`[data-skill=${skill}]`).toggleClass('hilited');
    }
  }

  function highlightType(type) {
    $(`.experience-type h2:contains(${type})`).toggleClass('subdued');
  }
})(this);
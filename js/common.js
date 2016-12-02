$(function() {

	// ---------------- SCROLL DOTS

	var contentSections = $('.cd-section'),
	navigationItems = $('.dots-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	// Smooth scroll to the section
	navigationItems.on('click', function(event){
		event.preventDefault();
		smoothScroll($(this.hash));
	});

    function updateNavigation() {
    	contentSections.each(function(){
    		$this = $(this);
    		var activeSection = $('.dots-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
    		if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
    			if(activeSection == 1 || activeSection == 4) {
    				$('.dots-nav__link').css({'background' : '#20ab50'});
    			} else {
    				$('.dots-nav__link').css({'background' : '#dcdcdc'});
    			}
    			navigationItems.eq(activeSection).addClass('dots-nav__link--active');
    		} else {
    			navigationItems.eq(activeSection).removeClass('dots-nav__link--active');
    		}
    	});
    }

    function smoothScroll(target) {
    	$('body,html').animate(
    		{'scrollTop':target.offset().top},
    		600
    		);
    }

  // ---------------- SLIDER
  var owl = $('.range-slider');

  owl.owlCarousel({items: 1, center: true, nav: true, loop: true});

  // Total slides count
  total = $('.owl-dots div').length;

  $('.range-total').text(total);

  // Listen to owl events:
  owl.on('changed.owl.carousel', function(event) {
  	var currentItem = event.item.index - 1;
  	if(currentItem > total) currentItem = 1;
  	$('.range-current').text(currentItem);
  })

});

export default (function() {

  let currentSlide = 1;
  document.querySelector( '#slide' + currentSlide ).classList.add( 'active' );
  document.querySelector( '#pin' + currentSlide ).classList.add( 'selected' );

  let playing = true;
  let slideshowInterval = null;

  let playingSlides = () => {
    if(playing === true){
      startSlideshow();
    } else {
      stopSlideshow();
    }
  };

function startSlideshow( ) {
	playing = true;
	slideshowInterval = setInterval( showNextSlide, 3500 );
}

function stopSlideshow(){
  playing = false;
}

function showSlide ( newSlide ) {
    document.querySelector( '.active' ).classList.remove( 'active' );
    document.querySelector( '#slide' + newSlide ).classList.add( 'active' );
	selectPin( newSlide );
	currentSlide = newSlide;
}

function selectPin ( newNumber ) {
    document.querySelector( '.selected' ).classList.remove( 'selected' );
    document.querySelector( '#pin' + newNumber ).classList.add( 'selected' );
}


function showNextSlide ( ) {
	let newSlide = currentSlide + 1;
	if( newSlide > 3 ) {
		newSlide = 1;
	}
    showSlide( newSlide );
}


window.onload = playingSlides()

})();

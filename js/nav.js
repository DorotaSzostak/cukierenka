export default (function() {

let lastscrollPosition = 0;
const header = document.querySelector(".header");
let headerHeight = header.offsetHeight;
  let sticked = false;
  let stickable = false;
  let almostStickable = false;

function stickyNavigation() {
    const scrollPosition = window.scrollY;

    if(lastscrollPosition - scrollPosition > 0) {
       if(!sticked) {
        sticked = true;
        header.classList.add("is-sticked");
      }
      if(almostStickable && scrollPosition>headerHeight) {
        almostStickable = false;
        header.classList.remove("is-prestickable");
      }

    } else { // unstick (scrolling down)

      if(scrollPosition>headerHeight) {

        if(sticked) {
          sticked = false;
          header.classList.remove("is-sticked");
        }
      if(scrollPosition>headerHeight*2) {

        if(!stickable) {
          stickable = true;
          header.classList.add("is-stickable");
        }

        if(almostStickable) {
          almostStickable = false;
          header.classList.remove("is-prestickable");
        }

      } else if(scrollPosition>headerHeight && scrollPosition<=headerHeight*2) {

        if(!almostStickable) {
          almostStickable = true;
          header.classList.add("is-prestickable");
        }

      } else if(stickable) {
        stickable = false;
        header.classList.remove("is-stickable");
      }

    }
    }

    if(scrollPosition===0) {
      header.classList.remove("is-sticked", "is-stickable", "is-prestickable");
      sticked = false;
      stickable = false;
      almostStickable = false;
    }

    lastscrollPosition = scrollPosition;
}

   window.addEventListener('scroll', stickyNavigation);

})();

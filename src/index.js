import './style.css';

class Carousel {
  constructor() {
    this.slideContainer = document.querySelector('.slide-container');
    this.leftArrow = document.querySelector('#arrow-left');
    this.rightArrow = document.querySelector('#arrow-right');

    this.navDots = document.querySelectorAll('.dot');

    this.initEvents();
  }

  initEvents() {
    this.leftArrow.addEventListener('click', () => {
      this.handleLeftArrow();
    });

    this.rightArrow.addEventListener('click', () => {
      this.handleRightArrow();
    });

    this.navDots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        this.handleDotClick(e);
      });
    });

    this.highlightDot(0);
  }

  handleLeftArrow() {
    const currentSlideNum = parseInt(
      document.querySelector('.dot-filled').getAttribute('data-slide')
    );
    if (currentSlideNum !== 0) {
      const previousSlideNum = currentSlideNum - 1;
      this.highlightDot(previousSlideNum);
      this.moveSlidePosition(previousSlideNum);
    }
  }

  handleRightArrow() {
    const currentSlideNum = parseInt(
      document.querySelector('.dot-filled').getAttribute('data-slide')
    );
    if (currentSlideNum !== 4) {
      const nextSlideNum = currentSlideNum + 1;
      this.highlightDot(nextSlideNum);
      this.moveSlidePosition(nextSlideNum);
    }
  }

  handleDotClick(e) {
    const slideNum = e.target.getAttribute('data-slide');
    this.highlightDot(slideNum);
    this.moveSlidePosition(slideNum);
  }

  moveSlidePosition(slideNum) {
    const slidePosition = 700 * slideNum;
    console.log(slidePosition);
    this.slideContainer.style.right = `${slidePosition}px`;
  }

  highlightDot(slideNum) {
    // Remove dot hightlights
    this.navDots.forEach((dot) => {
      dot.classList.remove('dot-filled');
    });

    // Highlight current dot
    this.navDots[slideNum].classList.add('dot-filled');
  }
}

const carousel = new Carousel();

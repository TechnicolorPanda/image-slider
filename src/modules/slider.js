const loadImageSlider = (
  contentSection,
) => {
  const content = document.createElement('div');
  content.classList.add('box');
  const contentBox = contentSection;

  // TODO: center images

  contentBox.innerHTML = `
    <div class = 'display-container'>
      <div class = 'slide'>
        <img src = 'images/kyrra1.jpg' alt = 'Kyrra in Wonder Woman pose'>
      </div>
      <div class = 'slide'>
        <img src = 'images/kyrra2.jpg' alt = 'Kyrra hiding behind a tree'>
      </div>
      <div class = 'slide'>
        <img src = 'images/kyrra3.jpg' alt = 'Kyrra by brick wall'>
      </div>
      <div class = 'slide'>
         <img src = 'images/kyrra 4.jpg' alt = 'Kyrra by yellow flowers'>
      </div>
      <div class = 'slide'>
        <img src = 'images/kyrra5.jpg' alt = 'Kyrra by orange flowers'>
      </div>
    </div>
    <br>
    `;

  createDots(contentSection);
  rotateImages(contentSection);
};

// create dot to specify displayed picture

function createDots(contentSection) {
  const displaySlide = document.getElementsByClassName('slide');
  for (let i = 0; i < displaySlide.length; i++) {
    const imageDot = document.createElement('span');
    imageDot.classList.add('dot');

    imageDot.addEventListener('click', () => {
      slideImages(i);
    });
    contentSection.appendChild(imageDot);
  }
}

// display selected image and hide others

function slideImages(contentSection, imageNumber) {
  const displaySlide = document.getElementsByClassName('slide');
  const highlightDot = document.getElementsByClassName('dot');
  for (let i = 0; i < displaySlide.length; i++) {
    if (imageNumber === i) {
      displaySlide[i].style.display = 'block';
      highlightDot[i].style.backgroundColor = '#717171';
      createArrows(contentSection, imageNumber);
    } else {
      displaySlide[i].style.display = 'none';
      highlightDot[i].style.backgroundColor = '#bbb';
    }
  }
}

// change image every 5 secWe haonds

function rotateImages(contentSection) {
  const displaySlide = document.getElementsByClassName('slide');
  for (let i = 0; i < displaySlide.length; i++) {
    setTimeout(() => {
      slideImages(contentSection, i);
      if (i === displaySlide.length - 1) {
        setTimeout(startOver(contentSection), 5000);
      }
    }, i * 5000);
  }
}

// TODO: put 5 second timeout between image 5 and image 1

function startOver(contentSection) {
  rotateImages(contentSection);
}

// create arrows to move forward or backward
// TODO: move from 1 to 5 or 5 to 1

function createArrows(contentSection, imageNumber) {
  const createPreviousArrow = document.createElement('nav');
  createPreviousArrow.classList.add('prev');
  createPreviousArrow.innerHTML = '&#10094';
  const createNextArrow = document.createElement('nav');
  createNextArrow.classList.add('next');
  createNextArrow.innerHTML = '&#10095';
  createPreviousArrow.addEventListener('click', () => {
    slideImages(contentSection, imageNumber - 1);
  });
  createNextArrow.addEventListener('click', () => {
    slideImages(contentSection, imageNumber + 1);
  });
  contentSection.appendChild(createPreviousArrow);
  contentSection.appendChild(createNextArrow);
}

export { loadImageSlider };

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

// determines next image number

function addImage(imageNumber) {
  return ((imageNumber + 1) % 5);
}

// determines previous image number

function subtractImage(imageNumber) {
  const displaySlide = document.getElementsByClassName('slide');
  const newImageNumber = ((imageNumber + (displaySlide.length - 1)) % (displaySlide.length));
  return (newImageNumber);
}

// create arrows to move forward or backward

function createArrows(contentSection, imageNumber) {
  const createPreviousArrow = document.createElement('nav');

  // create previous arrow

  createPreviousArrow.classList.add('prev');
  createPreviousArrow.innerHTML = '&#10094';

  const subtractImageNumber = subtractImage(imageNumber);

  createPreviousArrow.addEventListener('click', () => {
    slideImages(contentSection, subtractImageNumber);
  });

  contentSection.appendChild(createPreviousArrow);

  // create next arrow

  const createNextArrow = document.createElement('nav');
  createNextArrow.classList.add('next');
  createNextArrow.innerHTML = '&#10095';

  const addImageNumber = addImage(imageNumber);

  createNextArrow.addEventListener('click', () => {
    slideImages(contentSection, addImageNumber);
  });

  contentSection.appendChild(createNextArrow);
}

// create dot to specify displayed picture

function createDots(contentSection) {
  const displaySlide = document.getElementsByClassName('slide');
  const dotContainer = document.createElement('box');
  for (let i = 0; i < displaySlide.length; i++) {
    const imageDot = document.createElement('span');
    imageDot.classList.add('dot');

    imageDot.addEventListener('click', () => {
      slideImages(contentSection, i);
    });
    dotContainer.appendChild(imageDot);
    contentSection.appendChild(dotContainer);
  }
}

// repeat images from the beginning
// TODO: put 5 second timeout between image 5 and image 1

function startOver(contentSection) {
  rotateImages(contentSection);
}

// change image every 5 seconds

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

const loadImageSlider = (
  contentSection,
) => {
  contentSection.innerHTML = `
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
    `;

  createDots(contentSection);
  rotateImages(contentSection);
};

export { loadImageSlider };

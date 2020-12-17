const loadImageSlider = (
  contentSection,
) => {
  const content = document.createElement('div');
  content.classList.add('box');
  const contentBox = contentSection;

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
  `;

  let imageNumber = 0;
  rotateImages(imageNumber);
};

function slideImages(imageNumber) {
  console.log('slide images');
  const displaySlide = document.getElementsByClassName('slide');
  for (let i = 0; i < displaySlide.length; i++) {
    if (imageNumber === i) {
      displaySlide[i].style.display = 'block';
    } else {
      displaySlide[i].style.display = 'none';
    }
  }
}

// change image every 5 seconds

function rotateImages(imageNumber) {
  console.log('rotate slide');
  const displaySlide = document.getElementsByClassName('slide');
  console.log(displaySlide);
  for (let i = 0; i < displaySlide.length - 1; i++) {
  console.log(i);
    setTimeout(() => {
      slideImages(i);
      if (i === displaySlide.length - 2) {
        setTimeout(setImageNumber(), 5000);
      }
    }, i * 5000);
  }
}

// set image number

function setImageNumber(imageNumber) {
  console.log('set image number');
  //slideImages(imageNumber);
}

export { loadImageSlider };

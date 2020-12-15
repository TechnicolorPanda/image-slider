const loadImageSlider = (
  contentSection,
) => {
  const content = document.createElement('div');
  content.classList.add('box');
  const contentBox = contentSection;

  contentBox.innerHTML = `
        <div id = 'picture'>
        <div class = 'display-container'>
          <img src='images/kyrra1.jpg' alt='Kyrra in Wonder Woman pose'>
        </div>
      </div>
      `;
};

export { loadImageSlider };

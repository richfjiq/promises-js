let img = document.querySelector('img');

fetch('superman.png')
  .then((resp) => resp.blob())
  .then((image) => {
    // console.log(image);
    const imgPath = URL.createObjectURL(image);
    img.src = imgPath;
  });

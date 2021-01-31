const c = document.querySelector('#canvas');
const ctx = c.getContext('2d');
const grayscaleBtn = document.querySelector('#grayscale');
const originalBtn = document.querySelector('#original');

const img = new Image();
img.crossOrigin = "Anonymous";

img.src = 'img.jpg';

img.onload = function() {
  ctx.drawImage(img, 0, 0, c.width, c.height);
};

const original = function() {
  ctx.drawImage(img, 0, 0, c.width, c.height);
};

function grayscale() {
  ctx.drawImage(img, 0, 0, c.width, c.height);
  let imageData = ctx.getImageData(0, 0, c.width, c.height);
  let data = imageData.data;
  console.log(data.length + ' px');

  for (let i = 0; i < data.length; i += 4) {
    let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    imageData.data[i] = avg;  // red
    imageData.data[i + 1] = avg;  // green
    imageData.data[i + 2] = avg;  // blue
  }
  ctx.putImageData(imageData, 0, 0);
}

grayscaleBtn.addEventListener('click', grayscale);
originalBtn.addEventListener('click', original);
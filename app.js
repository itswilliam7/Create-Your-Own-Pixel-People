var background = document.getElementById("background");
var skin = document.getElementById("skin");
var eyes = document.getElementById("eyes");
var eyebrows = document.getElementById("eyebrows");
var mouth = document.getElementById("mouth");
var faceitems = document.getElementById("faceitems");
var glasses = document.getElementById("glasses");
var head = document.getElementById("head");
var shirt = document.getElementById("shirt");

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

const createImage = function(source) {
  const tempImg = new Image();
  tempImg.src = source;
  return tempImg;
}

const selectedValues = {
  background: "",
  skin: "",
  eyes: "",
  // ...etc
}

const backgroundImgs = {
  yellow: createImage("https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Background/common/Yellow.png"),
  green: createImage("https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Background/legendary/Green.png"),
  // ...etc
}

const skinImgs = {
  skin1: createImage("https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Skin/common/Skin%201.png"),
  skin2: createImage("https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Skin/common/Skin 2.png"), // using the values you have
  skin3: createImage("https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Skin/common/Skin 3.png")
}



const drawFullFace = function() {
  // first clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // now draw background if the value exists
  if(selectedValues.background !== "") context.drawImage(backgroundImgs[selectedValues.background], 0, 0, canvas.width, canvas.height);

  // now draw skin if the value exists
  // if(selectedValues.skin !== "") context.drawImage(skinImgs[selectedValues.skin], 0, 0, canvas.width, canvas.height);
  console.log(skinImgs[selectedValues[skin]])
  console.log(selectedValues[skin])
  // ... etc
}

skin.addEventListener('change', function (event) {
  selectedValues[skin] = event.target.value;
  drawFullFace();
});
// ...etc
var background = document.getElementById("background");
var skin = document.getElementById("skin");
var eyes = document.getElementById("eyes");
var eyebrows = document.getElementById("eyebrows");
var mouth = document.getElementById("mouth");
var faceitems = document.getElementById("faceitems");
var glasses = document.getElementById("glasses");
var hat = document.getElementById("hat");
var shirt = document.getElementById("shirt");

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

const createImage = function (source) {
  const tempImg = new Image();
  tempImg.src = source;
  return tempImg;
};

const selectedValues = {
  background: "",
  skin: "",
  eyes: "",
  eyebrows: "",
  mouth: "",
  faceitems: "",
  glasses: "",
  hat: "",
  shirt: "",

  // ...etc
};

const backgroundImgs = {
  none: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/none.png"
  ),
  yellow: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Background/common/Yellow.png"
  ),
  green: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Background/legendary/Green.png"
  ),
  tan: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Background/legendary/Tan.png"
  ),
  pink: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Background/rare/Pink.png"
  ),
  blue: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Background/super_rare/Blue.png"
  ),
  darkblue: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Background/super_rare/Dark%20Blue.png"
  ),
  darkpink: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Background/super_rare/Dark%20Pink.png"
  ),
};

const skinImgs = {
  none: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/none.png"
  ),
  skin1: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Skin/common/Skin%201.png"
  ),
  skin2: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Skin/common/Skin%202.png"
  ),
  skin3: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Skin/common/Skin%203.png"
  ),
};

const eyesImgs = {
  none: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/none.png"
  ),
  eyes1: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Eyes/common/Eyes%201.png"
  ),
  eyes2: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Eyes/legendary/Eyes%202.png"
  ),
  eyes3: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Eyes/rare/Eyes%203.png"
  ),
  eyes4: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Eyes/super_rare/Eyes%204.png"
  ),
};

const eyebrowsImgs = {
  none: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/none.png"
  ),
  eyebrows1: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Eyebrow/common/Eyebrows%201.png"
  ),
  eyebrows2: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Eyebrow/legendary/Eyebrows%202.png"
  ),
};

const mouthImgs = {
  none: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/none.png"
  ),
  mouth1: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Mouth/common/Mouth%201.png"
  ),
  mouth2: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Mouth/common/Mouth%202.png"
  ),
  mouth3: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Mouth/common/Mouth%203.png"
  ),
};

const faceitemsImgs = {
  none: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/none.png"
  ),
  bluebandana: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Face%20items/common/Blue%20Bandana.png"
  ),
  greenbandana: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Face%20items/common/Green%20Bandana.png"
  ),
  redbandana: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Face%20items/common/Red%20Bandana.png"
  ),
  cigarette: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Face%20items/common/Cigarette.png"
  ),
  blunt: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Face%20items/legendary/Blunt.png"
  ),
  pipe: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Face%20items/legendary/Pipe.png"
  ),
  blueskimask: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Face%20items/rare/Blue%20Ski%20Mask.png"
  ),
  redskimask: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Face%20items/rare/Red%20Ski%20Mask.png"
  ),
  scream: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Face%20items/rare/Scream.png"
  ),
  anonymous: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Face%20items/super_rare/Anonymous.png"
  ),
  bubblegum: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Face%20items/super_rare/Bubble%20Gum.png"
  ),
  vape: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Face%20items/super_rare/Vape.png"
  ),
};

const glassesImgs = {
  none: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/none.png"
  ),
  glasses: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Glasses/common/Glasses.png"
  ),
  bluegoggles: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Glasses/legendary/Blue%20Goggles.png"
  ),
  purplegoggles: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Glasses/rare/Purple%20Goggles.png"
  ),
  blackvr: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Glasses/super_rare/Black%20VR.png"
  ),
  whitevr: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Glasses/super_rare/White%20VR.png"
  ),
};

const hatImgs = {
  none: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/none.png"
  ),
  hat1: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/common/Hair%201.png"
  ),
  hat2: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/common/Hair%202.png"
  ),
  hat3: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/common/Hair%203.png"
  ),
  redbandana: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/common/Red%20Bandana.png"
  ),
  bluebandana: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/common/Blue%20Bandana.png"
  ),
  greenbandana: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/common/Grean%20Bandana.png"
  ),
  blackbeanie: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/legendary/Black%20Beanie.png"
  ),
  blueheadset: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/legendary/Blue%20Headset.png"
  ),
  greenheadset: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/legendary/Green%20Headset.png"
  ),
  redheadset: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/legendary/Red%20Headset.png"
  ),
  tophat: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/legendary/Top%20Hat.png"
  ),
  harleyquinn: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/rare/Harley%20Quinn.png"
  ),
  heart: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/rare/Heart.png"
  ),
  horns: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/rare/Horns.png"
  ),
  crown: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/super_rare/Crown.png"
  ),
  halo: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Hat/super_rare/Halo.png"
  ),
};

const shirtImgs = {
  none: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/none.png"
  ),
  blacksweater: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Shirt/common/Black%20Sweater.png"
  ),
  bluesweater: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Shirt/common/Blue%20Sweater.png"
  ),
  greensweater: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Shirt/common/Green%20Sweater.png"
  ),
  redsweater: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Shirt/common/Red%20Sweater.png"
  ),
  blackhoodie: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Shirt/legendary/Black%20Hoodie.png"
  ),
  bluehoodie: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Shirt/legendary/Blue%20Hoodie.png"
  ),
  redhoodie: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Shirt/legendary/Red%20Hoodie.png"
  ),
  greenhoodie: createImage(
    "https://raw.githubusercontent.com/itswilliam7/pixel-people-image-layers/master/Shirt/legendary/Green%20Hoodie.png"
  ),
};

const drawFullFace = function () {
  // first clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (selectedValues.background !== "")
    context.drawImage(
      backgroundImgs[selectedValues.background],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.skin !== "")
    context.drawImage(
      skinImgs[selectedValues.skin],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.eyes !== "")
    context.drawImage(
      eyesImgs[selectedValues.eyes],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.eyebrows !== "")
    context.drawImage(
      eyebrowsImgs[selectedValues.eyebrows],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.mouth !== "")
    context.drawImage(
      mouthImgs[selectedValues.mouth],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.faceitems !== "")
    context.drawImage(
      faceitemsImgs[selectedValues.faceitems],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.glasses !== "")
    context.drawImage(
      glassesImgs[selectedValues.glasses],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.hat !== "")
    context.drawImage(
      hatImgs[selectedValues.hat],
      0,
      0,
      canvas.width,
      canvas.height
    );
  if (selectedValues.shirt !== "")
    context.drawImage(
      shirtImgs[selectedValues.shirt],
      0,
      0,
      canvas.width,
      canvas.height
    );
};

// EVENT LISTENERS

background.addEventListener("change", function (event) {
  selectedValues.background = event.target.value;
  drawFullFace();
});

skin.addEventListener("change", function (event) {
  selectedValues.skin = event.target.value;
  drawFullFace();
});

eyes.addEventListener("change", function (event) {
  selectedValues.eyes = event.target.value;
  drawFullFace();
});

eyebrows.addEventListener("change", function (event) {
  selectedValues.eyebrows = event.target.value;
  drawFullFace();
});

mouth.addEventListener("change", function (event) {
  selectedValues.mouth = event.target.value;
  drawFullFace();
});

faceitems.addEventListener("change", function (event) {
  selectedValues.faceitems = event.target.value;
  drawFullFace();
});

glasses.addEventListener("change", function (event) {
  selectedValues.glasses = event.target.value;
  drawFullFace();
});

hat.addEventListener("change", function (event) {
  selectedValues.hat = event.target.value;
  drawFullFace();
});

shirt.addEventListener("change", function (event) {
  selectedValues.shirt = event.target.value;
  drawFullFace();
});

// ...etc

document.getElementById("clear").addEventListener(
  "click",
  function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
  },
  false
);

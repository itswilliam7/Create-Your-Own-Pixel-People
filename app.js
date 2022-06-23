var background = document.getElementById("background");
var skin = document.getElementById("skin");
var eyes = document.getElementById("eyes");
var eyebrows = document.getElementById("eyebrows");
var mouth = document.getElementById("mouth");
var faceitems = document.getElementById("faceitems");
var glasses = document.getElementById("glasses");
var head = document.getElementById("head");
var shirt = document.getElementById("shirt");


// backgroundDropdown.onchange = function(event){
//    alert("Your background is " + backgroundDropdown.value + "!");    
// }

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let imageObj = new Image();

background.addEventListener('change', function () {
  imageObj.src = this.options[this.selectedIndex].dataset.img;
  imageObj.onload = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
  };
});

skin.addEventListener('change', function () {
  imageObj.src = this.options[this.selectedIndex].dataset.img;
  imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
  };
});

eyes.addEventListener('change', function () {
  imageObj.src = this.options[this.selectedIndex].dataset.img;
  imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
  };
});

eyebrows.addEventListener('change', function () {
  imageObj.src = this.options[this.selectedIndex].dataset.img;
  imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
  };
});

mouth.addEventListener('change', function () {
  imageObj.src = this.options[this.selectedIndex].dataset.img;
  imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
  };
});

faceitems.addEventListener('change', function () {
  imageObj.src = this.options[this.selectedIndex].dataset.img;
  imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
  };
});

glasses.addEventListener('change', function () {
  imageObj.src = this.options[this.selectedIndex].dataset.img;
  imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
  };
});

hat.addEventListener('change', function () {
  imageObj.src = this.options[this.selectedIndex].dataset.img;
  imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
  };
});

shirt.addEventListener('change', function () {
  imageObj.src = this.options[this.selectedIndex].dataset.img;
  imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
  };
});

document.getElementById('clear').addEventListener('click', function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
}, false);

function download() {
  var download = document.getElementById("download");
  var image = document.getElementById("canvas").toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
  //download.setAttribute("download","archive.png");
  }


function download_image(){
  var canvas = document.getElementById("canvas");
  image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = "my-image.png";
  link.href = image;
  link.click();
}
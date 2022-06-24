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

// Initializing
window.onload = function(){
  var dwn = document.getElementById('download-button'),
      canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d');

  // Event handler for download
  dwn.onclick = function(){
    download(canvas, 'myimage.png');
  }

}


// Source from:  http://stackoverflow.com/questions/18480474/how-to-save-an-image-from-canvas

/* Canvas Donwload */
function download(canvas, filename) {
  /// create an "off-screen" anchor tag
  var lnk = document.createElement('a'), e;

  /// the key here is to set the download attribute of the a tag
  lnk.download = filename;

  /// convert canvas content to data-uri for link. When download
  /// attribute is set the content pointed to by link will be
  /// pushed as "download" in HTML5 capable browsers
  lnk.href = canvas.toDataURL("image/png;base64");

  /// create a "fake" click-event to trigger the download
  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", true, true, window,
                     0, 0, 0, 0, 0, false, false, false,
                     false, 0, null);

    lnk.dispatchEvent(e);
  } else if (lnk.fireEvent) {
    lnk.fireEvent("onclick");
  }
}
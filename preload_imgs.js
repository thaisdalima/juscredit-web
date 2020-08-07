this.addEventListener("DOMContentLoaded", PreloadAll, true);
// var loadedImages = 0;

var otherArray = new Array(
  // RESTANTE DAS IMAGENS
  "./assets/images/bagageiro/PM-CENA-01.jpg",
  "./assets/images/bagageiro/PM-CENA-02.jpg",
  "./assets/images/bagageiro/PM-CENA-03.jpg",
  "./assets/images/bagageiro/PM-CENA-01-A.jpg",
  "./assets/images/bagageiro/PM-CENA-02-A.jpg",
  "./assets/images/bagageiro/PM-CENA-03-A.jpg",
  "./assets/images/lanternas/lanterna_frontal_2.jpg",
  "./assets/images/lanternas/lanterna_frontal_3.jpg",
  "./assets/images/lanternas/lanterna_frontal_4.jpg",
  "./assets/images/lanternas/lanterna_frontal_5.jpg",
  "./assets/images/lanternas/lanterna_frontal_6.jpg",
  "./assets/images/lanternas/lanterna_traseira_2.jpg",
  "./assets/images/lanternas/lanterna_traseira_3.jpg",
  "./assets/images/lanternas/lanterna_traseira_4.jpg",
  "./assets/images/lanternas/lanterna_traseira_5.jpg",
  "./assets/images/lanternas/lanterna_traseira_6.jpg"
);

function PreloadAll() {
  preloadImages(otherArray);
}

// function preloadImages(imageArray, index) {
//   index = index || 0;
//   if (imageArray && imageArray.length > index) {
//     var img = new Image();
//     img.onload = function () {
//       preloadImages(imageArray, index + 1);
//     }
//     img.src = imageArray[index];
//     trackProgress();
//   }
// }

function preloadImages(params) {
  var images = new Array();
  var loadedImages = 0;

  for (var i = 0; i < params.length; i++) {
    images[i] = new Image();
    images[i].src = params[i];
    images[i].onload = function() {
      document.getElementById('log').innerHTML = ((loadedImages / params.length) * 100).toFixed(0) + '%';
      loadedImages++;
  
      if (loadedImages === params.length) {
        imagesLoaded();
      }
    }
    
  }
}

// function preloadImagesCarros(imageArray, index) {
//   index = index || 0;
//   if (imageArray && imageArray.length > index) {
//     var img = new Image();
//     img.onload = function () {
//       preloadImages(imageArray, index + 1);
//     }
//     img.src = imageArray[index];
//   }
// }

function trackProgress() {
  loadedImages++;
  somaArrays = (otherArray.length);
  const msg =

    `${((loadedImages / somaArrays) * 100).toFixed(0)}%`;
  document.getElementById("log").innerHTML = msg;

  if (loadedImages == somaArrays) {
    imagesLoaded();
  }
}

function imagesLoaded() {
  // Load total
  $('body').removeClass('loading-inprogress');
  $('#main-loadImgs').hide();
}
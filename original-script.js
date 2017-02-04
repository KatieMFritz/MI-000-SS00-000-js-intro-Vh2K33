// Snare
var snareButton = document.getElementById('snareButton')
var snareSound = new Audio('drum-sounds/snare.wav');

snareButton.addEventListener('click', function () {
  snareSound.play();
})
snareButton.addEventListener('mouseenter', function () {
  snareSound.play();
})

// Hi Hat
var hihatButton = document.getElementById('hihatButton')
var hihatSound = new Audio('drum-sounds/hihat.wav');

hihatButton.addEventListener('click', function () {
  hihatSound.play();
})
hihatButton.addEventListener('mouseenter', function () {
  hihatSound.play();
})

// Tink
var tinkButton = document.getElementById('tinkButton')
var tinkSound = new Audio('drum-sounds/tink.wav');

tinkButton.addEventListener('click', function () {
  tinkSound.play();
})
tinkButton.addEventListener('mouseenter', function () {
  tinkSound.play();
})

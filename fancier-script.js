var audio = document.getElementById('audio')
var drums = ['snare', 'tink', 'hihat']

drums.forEach(function (drum) {
  audio.innerHTML +=
    '<audio id="' + drum + '-sound"' +
    'src="drum-sounds/' + drum + '.wav"></audio>'
})

drums.forEach(function (drum) {
  var button = document.getElementById(drum + '-button')
  var sound = document.getElementById(drum + '-sound')
  button.addEventListener('click', function () {
    sound.play()
  })
  button.addEventListener('mouseenter', function () {
    sound.play()
  })
})

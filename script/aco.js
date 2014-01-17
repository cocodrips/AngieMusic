$(function() {
$("#getcontent").on ("click", function(){
var url ="loop_145.wav"
b=loadDogSound(url);
console.log(b);
playSound(b);
});
});


var context = new webkitAudioContext();

var get_text = function(){
  var text = $("#text").val();
  console.log(text);
  return text;
}

var dogBarkingBuffer = null;
function loadDogSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      dogBarkingBuffer = buffer;
      console.log(buffer);
    }, onError);
  }
  request.send();

  return dogBarkingBuffer;
}


var context = new webkitAudioContext();

function playSound(buffer) {
  var source = context.createBufferSource(); // creates a sound source
  source.buffer = buffer;                    // tell the source which sound to play
  source.connect(context.destination);       // connect the source to the context's destination (the speakers)
  source.noteOn(0);                          // play the source now
}


var context = new webkitAudioContext();//一度に４つしかよべない

var ring = function(v){
    var oscillator = context.createOscillator();
    oscillator.type = 0;
    oscillator.frequency.value = v;//周波数
    oscillator.connect(context.destination);
    oscillator.noteOn(0);
    setTimeout(stop,300,oscillator);//関数名,時間,関数名の第一引数　引数つけるときは""をとる
}

var stop=function(oscillator){
    oscillator.noteOff(0);
}

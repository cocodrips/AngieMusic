
if(typeof(webkitAudioContext)!=="undefined"){
    var audioctx = new webkitAudioContext();
}else if(typeof(AudioContext)!=="undefined"){
    var audioctx = new AudioContext();
}

$(function(){
  var buffer = null;
  console.log(audioctx);
  LoadSample(audioctx, "./loop_145.wav");

  $("#getcontent").on("click", function(){
    playMusic();
  })
});




function playSound(audioctx,buffer,time) {
    var src = audioctx.createBufferSource();
    src.buffer = buffer;
    src.connect(audioctx.destination);
    src.noteOn(time);
}

function playMusic(){
      playSound(audioctx,buffer,0);
      playSound(audioctx,buffer,3);
}
 
function LoadSample(ctx, url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    req.onload = function() {
        if(req.response) {
//          buffer = ctx.createBuffer(req.response, false);
            ctx.decodeAudioData(req.response,function(b){buffer=b;},function(){});
        }
        else
            buffer = ctx.createBuffer(VBArray(req.responseBody).toArray(), false);
    }
    req.send();
}
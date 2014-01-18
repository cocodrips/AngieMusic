
if(typeof(webkitAudioContext)!=="undefined"){
    var audioctx = new webkitAudioContext();
}else if(typeof(AudioContext)!=="undefined"){
    var audioctx = new AudioContext();
}

$(function(){
  var rhythmbuffer = null;
  var chordbuffer = null;

  console.log(audioctx);
  LoadRhythmSample(audioctx, "./rhythm1.wav");
  LoadChordSample(audioctx, "./chord1.wav");

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
      playSound(audioctx,rhythmbuffer,0);
      playSound(audioctx,chordbuffer,0);
}
 
function LoadRhythmSample(ctx, url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    req.onload = function() {
        if(req.response) {
//          buffer = ctx.createBuffer(req.response, false);
            ctx.decodeAudioData(req.response,function(b){rhythmbuffer=b;},function(){});
        }
        else
            rhythmbuffer = ctx.createBuffer(VBArray(req.responseBody).toArray(), false);
    }
    req.send();
}

function LoadChordSample(ctx, url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    req.onload = function() {
        if(req.response) {
//          buffer = ctx.createBuffer(req.response, false);
            ctx.decodeAudioData(req.response,function(b){chordbuffer=b;},function(){});
        }
        else
            chordbuffer = ctx.createBuffer(VBArray(req.responseBody).toArray(), false);
    }
    req.send();
}
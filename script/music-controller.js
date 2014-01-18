if(typeof(webkitAudioContext)!=="undefined"){
    var audioctx = new webkitAudioContext();
}else if(typeof(AudioContext)!=="undefined"){
    var audioctx = new AudioContext();
}
var rhythmbuffer = null;
var chordbuffer = null;
var didLoad = 0;

$(function(){
    $("#send-text").on("click", function(){
        text = $("#contents").val();
        fv = new FeelingValue();
        feeling_value = fv.calcValueFromString(text);
        console.log("feelingvalue:", feeling_value)
        var rhythm_midi_name = rhythm_dicision(feeling_value.plus[4],feeling_value.minus[4],feeling_value.plus[5],feeling_value.minus[5],feeling_value.plus[6],feeling_value.minus[6]);
        var chord_midi_name = chord_dicision(feeling_value.plus[0],feeling_value.minus[0],feeling_value.plus[1],feeling_value.minus[1],feeling_value.plus[2],feeling_value.minus[2],feeling_value.plus[3],feeling_value.minus[3]);

        didLoad = 0;
        console.log(rhythm_midi_name, chord_midi_name)

        LoadRhythmSample(audioctx, "data/" + rhythm_midi_name);
        LoadChordSample(audioctx, "data/" + chord_midi_name);
    })
});

function finishLoad(){
    didLoad++;
    playMusic();
}

var fuzz=audioctx.createScriptProcessor(1024,1,1);
fuzz.onaudioprocess=function(event){
  var sin=event.inputBuffer.getChannelData(0);
  var sout=event.outputBuffer.getChannelData(0);
  var limit=0.8;
//  console.log('わあああ');s
   for(var i=0;i<sin.length;i++){
    var sig=sin[i]*6;
    if(sig>limit)sig=limit;
    if(sig<-limit)sig=limit;
    sout[i]=sig;
   }
};

fuzz.connect(audioctx.destination);

function playSound(audioctx,buffer,time) {
    var src = audioctx.createBufferSource();
    src.buffer = buffer;
    src.connect(fuzz);
    src.noteOn(time);
}

function playMusic(){
    if(didLoad == 2){
        playSound(audioctx,rhythmbuffer,0);
        playSound(audioctx,chordbuffer,0);
    }
}





function LoadRhythmSample(ctx, url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";

    req.onload = function() {

        if(req.response) {
            ctx.decodeAudioData(req.response,function(b){
                rhythmbuffer=b;
                didLoad ++;
                playMusic();
            },function(){});
        }
        else{
            rhythmbuffer = ctx.createBuffer(VBArray(req.responseBody).toArray(), false);
            console.log("同期おわり");

        }

    }
    req.send();
}

function LoadChordSample(ctx, url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    req.onload = function() {
        if(req.response) {
            ctx.decodeAudioData(req.response,function(b){
                chordbuffer=b;
                didLoad ++;
                playMusic();
            },function(){});
        }
        else
            chordbuffer = ctx.createBuffer(VBArray(req.responseBody).toArray(), false);
    }
    req.send();
}
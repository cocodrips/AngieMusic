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
        var rhythm_midi_name = rhythm_dicision(feeling_value);
        var chord_midi_name = chord_dicision(feeling_value);

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

function playSound(audioctx,buffer,time) {
    var src = audioctx.createBufferSource();
    src.buffer = buffer;
    src.connect(audioctx.destination);
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
                finishLoad()
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
                finishLoad()
            },function(){});
        }
        else
            chordbuffer = ctx.createBuffer(VBArray(req.responseBody).toArray(), false);
    }
    req.send();
}
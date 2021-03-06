//コード進行の決定
var chord_dicision = function (feeling_value) {
    var akarui_val = feeling_subs(feeling_value.plus[0], feeling_value.minus[0]);
    var tanosii_val = feeling_subs(feeling_value.plus[1], feeling_value.minus[1]);
    var keikai_val = feeling_subs(feeling_value.plus[2], feeling_value.minus[2]);
    var genki_val = feeling_subs(feeling_value.plus[3], feeling_value.minus[3]);

    var chord_D = [];

    //4次元空間での距離を算出
    for (var i = 0; i < chord.length; i++) {
        chord_D[i] = Math.sqrt(Math.pow((chord[i][0] - akarui_val), 2) + Math.pow((chord[i][1] - tanosii_val), 2) + Math.pow((chord[i][2] - keikai_val), 2) + Math.pow((chord[i][3] - genki_val), 2));
    }

    //距離が一番近いコード進行の番号を出力
    var chordMin = chord_D.indexOf(Math.min.apply(null, chord_D)) + 1;
    var chord_name = "chord" + chordMin + ".wav";
    return chord_name;

}

//リズム進行の決定
var rhythm_dicision = function (feeling_value) {
    var karui_val = feeling_subs(feeling_value.plus[4], feeling_value.minus[4]);
    var hade_val = feeling_subs(feeling_value.plus[5], feeling_value.minus[5]);
    var hayai_val = feeling_subs(feeling_value.plus[6], feeling_value.minus[6]);

    var rhythm_D = [];
    //3次元空間での距離を算出
    for (var i = 0; i < rhythm.length; i++) {
        rhythm_D[i] = Math.sqrt(Math.pow((rhythm[i][1] - karui_val), 2) + Math.pow((rhythm[i][2] - hade_val), 2) + Math.pow((rhythm[i][0] - hayai_val), 2));
        //console.log(rhythm_D[i]);
    }

    //距離が一番近いコード進行の番号を出力
    var rhythmMin = rhythm_D.indexOf(Math.min.apply(null, rhythm_D)) + 1;
    var rhythm_name = "rhythm" + rhythmMin + ".wav";
    return rhythm_name;
}

var feeling_subs = function(plus, minus){
    return plus - minus;
}


var chord = [
    [4, 4, 4, 4],
    [4, 5, 4, 3],
    [-5, -5, 0, -5],
    [7, 7, 7, 7],
    [-3, -3, -3, -3],
    [-2, -5, 3, 3],
    [1, -3, -8, -8],
    [-6, -6, -6, -8],
    [1, 3, 1, 2],
    [-1, -5, -6, -3],
    [0, -10, 2, 2],
    [-2, -9, -9, 1],
    [-2, -3, -1, 0],
    [2, 5, 3, 0],
    [-5, -5, -6, -6],
    [10, 6, 3, 2],
    [5, 6, 6, 4],
    [7, 5, 7, 9],
    [-5, -4, 2, 1],
    [10, 8, 10, 11],
    [-1, 7, -3, -3],
    [-5, -9, -11, -4],
    [-11, -4, -5, -5]
];

//速い、軽い、派手
var rhythm = [
    [-7, -1, -1],
    [1, -2, -3],
    [-4, -1, 9],
    [4, 9, 10],
    [-10, -10, -15],
    [-7, -1, 4],
    [-3, 5, 10],
    [-9, -3, 6],
    [-2, 1, -12],
    [-4, -3, 11],
    [-4, 3, 1],
    [3, -6, 20],
    [-4, -3, 7],
    [4, 6, 20],
    [-3, 3, 10],
    [-3, -8, 15],
    [-6, -12, 9],
    [-6, -2, -2],
    [-1, -17, 12],
    [-6, 1, 6],
    [-3, -8, 14],
    [-9, -15, -14],
    [-4, -1, 5]

];

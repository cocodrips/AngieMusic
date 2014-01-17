$(function(){
	feeling_value = {
        plus: [7, 0, 0, 1, 2, 0, 0],
        minus: [1, 1, 0, 0, 2, 2, 1]
      };

	var chord = chord_dicision(feeling_value.plus[0],feeling_value.minus[0],feeling_value.plus[1],feeling_value.minus[1],feeling_value.plus[2],feeling_value.minus[2],feeling_value.plus[3],feeling_value.minus[3]);
	console.log(chord);

});


//コード進行の決定
var chord_dicision = function(p_akauri,m_akarui,p_tanosii,m_tanosii,p_keikai,m_keikai,p_genki,m_genki){
	var akarui_val = akarui(p_akauri,m_akarui);
	var tanosii_val = tanosii(p_tanosii,m_tanosii);
	var keikai_val = keikai(p_keikai,m_keikai);
	var genki_val = genki(p_genki,m_genki);

	var chord_D = [];

	//4次元空間での距離を算出
	for (var i=0 ; i<chord.length ; i++){
		chord_D[i] = Math.sqrt(Math.pow((chord[i][0]-akarui_val),2)+Math.pow((chord[i][1]-tanosii_val),2)+Math.pow((chord[i][2]-keikai_val),2)+Math.pow((chord[i][3]-genki_val),2));
		console.log(chord_D[i]);
	}

	//距離が一番近いコード進行の番号を出力
	var chordMin = chord_D.indexOf(Math.min.apply(null, chord_D)) + 1;
	var chord_name = "chord"+chordMin+".mid";

	return chord_name;

}

var akarui = function(p_akauri,m_akarui){
      var akarui_val = p_akauri - m_akarui;
      return akarui_val;
}

var tanosii = function(p_tanosii,m_tanosii){
      var tanosii_val = p_tanosii - m_tanosii;
      return tanosii_val;
}

var keikai = function(p_keikai,m_keikai){
      var keikai_val = p_keikai - m_keikai;
      return keikai_val;
}

var genki = function(p_genki,m_genki){
      var genki_val = p_genki - m_genki;
      return genki_val;
}

var chord = [
    [4, 4, 4, 4],
    [4, 5, 4, 3],
    [-5, -5, 0, -5],
    [7, 7, 7, 7],
    [-3, -3, -3, -3],
    [-2,-5, 3, 3],
    [1,-3,-8,-8],
    [-6,-6,-6,-8],
    [1,3,1,2],
    [-1,-5,-6,-3],
    [0,-10,2,2],
    [-2,-9,-9,1],
    [-2,-3,-1,0],
    [2,5,3,0],
    [-5,-5,-6,-6],
    [10,6,3,2],
    [5,6,6,4],
    [7,5,7,9],
    [-5,-4,2,1],
    [10,8,10,11],
    [-1,7,-3,-3],
    [-5,-9,-11,-4],
    [-11,-4,-5,-5]
  ];

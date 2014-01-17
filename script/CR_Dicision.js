$(function(){
	feeling_value = {
        plus: [7, 0, 0, 1, 2, 0, 0],
        minus: [1, 1, 0, 0, 2, 2, 1]
      };
	chord_dicision(feeling_value.plus[0],feeling_value.minus[0],feeling_value.plus[1],feeling_value.minus[1],feeling_value.plus[2],feeling_value.minus[2],feeling_value.plus[3],feeling_value.minus[3]);
});


//文字をとってくる
var chord_dicision = function(p_akauri,m_akarui,p_tanosii,m_tanosii,p_keikai,m_keikai,p_genki,m_genki){
	var akarui_val = akarui(p_akauri,m_akarui);
	var tanosii_val = tanosii(p_tanosii,m_tanosii);
	var keikai_val = keikai(p_keikai,m_keikai);
	var genki_val = genki(p_genki,m_genki);

	console.log(akarui_val);
	console.log(tanosii_val);
	console.log(keikai_val);
	console.log(genki_val);

	


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

var chord = {
        1: [7, 0, 0, 1],
        2: [1, 1, 0, 0]
      };

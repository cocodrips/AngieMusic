// Generated by CoffeeScript 1.6.3
(function() {
  this.FeelingValue = (function() {
    function FeelingValue() {}

    FeelingValue.prototype.calcValueFromString = function(text) {
      var data, feeling_value, i, segmenter, v, word, words, _i, _j, _len, _len1;
      console.log("I will calc");
      segmenter = new TinySegmenter();
      words = segmenter.segment(text);
      console.log(words);
      feeling_value = {
        plus: [0, 0, 0, 0, 0, 0, 0],
        minus: [0, 0, 0, 0, 0, 0, 0]
      };
      for (_i = 0, _len = words.length; _i < _len; _i++) {
        word = words[_i];
        data = feeling[word];
        if (data) {
          for (i = _j = 0, _len1 = data.length; _j < _len1; i = ++_j) {
            v = data[i];
            if (v > 0.0003) {
              feeling_value.plus[i]++;
            }
            if (v < -0.0003) {
              feeling_value.minus[i]++;
            }
          }
        }
      }
      return feeling_value;
    };

    return FeelingValue;

  })();

}).call(this);
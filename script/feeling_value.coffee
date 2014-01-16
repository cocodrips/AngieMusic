class @FeelingValue
#  constructor: () ->

  calcValueFromString: (text)->
    segmenter = new TinySegmenter()
    words = segmenter.segment(text)
    console.log words
    plus = [0,0,0,0,0,0,0]
    minus = [0,0,0,0,0,0,0]
    for word in words
      data = feeling[word]
      console.log data
      if data
        for v, i in data
          if v > 0.0003
            plus[i]++
          if v < -0.0003
            minus[i]++
    console.log plus, minus
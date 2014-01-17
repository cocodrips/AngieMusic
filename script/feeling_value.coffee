class @FeelingValue
#  constructor: () ->

  calcValueFromString: (text)->
    segmenter = new TinySegmenter()
    words = segmenter.segment(text)
    console.log words
    feeling_value = {
      plus:[0,0,0,0,0,0,0],
      minus:[0,0,0,0,0,0,0]
    }
    for word in words
      data = feeling[word]
      console.log data
      if data
        for v, i in data
          if v > 0.0003
            feeling_value.plus[i]++
          if v < -0.0003
            feeling_value.minus[i]++
    console.log feeling_value
    return feeling_value
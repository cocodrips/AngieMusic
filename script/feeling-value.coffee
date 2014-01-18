class @FeelingValue
  calcValueFromString: (text)->
    console.log "I will calc"
    segmenter = new TinySegmenter()
    words = segmenter.segment(text)
    console.log words
    feeling_value = {
      plus:[0,0,0,0,0,0,0],
      minus:[0,0,0,0,0,0,0]
    }
    for word in words
      data = feeling[word]
      if data
        for v, i in data
          if v > 0.0003
            feeling_value.plus[i]++
          if v < -0.0003
            feeling_value.minus[i]++
    return feeling_value
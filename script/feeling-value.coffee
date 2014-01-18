class @FeelingValue
  @constructor: ()->
    @filter = 0

  calcValueFromString: (text)->
    segmenter = new TinySegmenter()
    words = segmenter.segment(text)
    console.log words
    feeling_value = {
      plus:[0,0,0,0,0,0,0],
      minus:[0,0,0,0,0,0,0]
    }
    @filter = 0
    for word in words
      if word.match(/激しい/)
        @filter = 1
      data = feeling[word]
      samelen = allSame(word)
      if samelen > 0
        for i in [0..6]
          feeling_value.plus[i] += samelen
        continue

      if data
        for v, i in data
          if v > 0.0003
            feeling_value.plus[i]++
          if v < -0.0003
            feeling_value.minus[i]++
    console.log(feeling_value.plus, feeling_value.minus)
    return feeling_value

  allSame = (word)->
    first = word[0]
    for w in word
      if w != first
        return 0
    return word.length


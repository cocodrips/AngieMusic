@Analyze = ()->
  constructor:(contents)->
#    @contents = contents
    console.log "analyxr@"
    extractKeyword(contents)

  extractKeyword = (contents) ->
    segmenter = new TinySegmenter()
    words = segmenter.segment(contents)
    console.log words

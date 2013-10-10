module.exports = function(pliers) {

  pliers('lint', function(done) {
    pliers.exec('./node_modules/.bin/jshint .', done)
  })

}
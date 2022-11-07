const connection = require('./connection')

function getQuiz(db = connection) {
  return db('quiz').select()
}

module.exports = {
  getQuiz,
}

const express = require('express')

const db = require('../db/dbQuiz')

const router = express.Router()

router.get('/', (req, res) => {
  db.getQuiz()
    .then((quiz) => {
      res.json(quiz)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router

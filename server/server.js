const express = require('express')
const path = require('path')

const quizRoutes = require('./routes/quizRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/quiz', quizRoutes)

module.exports = server

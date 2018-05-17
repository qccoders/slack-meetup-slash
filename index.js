require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const nextMeetupController = require('./controllers/meetup').meetupNext

const PORT = process.env.PORT
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.post('/meetup/next', nextMeetupController)

app.listen(PORT, () => console.log(`express server listening on port: ${PORT}`))
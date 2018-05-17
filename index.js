require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const meetupInfoController = require('./controllers/meetup').meetupInfo

const PORT = process.env.PORT
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.post('/meetup/info', meetupInfoController)

app.listen(PORT, () => console.log(`express server listening on port: ${PORT}`))
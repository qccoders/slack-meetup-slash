require('dotenv').config()
const express = require('express')
const getNextMeetup = require('./services/meetup').getNextMeetup
const bodyParser = require('body-parser')

const PORT = process.env.PORT
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.post('/meetup/next', (req,res) => {
  console.log(req.body)
  getNextMeetup()
  .then(data => {
    res.status(200).json({})
  })
  .catch(e => console.log(e))
})

app.listen(PORT, () => console.log(`express server listening on port: ${PORT}`))
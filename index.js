require('dotenv').config()

const getNextMeetup = require('./services/meetup').getNextMeetup

getNextMeetup()
.then(data => console.log(data))
.catch(e => console.log(e))
const {getNextMeetup} = require('../services/meetup')
const supportedCommands = require('../constants/supported-commands.js')

const sendMeetupInfoToSlack = (res,data) => {
  res.status(200).json(
    {text: `${data.nextMeetupLink}`, 
    response_type: 'in_channel',
    attachments:[{text: `*${data.message}*`}]
  })
}

const getCommands = () => {
  return supportedCommands
}

const meetupInfo = (req,res) => {
  switch(req.body.text) {
    case 'next': 
      return getNextMeetup()
        .then(sendMeetupInfoToSlack.bind(undefined, res))
        .catch(e => console.error(e))
    case 'help': 
      return getCommands()
        .then(sendCommandsToSlack.bind(undefined,res))
        .catch(e => console.error(e))
    
    default: res.status(200).json({text: 'Not sure what you meant, try adding "help" after `/meetup for possible commands`'})
  }
}

module.exports.meetupInfo = meetupInfo
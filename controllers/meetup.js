const {getNextMeetup} = require('../services/meetup')
const getCommands = require('../constants/supported-commands.js').getCommands
const formatCommands = require('../services/meetup').formatCommands

const sendMeetupInfoToSlack = (res,data) => {

  const error = data.message
  res.status(200).json(
    {text: `${data.nextMeetupLink}`, 
    response_type: 'in_channel',
    unfurl_links: true,
    unfurl_media: true,
    attachments:[{text: `*${data.message}*`}]
  })
}

const sendCommandsToSlack = (res, commands) => {
  const slackText = formatCommands(commands)
  console.log('formatted commands: ', slackText)
  res.status(200).json(
    {text: `
      List of possible commands:
      ${slackText}`,
      response_type: 'in_channel',
    }
  )
}

const meetupInfo = async (req,res) => {

  const {next, help} = await getCommands()
  const groupname = req.body.text.slice(5)
  console.log(groupname)
  switch(req.body.text.trim()) {
    case next.name :  
      return getNextMeetup()
        .then(sendMeetupInfoToSlack.bind(undefined, res))
        .catch(e => console.error(e))

    case next.name + ` ${groupname}`:
      return getNextMeetup(groupname.trim())
        .then(sendMeetupInfoToSlack.bind(undefined, res))
        .catch(e => console.error(e))
    
    case help.name: 
      return getCommands()
        .then(sendCommandsToSlack.bind(undefined,res))
        .catch(e => console.error(e))
    
    default: res.status(200).json({text: 'Not sure what you meant, try adding "help" after `/meetup` for possible commands'})
  }
}

module.exports.meetupInfo = meetupInfo
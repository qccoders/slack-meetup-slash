const {getNextMeetup} = require('../services/meetup')

const sendToSlack = (res,data) => {
  res.status(200).json(
    {text: `${data.nextMeetupLink}`, 
    response_type: 'in_channel',
    attachments:[{text: `*${data.message}*`}]
  })
}

const meetupNext = (req,res) => {
  req.body.text === 'next' ? 
    (getNextMeetup()
      .then(sendToSlack.bind(undefined, res))
      .catch(e => console.log(e))
    ) 
    : res.status(200).json({text: 'Not sure what you meant, try adding "next" after `/meetup`'})
}

module.exports.meetupNext = meetupNext
# slack-meetup-slash

`/meetup` endpoint for Slack applications

## Installation

Installing this project for contribution or for your team is relatively straightforward:

1. Fork this project and clone.

2. `yarn install` or `npm install` the dependencies.

    * note that this package makes use of the spread operator, as such having a node version >= 8 is recommended.

      **This will be enforced in later versions.**

3. To prevent private or sensitive information being made available, this project makes use of the [dotenv package](https://github.com/motdotla/dotenv).
    1. Create a `.env` file at the root of your application.
    2. Setup your defaults:

    NAME | VALUE
    --- | ---
    MEETUP_ENDPOINT | YOUR_ENDPOINT
    PORT | 8080

That's it! You are now ready to either add to this repo or to integrate this with your own bot.

## Contributing

For Detailed instructions on how you can add slack-slash-integrations, checkout the [official docs](https://api.slack.com/slash-commands). Also, when it comes to what you can do with meetup, checkout [their docs](https://www.meetup.com/meetup_api/docs/) as well.

Lastly, feel free to submit a pull request against to help out with some of the issues so we can make this project great!
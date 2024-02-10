require('dotenv').config({path: __dirname + '/../.env'})

const VONAGE_API_KEY = "e6cd063f"
const VONAGE_API_SECRET = "mAj84Tk4NRxz78ef"
const TO_NUMBER = "919996800949"
const VONAGE_BRAND_NAME = "vonage"

// apiKey: "e6cd063f",
//   apiSecret: "mAj84Tk4NRxz78ef"

const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "e6cd063f",
  apiSecret: "mAj84Tk4NRxz78ef"
})

const from = "vonage"
const to = "919996800949"
const text = 'A text message sent using the Vonage SMS API, Hi there! Pankaj here. I am sending this message from my Node.js application. I hope you are doing well. Have a great day!'

async function sendSMS() {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}

sendSMS();
// import twilio from 'twilio'
// const accountSid = process.env.TWILIO_ACCOUNT_ID
// const authToken = process.env.TWILIO_AUTH_TOKEN
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER
// const client = twilio(accountSid,authToken)

interface Props {
  message: string;
  to: string;
}

const sendTextMessage = ({ message, to }: Props): void => {
  // const result = await client.messages
  // .create({
  //    body: message,
  //    from: twilioPhoneNumber,
  //    to
  //  })
  console.log({ message, to });
};

export default sendTextMessage;

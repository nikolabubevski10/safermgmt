import twilio from 'twilio';
import { GenericAsync } from '../types';
const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_ID;
const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.REACT_APP_TWILIO_PHONE_NUMBER;
const client = twilio(accountSid, authToken);

interface Props {
  message: string;
  to: string;
}

const sendText = async ({ message, to }: Props): Promise<GenericAsync> => {
  await client.messages
    .create({
      body: message,
      from: twilioPhoneNumber,
      to,
    })
    .catch((err: Error) => console.error(err));

  // dummy data
  return {
    success: true,
    error: '',
    data: { stuff: 1234 },
  };
};

export default sendText;

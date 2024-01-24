import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

console.log("GENERATING A TEXT MESSAGE...");

export const sendMessage = (textMessage) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  const client = twilio(accountSid, authToken);

  client.messages
    .create({
      from: process.env.TWILIO_PHONE,
      body: textMessage,
      to: process.env.CELL_PHONE,
    })
    .then((message) =>
      console.log(`SID: ${message.sid}, Status ${message.status}`)
    );
};

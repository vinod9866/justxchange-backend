import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export const smsService = {
    sendSms: async (to: string, otp: string) => {
        try {
            const message = await client.messages.create({
                body: `
                    Welcome to JustXchange! Your OTP code for completing the signup process is: ${otp}.

                    Thank You`,
                from: process.env.TWILIO_PHONE_NUMBER,
                to,
            });
            console.log(`Message sent: ${message.sid}`);
            return message.sid;
        } catch (error) {
            console.error('Error sending SMS:', error);
            throw error;
        }
    },
};

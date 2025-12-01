import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const notificationPhoneNumber = process.env.TWILIO_NOTIFICATION_PHONE_NUMBER;

if (!accountSid || !authToken || !twilioPhoneNumber || !notificationPhoneNumber) {
  console.warn('Twilio credentials are not fully configured. SMS notifications will be disabled.');
}

const client = accountSid && authToken ? twilio(accountSid, authToken) : null;

export interface LeadNotificationData {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  address?: string;
  postalCode?: string;
}

export async function sendLeadNotificationSMS(leadData: LeadNotificationData): Promise<void> {
  if (!client || !twilioPhoneNumber || !notificationPhoneNumber) {
    console.warn('Twilio is not configured. Skipping SMS notification.');
    return;
  }

  try {
    const fullName = leadData.lastName 
      ? `${leadData.firstName} ${leadData.lastName}` 
      : leadData.firstName;
    
    const messageBody = `🔔 New Lead Received!\n\n` +
      `Name: ${fullName}\n` +
      `Phone: ${leadData.phone}\n` +
      `Email: ${leadData.email}\n` +
      `Service: ${leadData.service}\n` +
      (leadData.address ? `Address: ${leadData.address}\n` : '') +
      (leadData.postalCode ? `Postal Code: ${leadData.postalCode}\n` : '') +
      (leadData.message ? `Message: ${leadData.message.substring(0, 100)}${leadData.message.length > 100 ? '...' : ''}\n` : '');

    await client.messages.create({
      body: messageBody,
      from: twilioPhoneNumber,
      to: notificationPhoneNumber,
    });

    console.log('SMS notification sent successfully');
  } catch (error) {
    console.error('Error sending SMS notification:', error);
    // Don't throw - we don't want SMS failures to break lead creation
  }
}


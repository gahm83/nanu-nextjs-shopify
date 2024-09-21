import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextResponse } from 'next/server';

interface FormData {
  name?: string;
  email?: string;
  phone?: string;
  state?: string;
  message?: string;
  agreement?: string;
}

interface MailData {
  from?: string;
  to?: string;
  subject?: string;
  text?: string;
  html?: string;
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY as string });
    const domain = process.env.MAILGUN_DOMAIN;

    const messageData = {
      from: 'Excited User <mailgun@sandbox9f71ef88a9544c3095da4e619104299d.mailgun.org>',
      to: 'farid.herrera@gmail.com',
      subject: 'Message dropped from nanuheritagefoods.com',
      text: 'Testing some Mailgun awesomeness!',
      html: `<table><tr><td>Name</td><td>${data.name}</td></tr><tr><td>Email</td><td>${data.email}</td></tr><tr><td>Phone</td><td>${data.phone}</td></tr><tr><td>State</td><td>${data.state}</td></tr><tr><td>Message</td><td>${data.message}</td></tr></table>`
    };

    const response = await mg.messages.create(domain as string, messageData);

    console.log({ response });
    return NextResponse.json({ success: true, message: response });
  } catch (error: any) {
    console.log({ error });
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

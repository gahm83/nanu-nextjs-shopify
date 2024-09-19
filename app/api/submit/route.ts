import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextResponse } from 'next/server';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY as string });

interface MailData {
  from?: string;
  to?: string;
  subject?: string;
  text?: string;
  html?: string;
}

export async function POST(req: Request) {
  try {
    const { from, to, subject, text, html }: MailData = await req.json();

    const messageData = {
      from: from || 'Excited User <mailgun@sandbox9f71ef88a9544c3095da4e619104299d.mailgun.org>',
      to: to || 'farid.herrera@gmail.com',
      subject: subject || 'Hello',
      text: text || 'Testing some Mailgun awesomeness!',
      html: html || '<h1>Testing some Mailgun awesomeness!</h1>'
    };

    const response = await mg.messages.create(
      'sandbox9f71ef88a9544c3095da4e619104299d.mailgun.org',
      messageData
    );

    return NextResponse.json({ success: true, message: response });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

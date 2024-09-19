import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextResponse } from 'next/server';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY as string });

interface MailData {
  address?: string;
  subscribed?: string;
  upsert?: string;
}

export async function POST(req: Request) {
  try {
    const { address }: MailData = await req.json();

    const data = {
      address: address,
      subscribed: 'yes',
      upsert: 'yes'
    };

    const response = await mg.lists.members.createMember(
      process.env.MAILGUN_MAILING_LIST as string,
      data as any
    );

    return NextResponse.json({ success: true, message: response });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

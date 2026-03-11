import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI!;
let client: MongoClient;

async function getClient() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client;
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Save to MongoDB
    const mongo = await getClient();
    const db = mongo.db('riseagain');
    await db.collection('contacts').insertOne({
      name,
      email,
      phone,
      service,
      message,
      createdAt: new Date(),
    });

    // Send email notification
    if (process.env.SMTP_HOST && process.env.SMTP_PASS) {
      const transporter = createTransporter();
      await transporter.sendMail({
        from: `"Rise Again Web" <${process.env.SMTP_USER}>`,
        to: 'contact@riseagaintech.com',
        replyTo: email,
        subject: `New Enquiry: ${service} — ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#2563eb;">New Contact Form Submission</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;font-weight:bold;color:#475569;">Name</td><td style="padding:8px 0;">${name}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;color:#475569;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;color:#475569;">Phone</td><td style="padding:8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;color:#475569;">Service</td><td style="padding:8px 0;">${service}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;color:#475569;vertical-align:top;">Message</td><td style="padding:8px 0;">${message.replace(/\n/g, '<br>')}</td></tr>
            </table>
            <hr style="margin:24px 0;border:none;border-top:1px solid #e2e8f0;">
            <p style="color:#94a3b8;font-size:12px;">Sent from riseagaintech.com contact form</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to save. Please try again.' }, { status: 500 });
  }
}

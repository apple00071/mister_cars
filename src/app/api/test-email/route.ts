import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    const emailUser = process.env.GMAIL_USER;
    const emailPass = process.env.GMAIL_APP_PASSWORD;
    const adminEmail = process.env.ADMIN_EMAIL || emailUser;

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        { success: false, message: 'Email configuration is missing' },
        { status: 500 }
      );
    }

    // Create test transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      tls: {
        rejectUnauthorized: false // Only for testing
      }
    });

    // Test email
    const testEmail = {
      from: `"Mister Car Test" <${emailUser}>`,
      to: adminEmail,
      subject: 'Test Email from Mister Car',
      text: 'This is a test email from Mister Car Service.',
      html: '<h2>Test Email</h2><p>This is a test email from Mister Car Service.</p>'
    };

    // Send test email
    const info = await transporter.sendMail(testEmail);

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      messageId: info.messageId
    });

  } catch (error: unknown) {
    console.error('Test email error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send test email',
        error: errorMessage
      },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Get environment variables with better error handling
    const emailUser = process.env.GMAIL_USER;
    const emailPass = process.env.GMAIL_APP_PASSWORD;
    const adminEmail = process.env.ADMIN_EMAIL || emailUser;

    console.log('Environment variables:', { 
      hasEmailUser: !!emailUser, 
      hasEmailPass: !!emailPass,
      adminEmail
    });

    if (!emailUser || !emailPass) {
      console.error('Missing required environment variables');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Server configuration error',
          error: 'Email configuration is missing',
          requiredVars: ['GMAIL_USER', 'GMAIL_APP_PASSWORD']
        },
        { status: 500 }
      );
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Mister Car Contact Form" <${emailUser}>`,
      to: adminEmail,
      subject: 'New Service Booking Request',
      html: `
        <h2>New Service Booking Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Vehicle Model:</strong> ${formData.vehicleModel}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Service Type:</strong> ${formData.serviceType === 'delivery' ? 'Pickup & Dropoff' : 'At Service Center'}</p>
        ${formData.serviceType === 'delivery' ? `
          <p><strong>Address:</strong> ${formData.address}</p>
          <p><strong>Landmark:</strong> ${formData.landmark || 'N/A'}</p>
        ` : ''}
        <p><strong>Preferred Date:</strong> ${formData.date}</p>
        <p><strong>Preferred Time:</strong> ${formData.time}</p>
        ${formData.message ? `<p><strong>Message:</strong> ${formData.message}</p>` : ''}
      `,
    };

    try {
      // Test the connection
      await transporter.verify();
      console.log('Server is ready to take our messages');
      
      // Send email
      const info = await transporter.sendMail(mailOptions);
      
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully!',
        messageId: info.messageId
      });
    } catch (smtpError) {
      console.error('SMTP Error:', smtpError);
      throw smtpError;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    GMAIL_USER: process.env.GMAIL_USER ? 'Set' : 'Not set',
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Not set',
    ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'Not set',
    NODE_ENV: process.env.NODE_ENV,
  });
}

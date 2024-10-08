'use server'

import newMessage from '@/app/emails/new-message';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const formData = await req.json();
        const { senderName, senderEmail, senderSubject, senderPhone, senderMessage } = formData;

        if (!senderName || !senderEmail || !senderSubject || !senderMessage || !senderPhone) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Your Company <onboarding@resend.dev>',
            to: ['carlos.gallagav@gmail.com'],
            subject: senderSubject,
            reply_to: senderEmail,
            react: newMessage({
                senderName,
                senderEmail,
                senderSubject,
                senderMessage,
                senderPhone
            })
            // text: `Name: ${senderName}\nEmail: ${senderEmail}\nPhone: ${senderPhone}\n\nMessage:\n${senderMessage}`,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

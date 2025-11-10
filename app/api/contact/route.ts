import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, address, postalCode, service, message } = body;

    // Validate required fields
    if (!firstName || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get database connection
    const db = await getDatabase();
    const collection = db.collection('contact_submissions');

    // Insert the submission
    const result = await collection.insertOne({
      firstName,
      lastName: lastName || '',
      email,
      phone,
      address: address || '',
      postalCode: postalCode || '',
      service,
      message: message || '',
      createdAt: new Date(),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully',
        id: result.insertedId 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}


import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { sendLeadNotificationSMS } from '@/lib/twilio';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, address, postalCode, service, message, utmParams } = body;

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

    // Prepare submission data
    const submissionData: any = {
      firstName,
      lastName: lastName || '',
      email,
      phone,
      address: address || '',
      postalCode: postalCode || '',
      service,
      message: message || '',
      leadStatus: 'New',
      createdAt: new Date(),
    };

    // Add UTM tracking data if present
    if (utmParams) {
      submissionData.utmSource = utmParams.utm_source || null;
      submissionData.utmMedium = utmParams.utm_medium || null;
      submissionData.utmCampaign = utmParams.utm_campaign || null;
      submissionData.utmTerm = utmParams.utm_term || null;
      submissionData.utmContent = utmParams.utm_content || null;
      submissionData.gclid = utmParams.gclid || null; // Google Click ID
      
      // Determine if this is from Google Ads
      submissionData.isGoogleAds = 
        (utmParams.utm_source?.toLowerCase() === 'google' && 
         utmParams.utm_medium?.toLowerCase() === 'cpc') ||
        !!utmParams.gclid;
    }

    // Insert the submission
    const result = await collection.insertOne(submissionData);

    // Send SMS notification (non-blocking - don't fail if SMS fails)
    sendLeadNotificationSMS({
      firstName: submissionData.firstName,
      lastName: submissionData.lastName,
      email: submissionData.email,
      phone: submissionData.phone,
      service: submissionData.service,
      message: submissionData.message,
      address: submissionData.address,
      postalCode: submissionData.postalCode,
    }).catch((error) => {
      console.error('Failed to send SMS notification:', error);
      // Continue even if SMS fails
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


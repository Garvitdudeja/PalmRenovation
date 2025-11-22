import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { verifyAdminToken } from '../../login/route';
import { ObjectId } from 'mongodb';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Verify admin authentication
    if (!verifyAdminToken(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: 'Entry ID is required' },
        { status: 400 }
      );
    }

    // Get database connection
    const db = await getDatabase();
    const collection = db.collection('contact_submissions');

    // Fetch the entry by ID
    const entry = await collection.findOne({ _id: new ObjectId(id) });

    if (!entry) {
      return NextResponse.json(
        { error: 'Entry not found' },
        { status: 404 }
      );
    }

    // Convert MongoDB ObjectId to string for JSON serialization
    const formattedEntry = {
      _id: entry._id.toString(),
      firstName: entry.firstName,
      lastName: entry.lastName,
      email: entry.email,
      phone: entry.phone,
      address: entry.address,
      postalCode: entry.postalCode,
      service: entry.service,
      message: entry.message,
      leadStatus: entry.leadStatus || 'New',
      createdAt: entry.createdAt,
      utmSource: entry.utmSource || null,
      utmMedium: entry.utmMedium || null,
      utmCampaign: entry.utmCampaign || null,
      utmTerm: entry.utmTerm || null,
      utmContent: entry.utmContent || null,
      gclid: entry.gclid || null,
      isGoogleAds: entry.isGoogleAds || false,
    };

    return NextResponse.json(
      { entry: formattedEntry },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching entry:', error);
    return NextResponse.json(
      { error: 'Failed to fetch entry' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Verify admin authentication
    if (!verifyAdminToken(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;
    const body = await request.json();
    const { leadStatus } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Entry ID is required' },
        { status: 400 }
      );
    }

    if (!leadStatus) {
      return NextResponse.json(
        { error: 'Lead status is required' },
        { status: 400 }
      );
    }

    // Get database connection
    const db = await getDatabase();
    const collection = db.collection('contact_submissions');

    // Update the entry
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { leadStatus, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Entry not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Lead status updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating entry:', error);
    return NextResponse.json(
      { error: 'Failed to update entry' },
      { status: 500 }
    );
  }
}

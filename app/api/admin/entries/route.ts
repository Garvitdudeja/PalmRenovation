import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { verifyAdminToken } from '../login/route';

export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication
    if (!verifyAdminToken(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get database connection
    const db = await getDatabase();
    const collection = db.collection('contact_submissions');

    // Fetch all entries, sorted by most recent first
    const entries = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    // Convert MongoDB ObjectId to string for JSON serialization
    const formattedEntries = entries.map((entry) => ({
      _id: entry._id.toString(),
      firstName: entry.firstName,
      lastName: entry.lastName,
      email: entry.email,
      phone: entry.phone,
      address: entry.address,
      postalCode: entry.postalCode,
      service: entry.service,
      message: entry.message,
      createdAt: entry.createdAt,
    }));

    return NextResponse.json(
      { entries: formattedEntries },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching entries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch entries' },
      { status: 500 }
    );
  }
}


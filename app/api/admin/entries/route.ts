import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { verifyAdminToken } from '../login/route';
import { ObjectId } from 'mongodb';

export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication
    if (!verifyAdminToken(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get pagination parameters from query string
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const skip = (page - 1) * limit;

    // Get database connection
    const db = await getDatabase();
    const collection = db.collection('contact_submissions');

    // Get total count for pagination
    const totalCount = await collection.countDocuments({});

    // Fetch paginated entries, sorted by most recent first
    const entries = await collection
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
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
      leadStatus: entry.leadStatus || 'New',
      createdAt: entry.createdAt,
    }));

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json(
      { 
        entries: formattedEntries,
        pagination: {
          page,
          limit,
          totalCount,
          totalPages,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        }
      },
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

export async function DELETE(request: NextRequest) {
  try {
    // Verify admin authentication
    if (!verifyAdminToken(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Entry ID is required' },
        { status: 400 }
      );
    }

    // Get database connection
    const db = await getDatabase();
    const collection = db.collection('contact_submissions');

    // Delete the entry
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'Entry not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Entry deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting entry:', error);
    return NextResponse.json(
      { error: 'Failed to delete entry' },
      { status: 500 }
    );
  }
}


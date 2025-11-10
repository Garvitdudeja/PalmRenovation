import { NextRequest, NextResponse } from 'next/server';

const ADMIN_USERNAME = 'spencer';
const ADMIN_PASSWORD = 'Blessings1!';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // In a production app, you'd use proper session management or JWT tokens
      // For simplicity, we'll use a simple token approach
      const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
      
      const response = NextResponse.json(
        { success: true, token },
        { status: 200 }
      );

      // Set a cookie for authentication (7 days expiry)
      response.cookies.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return response;
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}

// Helper function to verify admin token
export function verifyAdminToken(request: NextRequest): boolean {
  const token = request.cookies.get('admin_token')?.value;
  if (!token) return false;
  
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [username] = decoded.split(':');
    return username === ADMIN_USERNAME;
  } catch {
    return false;
  }
}


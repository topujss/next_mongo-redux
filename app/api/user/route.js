import dbConnect from '@/config/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';

/**
 * Get all user from mongodb
 */
export default async function GET() {
  try {
    // connect to mongodb
    await dbConnect();

    // find user
    const userData = await User.find();

    console.log(userData);

    return NextResponse.json({ userData });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

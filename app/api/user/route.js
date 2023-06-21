import dbConnect from '@/config/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';

/**
 * Get all user from mongodb
 * Warning: never do export default http request
 */
export async function GET(request) {
  try {
    // connect to mongodb
    await dbConnect();

    // find user
    const userData = await User.find();

    return NextResponse.json({ userData });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

/**
 * send  user data to mongodb
 * Warning: never do export default on http request
 */
export async function POST(request) {
  try {
    // connect to mongodb
    await dbConnect();

    const data = await request.json();

    console.log(data);

    // find user
    const userData = await User.create({ ...data });

    return NextResponse.json({ userData });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

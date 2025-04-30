import { NextResponse } from 'next/server';
import { connectDB } from '@/mongoDB/mongodb';

export async function GET(req: Request, { params }: { params: { postId: number } }) {
  const client = await connectDB;
  const db = client?.db('posts');
  const posts = await db?.collection('posts').findOne({ id: Number(params.postId) });
  return NextResponse.json(posts);
}

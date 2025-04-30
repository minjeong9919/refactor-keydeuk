import { NextResponse } from 'next/server';
import { connectDB } from '@/mongoDB/mongodb';

export async function GET(req: Request, { postsId }: { page: { postId: number } }) {
  const client = await connectDB;
  const db = client?.db('posts');
  const comments = await db
    ?.collection('comments')
    .findOne({ id: Number(params.postId) })
    .toArray();
  console.log(comments);
  return NextResponse.json(comments);
}

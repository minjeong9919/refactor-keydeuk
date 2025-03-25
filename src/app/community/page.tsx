// import { getAllCommunityPost } from '@/api/communityAPI';
// import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
// import { fetchQueryBonding } from '@/libs/fetchQueryBounding';
import Pagination from '@/components/Pagination/Pagination';
import type { CommunityPostListResponse } from '@/types/communityType';
import { connectDB } from '@/mongoDB/mongodb';
import CommunityEmptyCase from './_components/CommunityEmptyCase';
import PostCardList from './_components/PostCardList';

interface CommunityPageProps {
  searchParams: { [key: string]: string };
}

export default async function CommunityPage({ searchParams }: CommunityPageProps) {
  const client = await connectDB;

  if (!client) {
    return <CommunityEmptyCase />;
  }

  const db = client.db('posts');
  const posts: CommunityPostListResponse[] | null = await db
    .collection<CommunityPostListResponse>('postList')
    .find()
    .toArray();

  const initialParams: { [key: string]: string | string[] | undefined } = {
    sort: searchParams.sort || 'new',
    page: searchParams.page || '0',
    size: searchParams.size || '16',
  };

  // const queryClient = new QueryClient();

  // const posts = await fetchQueryBonding<CommunityPostListResponse | null>(queryClient, {
  //   queryKey: ['postCardsList'],
  //   queryFn: () => getAllCommunityPost(initialParams),
  // });

  if (!posts) {
    return <CommunityEmptyCase />;
  }

  const { content, ...rest } = posts[0];

  return (
    <div>
      {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
      <PostCardList posts={content} />
      <Pagination {...rest} searchParams={initialParams} />
      {/* </HydrationBoundary> */}
    </div>
  );
}

'use client';

import classNames from 'classnames/bind';
// import { useSuspenseQuery } from '@tanstack/react-query';

// import { getAllCommunityPost } from '@/api/communityAPI';
import type { CommunityPostCardDataType } from '@/types/communityType';
import PostCard from './PostCard';

import styles from './PostCardList.module.scss';

const cn = classNames.bind(styles);

interface CommunityPageProps {
  // searchParams: { [key: string]: string | undefined };
  posts: CommunityPostCardDataType[];
}

export default function PostCardList({ posts }: CommunityPageProps) {
  // const getAllCommunityParams: CommunityParamsType = {
  //   sort: searchParams.sort || 'new',
  //   page: searchParams.page || '0',
  //   size: searchParams.size || '16',
  // };

  // const { data: communityData } = useSuspenseQuery<CommunityAllPostCardDataType>({
  //   queryKey: ['postCardsList'],
  //   queryFn: () => getAllCommunityPost(getAllCommunityParams),
  // });

  return (
    <div>
      <div className={cn('post-wrapper')}>
        {posts.map((cardData) => (
          <PostCard key={cardData.id} cardData={cardData} />
        ))}
      </div>
    </div>
  );
}

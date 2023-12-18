import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Card from '~/components/card';

import type { Post } from '~/types';

interface Props {
	post: Post;
}

const BlogPostCard = ({ post }: Props) => {
	const {
		node: { url, publication, title, coverImage },
	} = post;
	return (
		<Link href={url} target='_blank' className='w-full'>
			<Card className=''>
				<div className='flex flex-col gap-6 p-4'>
					<div className='flex flex-row items-center gap-2'>
						<Image
							src={publication.favicon}
							alt={`${publication.title} Logo`}
							width={24}
							height={24}
							className='rounded-xl'
						/>
						<div className='text-[14px]'>{publication.title}</div>
					</div>
					<div className='text-[1rem] font-medium'>{title}</div>
					<Image
						src={coverImage.url}
						alt={title}
						width={400}
						height={157}
						className='aspect-video rounded-xl'
					/>
				</div>
			</Card>
		</Link>
	);
};

export default BlogPostCard;

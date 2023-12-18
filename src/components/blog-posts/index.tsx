import React from 'react';

import { BlogPostCard } from '../cards';

import { getBlogPosts } from '~/helpers';

import type { Post } from '~/types';

const BlogPosts = () => {
	const [posts, setPosts] = React.useState<Post[]>([]);

	React.useEffect(() => {
		getBlogPosts()
			.then((res) => setPosts(res))
			.catch((err) => console.log(err));
	}, []);

	if (posts) {
		const [post1, post2, post3, post4] = posts;
		if (post1 && post2 && post3 && post4) {
			return (
				<div className='mb-4 mt-4 flex flex-col gap-8'>
					<div className='flex flex-col gap-8 lg:flex-row'>
						<div className='w-full basis-1/2'>
							<BlogPostCard post={post1} />
						</div>
						<div className='w-full basis-1/2'>
							<BlogPostCard post={post2} />
						</div>
					</div>
					<div className='flex flex-col gap-8 lg:flex-row'>
						<div className='w-full basis-1/2'>
							<BlogPostCard post={post3} />
						</div>
						<div className='w-full basis-1/2'>
							<BlogPostCard post={post4} />
						</div>
					</div>
				</div>
			);
		}
	}
};

export default BlogPosts;

import React from 'react';
import Link from 'next/link';
import Card from '~/components/card';

import { TwitterIcon } from '~/icons';

const TwitterCard = () => {
	return (
		<Link
			href='https://twitter.com/Envoy_1084'
			target='_blank'
			className='w-full'
		>
			<Card className='flex aspect-square max-w-[230px] items-center justify-center bg-[#F0F7FD] py-1 transition-all duration-300 ease-in-out hover:bg-[#e6f3ff]'>
				<div className='flex -translate-x-4 flex-col gap-2'>
					<div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#54ACEE]'>
						<TwitterIcon size='22' color='#fff' />
					</div>
					<div className='flex flex-col text-sm'>
						<span>Twitter</span>
						<span className='text-[14px] font-medium text-gray-500'>@Envoy_1084</span>
					</div>
					<div className='my-2 w-fit rounded-full bg-[#54ACEE] px-4 py-1 text-[14px] text-white'>
						Follow
					</div>
				</div>
			</Card>
		</Link>
	);
};

export default TwitterCard;

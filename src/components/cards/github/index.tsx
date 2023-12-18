import React from 'react';
import Link from 'next/link';
import Card from '~/components/card';

import { GitHubIcon, GitHubGraph } from '~/icons';

const GitHubCard = () => {
	return (
		<Link
			href='https://github.com/Envoy-VC'
			target='_blank'
			className='h-full w-full'
		>
			<Card className='flex h-full items-center justify-center px-4'>
				<div className='flex w-full flex-row justify-between'>
					<div className='flex flex-col gap-2 py-2'>
						<div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#000]'>
							<GitHubIcon size='28' />
						</div>
						<div className='flex flex-col'>
							<div className='text-sm font-medium'>Envoy-VC</div>
							<div className='text-xs'>One commit at a time 🧠</div>
						</div>
						<div className='my-2 w-fit rounded-md border-[1px] border-[#D4D8DA] bg-[#F6F8FA] px-4 py-1 text-[12px] font-medium text-[#24292F]'>
							Follow
						</div>
					</div>
					<div className='max-w-[152px]'>
						<GitHubGraph />
					</div>
				</div>
			</Card>
		</Link>
	);
};

export default GitHubCard;

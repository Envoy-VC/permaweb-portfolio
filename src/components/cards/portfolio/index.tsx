import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '~/components/card';

import PortfolioFavicon from '../../../../public/assets/portfolio-favicon.png';

const PortfolioCard = () => {
	return (
		<Link href='https://vedantc.dev' target='_blank' className='w-full'>
			<Card className='flex aspect-square max-w-[230px] items-center justify-center py-1'>
				<div className='flex h-full w-full flex-col items-center justify-center gap-2'>
					<Image
						src={PortfolioFavicon}
						alt='Portfolio Favicon'
						width={36}
						height={36}
						className='rounded-lg'
					/>
					<span>Portfolio</span>
					<div className='text-[14px] font-medium text-gray-500'>vedantc.dev</div>
				</div>
			</Card>
		</Link>
	);
};

export default PortfolioCard;

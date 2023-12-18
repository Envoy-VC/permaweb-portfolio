import React from 'react';
import { SEO } from '~/components';

import { Profile, About } from '~/sections';

const Home = () => {
	return (
		<div className='font-inter p-4 sm:p-12'>
			<SEO />
			<div className='flex w-full flex-col gap-4 lg:flex-row'>
				<div className='w-full lg:basis-1/3 xl:basis-1/2'>
					<Profile />
				</div>
				<div className='w-full lg:basis-2/3 xl:basis-1/2'>
					<About />
				</div>
			</div>
		</div>
	);
};

export default Home;

import React from 'react';
import Image from 'next/image';

import Logo from '../../../public/assets/logo.png';

const Profile = () => {
	return (
		<div className='flex items-center justify-center lg:fixed'>
			<div className='flex w-fit flex-col items-center gap-4 p-8 lg:items-start'>
				<div className='flex w-full flex-col gap-4'>
					<Image
						src={Logo}
						alt='Logo'
						width={180}
						height={180}
						className='rounded-full lg:max-w-[128px] xl:max-w-[180px]'
					/>
					<div className='mb-2 mt-4 text-3xl font-bold xl:text-5xl'>
						Vedant Chainani
					</div>
				</div>
				<div className='flex flex-col gap-2 text-lg text-[#565656] xl:text-xl'>
					<div className='mb-3'>developer and technical writer ✎</div>
					<div>
						✦ exploring <span className='font-medium'>ⓐ Arweave</span>
					</div>
					<div>✦ love hackathons</div>
					<div>✦ based in India 🇮🇳</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;

import React from 'react';

interface Props {
	title: React.ReactNode;
}

const Header = ({ title }: Props) => {
	return <div className='text-xl font-semibold text-[#202020] py-4'>{title}</div>;
};

export default Header;

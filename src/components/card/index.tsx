import React from 'react';
import clsx from 'clsx';

interface Props extends React.ComponentProps<'div'> {
	className?: string;
	children: React.ReactNode;
}

const Card = ({ children, className }: Props) => {
	return (
		<div className={clsx('cardShadow w-full rounded-3xl', className)}>
			{children}
		</div>
	);
};

export default Card;

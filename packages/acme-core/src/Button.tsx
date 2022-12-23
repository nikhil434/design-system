import * as React from 'react';

export interface ButtonProps {
	children: React.ReactNode;
}

export function Button(props: ButtonProps) {
	return (
		<button className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'>
			{props.children}
		</button>
	);
}

Button.displayName = 'Button';

import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
	margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
`;

const LinkIcon = ({ width, height, color, marginTop }) => {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			stroke={color}
			viewBox='0 0 52.893 53.416'
			marginTop={marginTop}
		>
			<g id='Group_18' data-name='Group 18' transform='translate(-2 -1.172)'>
				<path
					id='Path_61'
					data-name='Path 61'
					d='M25.257,7H10.073A6.073,6.073,0,0,0,4,13.073V40.4a6.073,6.073,0,0,0,6.073,6.073H37.4A6.073,6.073,0,0,0,43.478,40.4V25.22'
					transform='translate(0 6.11)'
					fill='none'
					stroke='#fff'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='4'
				/>
				<line
					id='Line_5'
					data-name='Line 5'
					y1='30.48'
					x2='29.308'
					transform='translate(22.757 4)'
					fill='none'
					stroke='#fff'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='4'
				/>
				<path
					id='Path_62'
					data-name='Path 62'
					d='M15,4H30.184V19.184'
					transform='translate(22.404)'
					fill='none'
					stroke='#fff'
					stroke-linecap='round'
					stroke-linejoin='round'
					stroke-width='4'
				/>
			</g>
		</Svg>
	);
};

export default LinkIcon;

LinkIcon.defaultProps = {
	width: '52.893',
	height: '53.416',
};

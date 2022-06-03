import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
	margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
`;

const FolderIcon = ({ width, height, color, marginTop }) => {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			stroke={color}
			viewBox='0 0 66.554 56.129'
			marginTop={marginTop}
		>
			<path
				id='folder'
				d='M9.95,4h13.9L34.277,14.426H58.6a6.95,6.95,0,0,1,6.95,6.95v27.8a6.95,6.95,0,0,1-6.95,6.95H9.95A6.95,6.95,0,0,1,3,49.178V10.95A6.95,6.95,0,0,1,9.95,4'
				transform='translate(-1 -2)'
				fill='none'
				stroke='#ff4454'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='4'
			/>
		</Svg>
	);
};

export default FolderIcon;

FolderIcon.defaultProps = {
	width: '66.554',
	height: '56.129',
};

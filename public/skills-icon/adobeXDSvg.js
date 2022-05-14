import React from 'react';

const AdobeXDIcon = ({ width, height, color }) => {
	return (
		<svg
			height={height}
			style='enable-background:new 0 0 512 512;'
			version='1.1'
			viewBox='0 0 512 512'
			width={width}
			xml:space='preserve'
			xmlns='http://www.w3.org/2000/svg'
			xmlns:xlink='http://www.w3.org/1999/xlink'
		>
			<g id='_x33__x2C__XD_x2C__Adobe'>
				<g>
					<rect
						height='510.575'
						style='fill:#FF26BE;'
						width='510.576'
						x='1.207'
						y='0.712'
					/>
					<rect
						height='465.646'
						style='fill:#2E001F;'
						width='465.646'
						x='23.669'
						y='23.179'
					/>
					<g>
						<g>
							<path
								d='M266.262,137.396h-39.884l-42.813,89.544l-43.388-89.544H99.091l58.146,116.27L97.016,372.721      h40.6l43.58-91.24l44.086,91.24h43.945l-62.07-120.454L266.262,137.396z M376.519,137.396v59.837c0,0-6.899,0-11.493,0      c-39.22,0-86.634,25.292-86.634,89.894c0,49.941,25.304,87.479,79.201,87.479c39.685,0,58.381-13.728,58.381-13.728V137.396      H376.519z M376.48,340.231c0,0-4.543,1.998-15.261,1.998s-43.601-4.722-43.601-56.863c0-52.136,37.788-56.317,46.869-56.317      c9.086,0,11.992,2.545,11.992,2.545V340.231z'
								style='fill:#FFD9F2;'
							/>
						</g>
					</g>
				</g>
			</g>
			<g id='Layer_1' />
		</svg>
	);
};

export default AdobeXDIcon;

AdobeXDIcon.defaultProps = {
	width: '512px',
	height: '512px',
};

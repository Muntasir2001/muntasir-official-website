import styled from 'styled-components';

import ReactjsIcon from '../../public/skills-icon/reactjsIcon.svg';
import NextjsIcon from '../../public/skills-icon/nextjsSvg';
import ExpressIcon from '../../public/skills-icon/expressjsIcon.svg';
import FlaskIcon from '../../public/skills-icon/flaskIcon.svg';
import NodejsIcon from '../../public/skills-icon/nodejsIcon.svg';
import DiscordjsIcon from '../../public/skills-icon/discordjsIcon.svg';
import DiscordjsIconShort from '../../public/skills-icon/discordjsIconShort.svg';

const FrameworksSectionParent = styled.div`
	margin-top: 40px;

	.icon-list {
		display: flex;
		margin-top: 25px;
		align-items: center;
	}
`;

const SvgIcon = styled.div`
	svg {
		margin-right: ${(props) =>
			props.marginRight ? props.marginRight : '15px'};
		width: ${(props) => (props.width ? props.width : '')};
		height: ${(props) => (props.height ? props.height : '')};
	}

	/* mobile */
	@media screen and (max-width: 780px) {
		svg {
			margin-right: ${(props) =>
				props.marginRight ? props.marginRight : '15px'};

			width: ${(props) => (props.resWidth ? props.resWidth : '')};
			height: ${(props) => (props.resHeight ? props.resHeight : '')};
		}
	}
`;

const FrameworksSection = () => {
	const width = '50px';
	const height = '50px';
	const resWidth = '35px';
	const resHeight = '35px';

	return (
		<>
			<FrameworksSectionParent>
				<h3>Frameworks</h3>
				<div className='icon-list'>
					<SvgIcon
						width={width}
						height={height}
						resWidth={resWidth}
						resHeight={resHeight}
					>
						<ReactjsIcon />
					</SvgIcon>
					<SvgIcon
						width={width}
						height={height}
						resWidth={resWidth}
						resHeight={resHeight}
					>
						<NextjsIcon width={width} height={height} />
					</SvgIcon>
					<SvgIcon
						width={'100px'}
						height={'55px'}
						resWidth='40px'
						resHeight='40px'
					>
						<NodejsIcon />
					</SvgIcon>
					<SvgIcon
						width='110px'
						height={height}
						resWidth='50px'
						resHeight='50px'
					>
						<ExpressIcon />
					</SvgIcon>
					<SvgIcon
						width='40px'
						height='60px'
						marginRight='5px'
						resWidth={resWidth}
						resHeight={resHeight}
					>
						<FlaskIcon />
					</SvgIcon>
					<SvgIcon
						width='120px'
						height='55px'
						resWidth={resWidth}
						resHeight={resHeight}
					>
						<DiscordjsIconShort />
					</SvgIcon>
				</div>
			</FrameworksSectionParent>
		</>
	);
};

export default FrameworksSection;

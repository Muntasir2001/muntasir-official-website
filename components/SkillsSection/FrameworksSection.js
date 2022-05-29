import styled from 'styled-components';

import ReactjsIcon from '../../public/skills-icon/reactjsIcon.svg';
import NextjsIcon from '../../public/skills-icon/nextjsSvg';
import ExpressIcon from '../../public/skills-icon/expressjsIcon.svg';
import FlaskIcon from '../../public/skills-icon/flaskIcon.svg';
import NodejsIcon from '../../public/skills-icon/nodejsIcon.svg';
import DiscordjsIcon from '../../public/skills-icon/discordjsIcon.svg';

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
		margin-right: 15px;
		width: ${(props) => (props.width ? props.width : '')};
		height: ${(props) => (props.height ? props.height : '')};
	}
`;

const NodejsSvgIcon = styled.div`
	svg {
		width: ${(props) => (props.width ? props.width : '')};
		height: ${(props) => (props.height ? props.height : '')};
	}
`;

const DiscordjsSvgIcon = styled.div`
	svg {
		margin-right: 15px;
		width: ${(props) => (props.width ? props.width : '')};
		height: ${(props) => (props.height ? props.height : '')};
	}
`;

const FrameworksSection = () => {
	const width = '50px';
	const height = '50px';

	return (
		<>
			<FrameworksSectionParent>
				<h3>Frameworks</h3>
				<div className='icon-list'>
					<SvgIcon width={width} height={height}>
						<ReactjsIcon />
					</SvgIcon>
					<SvgIcon width={width} height={height}>
						<NextjsIcon width={width} height={height} />
					</SvgIcon>
					<NodejsSvgIcon width={'100px'} height={'55px'}>
						<NodejsIcon />
					</NodejsSvgIcon>
					<SvgIcon>
						<ExpressIcon />
					</SvgIcon>
					<SvgIcon>
						<FlaskIcon />
					</SvgIcon>
					<DiscordjsSvgIcon width='120px' height='55px'>
						<DiscordjsIcon />
					</DiscordjsSvgIcon>
				</div>
			</FrameworksSectionParent>
		</>
	);
};

export default FrameworksSection;

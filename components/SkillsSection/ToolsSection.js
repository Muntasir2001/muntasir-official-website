import styled from 'styled-components';

import AdobeXDIcon from '../../public/skills-icon/adobeXDIcon.svg';
import FigmaIcon from '../../public/skills-icon/figmaIcon.svg';
import PostmanIcon from '../../public/skills-icon/postmanIcon.svg';
import DockerIcon from '../../public/skills-icon/dockerIcon.svg';

const ToolsSectionParent = styled.div`
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
			width: 40px;
			height: 40px;
			margin-right: ${(props) =>
				props.marginRight ? props.marginRight : '15px'};
		}
	}
`;

const ToolsSection = () => {
	const width = '50px';
	const height = '50px';

	return (
		<>
			<ToolsSectionParent>
				<h3>Tools</h3>
				<div className='icon-list'>
					<SvgIcon width={width} height={height}>
						<AdobeXDIcon />
					</SvgIcon>
					<SvgIcon width={width} height={height}>
						<FigmaIcon />
					</SvgIcon>
					<SvgIcon width={width} height={height}>
						<PostmanIcon />
					</SvgIcon>
					<SvgIcon width={width} height={height}>
						<DockerIcon />
					</SvgIcon>
				</div>
			</ToolsSectionParent>
		</>
	);
};

export default ToolsSection;

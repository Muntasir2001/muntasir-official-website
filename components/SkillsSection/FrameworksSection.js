import styled from 'styled-components';

import ReactjsIcon from '../../public/skills-icon/reactjsIcon.svg';
import NextjsIcon from '../../public/skills-icon/nextjsSvg';
import ExpressIcon from '../../public/skills-icon/expressjsSvg';
import FlaskIcon from '../../public/skills-icon/flaskIcon.svg';
import NodejsIcon from '../../public/skills-icon/nodejsIcon.svg';

const FrameworksSectionParent = styled.div`
	.icon-list {
		display: flex;
		margin-top: 25px;

		svg {
			margin-right: 15px;
		}
	}
`;

const FrameworksSection = () => {
	const width = '50px';
	const height = '50px';

	return (
		<>
			<FrameworksSectionParent>
				<h3>Languages</h3>
				<div className='icon-list'>
					<ReactjsIcon />
					<NextjsIcon />
				</div>
			</FrameworksSectionParent>
		</>
	);
};

export default FrameworksSection;

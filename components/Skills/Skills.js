import styled from 'styled-components';

import {
	CommonLayout,
	RedUnderline,
	SectionTitle,
	SectionTitleDiv,
	SectionDiv,
} from '../Utilities/Utils';

const SkillsParent = styled.div``;

const Skills = () => {
	return (
		<>
			<SkillsParent>
				<CommonLayout>
					<SectionTitle>Skills</SectionTitle>
					<RedUnderline />
				</CommonLayout>
			</SkillsParent>
		</>
	);
};

export default Skills;

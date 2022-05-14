import styled from 'styled-components';

import { RedUnderline, CommonLayout, SectionTitle } from '../Utilities/Utils';

const SkillsParent = styled.div``;

const Skills = () => {
	return (
		<>
			<SkillsParent>
				<SectionTitle>Skills</SectionTitle>
				<RedUnderline />
			</SkillsParent>
		</>
	);
};

export default Skills;

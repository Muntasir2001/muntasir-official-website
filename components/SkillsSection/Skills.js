import styled from 'styled-components';

import {
	CommonLayout,
	RedUnderline,
	SectionTitle,
	SectionTitleDiv,
	SectionDiv,
} from '../Utilities/Utils';

import LanguagesSection from './LanguagesSection';
import FrameworksSection from './FrameworksSection';
import ToolsSection from './ToolsSection';

const SkillsParent = styled.div`
	.languages-div {
		margin-top: 40px;
	}
`;

const Skills = () => {
	return (
		<>
			<SkillsParent>
				<CommonLayout>
					<SectionDiv>
						<SectionTitleDiv>
							<SectionTitle>Skills</SectionTitle>
							<RedUnderline />
						</SectionTitleDiv>
						<div className='languages-div'>
							<LanguagesSection />
						</div>
						<div className='frameworks-div'>
							<FrameworksSection />
						</div>
						<div className='tools-div'>
							<ToolsSection />
						</div>
					</SectionDiv>
				</CommonLayout>
			</SkillsParent>
		</>
	);
};

export default Skills;

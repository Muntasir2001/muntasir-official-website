import styled from 'styled-components';

import {
	CommonLayout,
	RedUnderline,
	SectionTitle,
	SectionTitleDiv,
	SectionDiv,
} from '../Utilities/Utils';

import LanguagesSection from './LanguagesSection';

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
						<div className='frameworks-div'></div>
					</SectionDiv>
				</CommonLayout>
			</SkillsParent>
		</>
	);
};

export default Skills;

import styled from 'styled-components';

import {
	CommonLayout,
	RedUnderline,
	SectionTitle,
	SectionTitleDiv,
	SectionDiv,
} from '../Utilities/Utils';

import JavaScriptIcon from '../../public/skills-icon/javascriptSvg';
import PythonIcon from '../../public/skills-icon/PythonSvg';
import SqlIcon from '../../public/skills-icon/sqlSvg';
import HtmlIcon from '../../public/skills-icon/htmlSvg';
import CssIcon from '../../public/skills-icon/cssSvg';

const SkillsParent = styled.div`
	.languages-div {
		margin-top: 40px;
	}

	.icon-list {
		display: flex;
		margin-top: 25px;

		svg {
			margin-right: 15px;
		}
	}
`;

const Skills = () => {
	const width = '50px';
	const height = '50px';

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
							<h3>Languages</h3>
							<div className='icon-list'>
								<JavaScriptIcon height={height} width={width} />
								<PythonIcon width={width} height={height} />
								<SqlIcon width={width} height={height} />
								<HtmlIcon width={width} height={height} />
								<CssIcon width={width} height={height} />
							</div>
						</div>
					</SectionDiv>
				</CommonLayout>
			</SkillsParent>
		</>
	);
};

export default Skills;

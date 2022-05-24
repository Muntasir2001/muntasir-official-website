import styled from 'styled-components';

import {
	CommonLayout,
	RedUnderline,
	SectionTitle,
	SectionTitleDiv,
	SectionDiv,
} from '../Utilities/Utils';

import JavaScriptIcon from '../../public/FrameworksSection-icon/javascriptSvg';
import PythonIcon from '../../public/FrameworksSection-icon/pythonSvg';
import SqlIcon from '../../public/FrameworksSection-icon/sqlSvg';
import HtmlIcon from '../../public/FrameworksSection-icon/htmlSvg';
import CssIcon from '../../public/FrameworksSection-icon/cssSvg';

const FrameworksSectionParent = styled.div`
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

const FrameworksSection = () => {
	const width = '50px';
	const height = '50px';

	return (
		<>
			<FrameworksSectionParent>
				<CommonLayout>
					<SectionDiv>
						<SectionTitleDiv>
							<SectionTitle>Frameworks</SectionTitle>
							<RedUnderline />
						</SectionTitleDiv>
						<div className='languages-div'>
							<h3>Languages</h3>
							<div className='icon-list'></div>
						</div>
					</SectionDiv>
				</CommonLayout>
			</FrameworksSectionParent>
		</>
	);
};

export default FrameworksSection;

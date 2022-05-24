import styled from 'styled-components';

import JavaScriptIcon from '../../public/skills-icon/javascriptSvg';
import PythonIcon from '../../public/skills-icon/pythonSvg';
import SqlIcon from '../../public/skills-icon/sqlSvg';
import HtmlIcon from '../../public/skills-icon/htmlSvg';
import CssIcon from '../../public/skills-icon/cssSvg';

const LanguagesSectionParent = styled.div`
	.icon-list {
		display: flex;
		margin-top: 25px;

		svg {
			margin-right: 15px;
		}
	}
`;

const LanguagesSection = () => {
	const width = '50px';
	const height = '50px';

	return (
		<>
			<LanguagesSectionParent>
				<h3>Languages</h3>
				<div className='icon-list'>
					<JavaScriptIcon height={height} width={width} />
					<PythonIcon width={width} height={height} />
					<SqlIcon width={width} height={height} />
					<HtmlIcon width={width} height={height} />
					<CssIcon width={width} height={height} />
				</div>
			</LanguagesSectionParent>
		</>
	);
};

export default LanguagesSection;

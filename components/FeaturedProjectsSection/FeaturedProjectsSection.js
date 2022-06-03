import styled from 'styled-components';

import {
	CommonLayout,
	RedUnderline,
	SectionTitle,
	SectionTitleDiv,
	SectionDiv,
} from '../Utilities/Utils';
import FeaturedProjectCard from './FeaturedProjectCard';

const FeaturedProjectsSectionParent = styled.div`
	.project-cards {
		display: flex;
		margin-top: 40px;
	}
`;

const FeaturedProjectsSection = () => {
	return (
		<>
			<FeaturedProjectsSectionParent>
				<CommonLayout>
					<SectionDiv>
						<SectionTitleDiv>
							<SectionTitle>Featured Projects</SectionTitle>
							<RedUnderline />
							<div className='project-cards'>
								<FeaturedProjectCard />
							</div>
						</SectionTitleDiv>
					</SectionDiv>
				</CommonLayout>
			</FeaturedProjectsSectionParent>
		</>
	);
};

export default FeaturedProjectsSection;

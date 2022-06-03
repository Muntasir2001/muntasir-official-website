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
		display: grid;
		gap: 20px;
		margin-top: 40px;
		grid-template-columns: 1fr 1fr;

		/* mobile */
		@media screen and (max-width: 780px) {
			grid-template-columns: 1fr;
		}
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
								<FeaturedProjectCard />
								<FeaturedProjectCard />
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

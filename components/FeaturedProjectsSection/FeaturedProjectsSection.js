import styled from 'styled-components';

import {
	CommonLayout,
	RedUnderline,
	SectionTitle,
	SectionTitleDiv,
	SectionDiv,
} from '../Utilities/Utils';
import FeaturedProjectCard from './FeaturedProjectCard';

import featuredProjects from '../../data/featuredProjects.json';

const FeaturedProjectsSectionParent = styled.div`
	.project-cards {
		display: grid;
		gap: 20px;
		margin-top: 40px;
		grid-template-columns: 1fr 1fr;

		/* mobile */
		@media screen and (max-width: 780px) {
			display: flex;
			flex-direction: column;
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
								{featuredProjects.projects.map((data) => {
									return (
										<FeaturedProjectCard
											title={data.title}
											description={data.description}
											websiteLink={data.websiteLink}
											githubLink={data.githubLink}
											tags={data.tags}
										/>
									);
								})}
								{/* 
								<FeaturedProjectCard />
								<FeaturedProjectCard />
								<FeaturedProjectCard /> */}
							</div>
						</SectionTitleDiv>
					</SectionDiv>
				</CommonLayout>
			</FeaturedProjectsSectionParent>
		</>
	);
};

export default FeaturedProjectsSection;

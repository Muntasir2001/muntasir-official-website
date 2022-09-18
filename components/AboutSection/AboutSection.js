import styled from 'styled-components';

import {
	CommonLayout,
	RedUnderline,
	SectionTitle,
	SectionTitleDiv,
	SectionDiv,
} from '../Utilities/Utils';

const AboutSectionParent = styled.div`
	.first-para {
		padding: 50px 0px 0px 0px;

		span {
			color: #ff4454;
		}

		@media screen and (max-width: 1024px) {
			font-size: 1rem;
		}
	}

	.second-para {
		padding: 15px 0px 0 0px;
	}

	@media screen and (max-width: 1024px) {
		.first-para,
		.second-para {
			font-size: 1.1rem;
		}
	}
`;

const AboutSection = () => {
	return (
		<>
			<AboutSectionParent>
				<CommonLayout>
					<SectionDiv>
						<SectionTitleDiv>
							<SectionTitle>about me</SectionTitle>
							<RedUnderline />
						</SectionTitleDiv>
						<p className='first-para'>
							Hi, I am <span>Muntasir</span> (aka noob_dev54),
							self-taught Full Stack Web Developer and final year
							Undergrad Computer Science student. For the past 2 years, I
							have been working with JavaScript frameworks like ReactJS,
							NextJS and NodeJS and recently, I started learning Flutter.
							It all started when my father introduced me to Web
							Development back in 2017. Since then, I grew my skillsets,
							landed a Full Time Software Engineering placement role and
							created 3+ Web Apps for different clients. Apart from
							working full time, I work on my side projects to stay at
							the top of my game.
						</p>
						<p className='second-para'>
							I love learning new technologies and enjoy trying out new
							projects. Along with learning, I also love to teach other
							people. Due to my pre-experience with coding, I found easy
							to learn other technologies and stack like Java and C. This
							allowed me to help my friends with their assignments and
							solve bugs in their program.
						</p>
					</SectionDiv>
				</CommonLayout>
			</AboutSectionParent>
		</>
	);
};

export default AboutSection;

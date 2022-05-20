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
							Hi, I am <span>Muntasir</span> (aka noob_dev), self-taught
							Front-end Web Developer and second year Undergrad Computer
							Science student. For the past 2 years, I have been learning
							HTML5 and CSS3 from various resources (YouTube, Oneclick
							Academy, Udemy) and recently, I started learning
							JavaScript. It all started when my father introduced Web
							Development to me back in 2017. Since then, I grew my
							skillsets, worked on couple of personal projects and now, I
							work with a society in my university as a Web Manager. I
							have learned ReactJS, DiscordJS and NextJS and worked on
							couple of projects with these langauges (project section
							coming soon!)
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

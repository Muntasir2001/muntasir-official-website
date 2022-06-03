import styled from 'styled-components';

import GithubIcon from '../../public/other-icons/githubSvg';
import FolderIcon from '../../public/other-icons/folderSvg';
import LinkIcon from '../../public/other-icons/linkIconSvg';

const FeaturedProjectCardParent = styled.div`
	padding: 50px;
	background-color: #313234;
	display: flex;
	flex-direction: column;

	.top-part {
		display: flex;
		justify-content: space-between;

		.top-part-left {
		}

		.top-part-right {
			display: flex;
			flex-direction: column;
		}
	}

	.bottom-part {
		margin-top: -12px;
		display: flex;
		flex-direction: column;
		/* justify-content: space-between; */
		height: 100%;

		.description {
			margin-top: 10px;
			font-size: 1rem;
			margin-bottom: auto;
		}

		.tags {
			display: flex;
			margin-top: 30px;

			p {
				font-size: 0.85rem;
				margin-right: 10px;
			}
		}
	}

	/* mobile */
	@media screen and (max-width: 780px) {
		padding: 20px;

		.bottom-part {
			.title {
				font-size: 1.4rem;
			}

			.description {
				font-size: 0.9rem;
			}

			.tags {
				p {
					font-size: 0.75rem;
				}
			}
		}
	}
`;

const FeaturedProjectCard = (props) => {
	const { websiteLink, title, description, tags, githubLink } = props;

	const width = '33px';
	const height = '33px';

	return (
		<>
			<FeaturedProjectCardParent>
				<div className='top-part'>
					<div className='top-part-left'>
						<FolderIcon width={width} height={height} />
					</div>
					<div className='top-part-right'>
						<a href={githubLink} target='_blank'>
							<GithubIcon width={width} height={height} />
						</a>
						<a href={websiteLink} target='_blank'>
							<LinkIcon width={width} height={height} marginTop='15px' />
						</a>
					</div>
				</div>
				<div className='bottom-part'>
					<h2 className='title'>{title}</h2>
					<p className='description'>{description}</p>
					<div className='tags'>
						{tags.map((tag) => {
							return <p>{tag}</p>;
						})}
					</div>
				</div>
			</FeaturedProjectCardParent>
		</>
	);
};

export default FeaturedProjectCard;

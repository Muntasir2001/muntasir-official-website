import styled from 'styled-components';

import GithubIcon from '../../public/other-icons/githubSvg';
import FolderIcon from '../../public/other-icons/folderSvg';
import LinkIcon from '../../public/other-icons/linkIconSvg';

const FeaturedProjectCardParent = styled.div`
	width: 600px;
	background-color: #313234;

	.top-part {
		display: flex;
		justify-content: space-between;
		padding: 50px;

		.top-part-left {
		}

		.top-part-right {
			display: flex;
			flex-direction: column;
		}
	}
`;

const FeaturedProjectCard = (props) => {
	const { name, link, title, description } = props;

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
						<a href='#'>
							<GithubIcon width={width} height={height} />
						</a>
						<a href='#'>
							<LinkIcon width={width} height={height} marginTop='15px' />
						</a>
					</div>
				</div>
			</FeaturedProjectCardParent>
		</>
	);
};

export default FeaturedProjectCard;

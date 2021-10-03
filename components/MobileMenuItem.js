import styled from 'styled-components';

const MobileMenuItemParent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 30px;

	.link {
		font-size: 1.2rem;
		text-decoration: none;

		&:visited {
			text-decoration: none;
			color: #fff;
		}
	}
`;

const MobileMenuItem = (props) => {
	const { name, link } = props;

	return (
		<>
			<MobileMenuItemParent>
				<a href={link} className='link'>
					{name}
				</a>
			</MobileMenuItemParent>
		</>
	);
};

export default MobileMenuItem;

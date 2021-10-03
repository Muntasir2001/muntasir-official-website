import MenuCloseIcon from '../public/svg/MenuCloseIcon';
import MobileMenuItem from './MobileMenuItem';

import styled from 'styled-components';

const MobileMenuParent = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	background-color: #000;
	align-items: center;
	padding: 10px 15px;
	top: 0.1%;
	height: 100%;
	width: 100%;
	left: 0%;
	background-color: #1b1c1e;

	.menu-close-icon {
		justify-self: flex-start;
		align-self: flex-end;
	}

	.mobile-menu-items {
		margin-top: 40px;
	}
`;

const MobileMenu = (props) => {
	const { onClick } = props;

	return (
		<>
			<MobileMenuParent>
				<div className='menu-close-icon'>
					<MenuCloseIcon onClick={onClick} />
				</div>
				<div className='mobile-menu-items'>
					<MobileMenuItem name='HOME' link='#' />
					<MobileMenuItem name='ABOUT' link='#about' />
					<MobileMenuItem name='CONTACT' link='#contact' />
				</div>
			</MobileMenuParent>
		</>
	);
};

export default MobileMenu;

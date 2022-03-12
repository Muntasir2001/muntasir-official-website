import { useState } from 'react';

// import { Link } from 'react-router-dom';

import MobileMenu from './MobileMenu';
import { CommonLayout } from './Utils';
import HamburgerMenuIcon from '../public/svg/HamburgerMenuIcon';

import style from '../styles/Navbar.module.scss';

const Navbar = () => {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const setMenuState = () => {
		setOpenMobileMenu((prev) => !prev);
	};

	return (
		<>
			<div className={style.navbar}>
				<CommonLayout>
					<div className={style.logo}>
						{/* <h2>Noob Dev</h2> */}
						<a href="'">
							<img
								src='/noob_dev_final_cropped_transparent.svg'
								alt='noob dev logo'
							/>
						</a>
					</div>
				</CommonLayout>
				<CommonLayout>
					<div className={style['navbar-items']}>
						<ul>
							<li>
								<a href='#'>Home</a>
							</li>
							<li>
								<a href='#about'>About</a>
							</li>
							<li>
								<a href='#contact'>Contact Me</a>
							</li>
						</ul>
					</div>
				</CommonLayout>
				<div
					className={style['hamburger-menu-icon']}
					onClick={setMenuState}
				>
					<CommonLayout>
						<HamburgerMenuIcon
							width='30px'
							height='30px'
							color='#fff'
							// onClick={setMenuState}
						/>
					</CommonLayout>
				</div>
				{openMobileMenu && <MobileMenu onClick={setMenuState} />}
			</div>
		</>
	);
};

export default Navbar;

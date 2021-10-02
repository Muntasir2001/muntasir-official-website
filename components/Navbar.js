// import { Link } from 'react-router-dom';

import { CommonLayout } from './Utils';

import navbarStyle from '../styles/Navbar.module.scss';

const Navbar = () => {
	return (
		<>
			<div className={navbarStyle.navbar}>
				<CommonLayout>
					<div className={navbarStyle.logo}>
						{/* <h2>Noob Dev</h2> */}
						<a href="'">
							<img
								src='/noob_dev_final_cropped_transparent.svg'
								alt='noob dev logo'
							/>
						</a>
					</div>
				</CommonLayout>
				<div className={navbarStyle['navbar-items']}>
					<CommonLayout>
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
					</CommonLayout>
				</div>
			</div>
		</>
	);
};

export default Navbar;

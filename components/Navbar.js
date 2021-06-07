import navbarStyle from '../styles/Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<div className={navbarStyle.navbar}>
				<div className={navbarStyle.logo}>
					{/* <h2>Noob Dev</h2> */}
					<a href="'">
						<img
							src='/noob_dev_final_cropped_transparent.svg'
							alt='noob dev logo'
						/>
					</a>
				</div>
				<div className={navbarStyle['navbar-items']}>
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
			</div>
		</>
	);
};

export default Navbar;

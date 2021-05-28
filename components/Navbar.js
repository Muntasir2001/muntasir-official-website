import navbarStyle from '../styles/Navbar.module.scss';

const Navbar = () => {
	return (
		<>
			<div className={navbarStyle.navbar}>
				<div className={navbarStyle.logo}>
					<h2>Noob Dev</h2>
				</div>
				<div className={navbarStyle['navbar-items']}>
					<ul>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;

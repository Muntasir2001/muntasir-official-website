import footerStyle from '../styles/Footer.module.scss';

const Footer = () => {
	return (
		<>
			<footer className={footerStyle.footer}>
				<div className={footerStyle.title}>
					<a href='#'>
						{/* <h1>Noob Dev</h1> */}
						<img
							src='/noob_dev_final_cropped_transparent.svg'
							alt='noob dev logo'
						/>
					</a>
				</div>
				<div className={footerStyle.links}>
					<ul>
						<li>
							<a href='#'>home</a>
						</li>
						<li>
							<a href='#about'>about</a>
						</li>
						<li>
							<a href='#contact'>contact</a>
						</li>
					</ul>
				</div>
				<div className={footerStyle['social-medias']}>
					<a href='#'>
						<img src='/fb-icon.svg' alt='Facebook icon' />
					</a>
					<a href='#'>
						<img src='/insta-icon.svg' alt='Instagram icon' />
					</a>
					<a href='/'>
						<img src='/linkedin-icon.svg' alt='LinkedIn icon' />
					</a>
					<a href='/'>
						<img src='/github-icon.svg' alt='GitHub icon' />
					</a>
				</div>
				<div className={footerStyle.copyright}>
					<p>Copyright ©2021 All rights reserved</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;

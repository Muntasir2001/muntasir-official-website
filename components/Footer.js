import InstagramIcon from '../public/social-media-icons/instagramSvg';
import FacebookIcon from '../public/social-media-icons/facebookSvg';
import LinkedinIcon from '../public/social-media-icons/linkedinSvg';
import GithubIcon from '../public/other-icons/githubSvg';

import style from '../styles/Footer.module.scss';

const Footer = () => {
	return (
		<>
			<footer className={style.footer}>
				<div className={style.title}>
					<a href='#'>
						{/* <h1>Noob Dev</h1> */}
						<img
							src='/noob_dev_final_cropped_transparent.svg'
							alt='noob dev logo'
						/>
					</a>
				</div>
				<div className={style.links}>
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
				<div className={style['social-medias']}>
					<a href='#'>
						<FacebookIcon width={25} height={25} />
					</a>
					<a href='https://www.instagram.com/noob_dev54/'>
						<InstagramIcon width={25} height={25} />
					</a>
					<a href='https://www.linkedin.com/in/muntasir-enam-al-huda/'>
						<LinkedinIcon width={25} height={25} />
					</a>
					<a href='https://github.com/Muntasir2001' target='_blank'>
						<GithubIcon width={25} height={25} />
					</a>
				</div>
				<div className={style.copyright}>
					<p>Copyright ©2021 All rights reserved</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;

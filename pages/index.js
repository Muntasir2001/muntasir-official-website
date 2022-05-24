import Head from 'next/head';

import { CommonLayout, BlackBkgSection } from '../components/Utilities/Utils';
import ContactSection from '../components/ContactSection/ContactSection';
import AboutSection from '../components/AboutSection/AboutSection';
import Skills from '../components/SkillsSection/Skills';

import style from '../styles/Home.module.scss';

export default function home() {
	return (
		<>
			<Head>
				<title>Noob Dev</title>
				<meta name='description' content='Official Website of Noob Dev' />
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				></link>
			</Head>
			<div className={style.hero}>
				<CommonLayout>
					<div className={style.title}>
						<h1>hey,</h1>
						<h1>
							i am <span>Muntasir</span>
						</h1>
					</div>
					<div className={style.para}>
						<p>
							an aspiring student who loves technology and working to be
							a full stack developer.
						</p>
					</div>
				</CommonLayout>
			</div>
			<BlackBkgSection>
				<div id='about'>
					<AboutSection />
				</div>
				<div id='skills'>
					<Skills />
				</div>
			</BlackBkgSection>
			<div id='contact'>
				<ContactSection />
			</div>
		</>
	);
}

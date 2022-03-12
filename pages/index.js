import Head from 'next/head';

import { CommonLayout } from '../components/Utilities/Utils';
import ContactSection from '../components/ContactSection/ContactSection';

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
			<div className={style.about} id='about'>
				<CommonLayout>
					<h1>about me</h1>
					<div className={style['red-underline']}></div>
					<p className={style['first-para']}>
						Hi, I am <span>Muntasir</span> (aka noob_dev), self-taught
						Front-end Web Developer and second year Undergrad Computer
						Science student. For the past 2 years, I have been learning
						HTML5 and CSS3 from various resources (YouTube, Oneclick
						Academy, Udemy) and recently, I started learning JavaScript.
						It all started when my father introduced Web Development to me
						back in 2017. Since then, I grew my skillsets, worked on
						couple of personal projects and now, I work with a society in
						my university as a Web Manager. I have learned ReactJS,
						DiscordJS and NextJS and worked on couple of projects with
						these langauges (project section coming soon!)
					</p>
					<p className={style['second-para']}>
						I love learning new technologies and enjoy trying out new
						projects. Along with learning, I also love to teach other
						people. Due to my pre-experience with coding, I found easy to
						learn other technologies and stack like Java and C. This
						allowed me to help my friends with their assignments and solve
						bugs in their program.
					</p>
				</CommonLayout>
			</div>
			<ContactSection />
		</>
	);
}

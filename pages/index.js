import Head from 'next/head';
import { useState } from 'react';
import { CommonLayout } from '../components/Utils';
import homeStyle from '../styles/Home.module.scss';

function encode(data) {
	return Object.keys(data)
		.map(
			(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
		)
		.join('&');
}

export default function home() {
	const [info, setInfo] = useState({});

	const handleChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		alert('form submitted successfully');

		const form = e.target;
		console.log(form.getAttribute('name'));
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': form.getAttribute('name'),
				...info,
			}),
		})
			.then(() => console.log('success'))
			.catch((err) => console.log(err));
	};

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
			<div className={homeStyle.hero}>
				<CommonLayout>
					<div className={homeStyle.title}>
						<h1>hey,</h1>
						<h1>
							i am <span>Muntasir</span>
						</h1>
					</div>
					<div className={homeStyle.para}>
						<p>
							an aspiring student who loves technology and working to be
							a full stack developer.
						</p>
					</div>
				</CommonLayout>
			</div>
			<div className={homeStyle.about} id='about'>
				<CommonLayout>
					<h1>about me</h1>
					<div className={homeStyle['red-underline']}></div>
					<p className={homeStyle['first-para']}>
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
					<p className={homeStyle['second-para']}>
						I love learning new technologies and enjoy trying out new
						projects. Along with learning, I also love to teach other
						people. Due to my pre-experience with coding, I found easy to
						learn other technologies and stack like Java and C. This
						allowed me to help my friends with their assignments and solve
						bugs in their program.
					</p>
				</CommonLayout>
			</div>
			<div className={homeStyle['contact-me']} id='contact'>
				<CommonLayout>
					<h1>contact me</h1>
					<div className={homeStyle['red-underline']}></div>
					<div className={homeStyle['contact-me-body']}>
						<form
							name='contact'
							method='POST'
							data-netlify='true'
							onSubmit={handleSubmit}
						>
							{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
							<input type='hidden' name='contact' value='contact' />
							<p hidden>
								<label>
									Don’t fill this out:{' '}
									<input name='bot-field' onChange={handleChange} />
								</label>
							</p>
							<div
								className={`${homeStyle['name-field']} ${homeStyle['field']}`}
							>
								<label htmlFor='name'>Name</label>
								<input
									type='text'
									name='name'
									onChange={handleChange}
								/>
							</div>
							<div
								className={`${homeStyle['email-field']} ${homeStyle['field']}`}
							>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									name='email'
									onChange={handleChange}
								/>
							</div>
							<div
								className={`${homeStyle['message-field']} ${homeStyle['field']}`}
							>
								<label htmlFor='name'>Message</label>
								<textarea
									name='message'
									id=''
									onChange={handleChange}
								></textarea>
							</div>
							<div className={homeStyle['submit-btn']}>
								<input type='submit' value='Submit' />
							</div>
						</form>
						<div className={homeStyle.sidebar}>
							<div className={homeStyle.title}>
								<h2>contact info</h2>
								<div className={homeStyle['red-underlines']}></div>
							</div>
							<ul>
								<li>
									<a
										href='https://github.com/Muntasir2001'
										target='_blank'
									>
										<img
											src='/sidebar/github.svg'
											alt='github logo'
										/>
										<p>Muntasir2001</p>
									</a>
								</li>
								<li>
									<a
										href='https://discord.gg/vNe9QVrWNa'
										target='_blank'
									>
										<img
											src='/sidebar/discord.svg'
											alt='discord logo'
										/>
										<p>Join my Discord server</p>
									</a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/noob_dev54/'
										target='_blank'
									>
										<img
											src='/sidebar/instagram.svg'
											alt='instagram logo'
										/>
										<p>noob_dev54</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</CommonLayout>
			</div>
		</>
	);
}

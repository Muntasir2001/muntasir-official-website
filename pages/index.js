import Head from 'next/head';
import homeStyle from '../styles/Home.module.scss';

export default function home() {
	return (
		<>
			<Head>
				<title>Noob Dev</title>
				<meta name='description' content='Official Website of Noob Dev' />
			</Head>
			<div className={homeStyle.hero}>
				<div className={homeStyle.title}>
					<h1>hey,</h1>
					<h1>
						i am <span>Muntasir</span>
					</h1>
				</div>
				<div className={homeStyle.para}>
					<p>
						an aspiring student who loves technology and working to be a
						full stack developer.
					</p>
				</div>
			</div>
			<div className={homeStyle.about}>
				<h1>about me</h1>
				<div className={homeStyle['red-underline']}></div>
				<p className={homeStyle['first-para']}>
					Hi, I am <span>Muntasir</span> (aka noob_dev), self-taught
					Front-end Web Developer and second year Undergrad Computer
					Science student. For the past 2 years, I have been learning HTML5
					and CSS3 from various resources (YouTube, Oneclick Academy,
					Udemy) and recently, I started learning JavaScript. It all
					started when my father introduced Web Development to me back in
					2017. Since then, I grew my skillsets, worked on couple of
					personal projects and now, I work with a society in my university
					as a Web Manager.
				</p>
				<p className={homeStyle['second-para']}>
					I love learning new technologies and enjoy trying out new
					projects. Along with learning, I also love to teach other people.
					Due to my pre-experience with coding, I found easy to learn other
					technologies and stack like Java and C. This allowed me to help
					my friends with their assignments and solve bugs in their
					program.
				</p>
			</div>
			<div className={homeStyle['contact-me']}>
				<h1>contact me</h1>
				<div className={homeStyle['red-underline']}></div>
				<form>
					<div
						className={`${homeStyle['name-field']} ${homeStyle['field']}`}
					>
						<label htmlFor='name'>Name</label>
						<input type='text' />
					</div>
					<div
						className={`${homeStyle['email-field']} ${homeStyle['field']}`}
					>
						<label htmlFor='name'>Email</label>
						<input type='email' />
					</div>
					<div
						className={`${homeStyle['message-field']} ${homeStyle['field']}`}
					>
						<label htmlFor='name'>Message</label>
						<textarea name='text' id=''></textarea>
					</div>
					<div className={homeStyle['submit-btn']}>
						<input type='submit' value='Submit' />
					</div>
				</form>
			</div>
		</>
	);
}

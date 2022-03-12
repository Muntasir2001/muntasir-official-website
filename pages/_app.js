import '../styles/globals.scss';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Noob Dev</title>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon/favicon-32x32.png'
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />;
			</Layout>
		</>
	);
}

export default MyApp;

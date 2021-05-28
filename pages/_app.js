import '../styles/globals.scss';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Noob Dev</title>
			</Head>
			<Layout>
				<Component {...pageProps} />;
			</Layout>
		</>
	);
}

export default MyApp;

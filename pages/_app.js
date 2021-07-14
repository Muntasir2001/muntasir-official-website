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
				{/* <link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon/favicon-16x16.png'
				></link> */}
			</Head>
			<Layout>
				<Component {...pageProps} />;
			</Layout>
		</>
	);
}

export default MyApp;

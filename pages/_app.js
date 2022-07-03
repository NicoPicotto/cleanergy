import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/NavBar/Navbar';

import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</ChakraProvider>
	);
}

export default MyApp;

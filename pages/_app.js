import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/NavBar/Navbar';

import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
       <Navbar />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;

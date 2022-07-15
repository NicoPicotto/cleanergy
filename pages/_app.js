import { ChakraProvider } from '@chakra-ui/react';

import MainLayout from '../components/MainLayout/MainLayout';

import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</ChakraProvider>
	);
}

export default MyApp;

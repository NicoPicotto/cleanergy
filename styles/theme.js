import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	brand: {
		primario: '#0D70A7',
		secundario: '#0B8E36',
	},
};

const theme = extendTheme({ colors });

export default theme;

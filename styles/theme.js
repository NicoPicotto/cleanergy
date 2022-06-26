import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	brand: {
		primario: '#3182CE',
		secundario: '#2F855A',
	},
};

const theme = extendTheme({ colors });

export default theme;

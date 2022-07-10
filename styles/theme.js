import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	brand: {
		primario: '#3182CE',
		secundario: '#2F855A',
        terciario: "#A0AEC0"
	},
};

const fonts = {
	fonts: {
		open: `'Open Sans', sans-serif`,
		raleway: `'Raleway', sans-serif`,
	  },
}

const theme = extendTheme({ colors, fonts });

export default theme;

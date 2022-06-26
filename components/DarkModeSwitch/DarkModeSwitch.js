import { useColorMode, IconButton, Tooltip } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Tooltip label='¡Ahorremos energía!'>
			<IconButton
				aria-label='¡Ahorremos energía!'
				icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
				onClick={toggleColorMode}
				variant={'ghost'}
				color={'brand.primario'}
			/>
		</Tooltip>
	);
};

export default DarkModeSwitch;

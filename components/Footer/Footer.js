import {
	Flex,
	Text,
	Button,
	Stack,
	Image,
	Box,
	useColorMode,
} from '@chakra-ui/react';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const { colorMode } = useColorMode();

	return (
		<>
			<Flex
				bgColor={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
				height={'25vh'}
				padding={10}
				justifyContent={'space-between'}
			>
				<Box
					borderRadius={10}
					justifyContent={'center'}
					height={'fit-content'}
					width={'25%'}
					padding={2}
				>
					<Image
						src='https://cleanergy.com.ar/wp-content/uploads/2016/07/logo512pxspa.png'
						alt='Logo Cleanergy'
						objectFit='cover'
						width={'15em'}
						cursor={'pointer'}
						filter={colorMode === 'dark' && 'brightness(0) invert(1)'}
                        marginBottom={3}
					/>
					<Text as={'i'}>
						Es un hecho establecido hace demasiado tiempo que un lector se
						distraerá con el contenido del texto de un sitio mientras que mira
						su diseño.
					</Text>
				</Box>
				<Flex flexDirection={'row'}>
					<Stack
						flexDirection={'column'}
						spacing={5}
						alignItems={'flex-start'}
						padding={5}
					>
						<Button variant={'link'}> Nosotros</Button>
						<Button variant={'link'}> Servicios Biogás</Button>
						<Button variant={'link'}> Servicios Solar</Button>
					</Stack>
					<Stack
						flexDirection={'column'}
						spacing={5}
						alignItems={'flex-start'}
						padding={5}
					>
						<Button variant={'link'}> Clientes Biogás</Button>
						<Button variant={'link'}> Clientes Solar</Button>
					</Stack>
					<Stack
						flexDirection={'column'}
						spacing={5}
						alignItems={'flex-start'}
						padding={5}
					>
						<Button variant={'link'}> Proyecto 3C Biogás</Button>
					</Stack>
				</Flex>
				<Box width={'30%'}></Box>
			</Flex>
			<Flex height={'5vh'} alignItems={'center'} justifyContent={'center'} bgColor={colorMode === "dark" ? null : "brand.primario"}>
				<Text fontSize={12} color={'white'}>
					© {currentYear} Cleanergy - All rights reserved.{' '}
				</Text>
			</Flex>
		</>
	);
};

export default Footer;

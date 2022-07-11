import {
	Flex,
	Heading,
	ButtonGroup,
	Button,
	Text,
	useColorMode,
} from '@chakra-ui/react';
import react, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
const MainLanding = () => {
	const { colorMode } = useColorMode();
	const [isMobile, setIsMobile] = useState(false);

	//Screen Size para mobile
	const handleResize = () => {
		if (window.innerWidth < 1100) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	// Event Listener para screen
	useEffect(() => {
		window.addEventListener('resize', handleResize);
	});

	return (
		<>
			{isMobile ? (
				<Flex flexDir={"column"} padding={15} alignItems={"center"}>
					<Heading
						size={'lg'}
						color={'brand.secundario'}
						padding={3}
						fontFamily={'fonts.open'}
						textAlign={"center"}
					>
						Creamos economías circulares
					</Heading>
					<Text fontSize='lg' color={'brand.terciario'} padding={15} as={'i'} textAlign={"center"}>
						Utilizando residuos como recursos que crean valor para la comunidad,
						la industria y el medio ambiente.
					</Text>
					<ButtonGroup
						size={'md'}
						padding={3}
						spacing={5}
						colorScheme={'green'}
					>
						<Button rightIcon={<ChevronRightIcon />}>Descubrí más</Button>
						<Link href='#footer'>
							<Button variant={'outline'}>Contactate</Button>
						</Link>
					</ButtonGroup>
				</Flex>
			) : (
				<Flex
					alignItems={'center'}
					bgImage='/landing.jpg'
					height={'70vh'}
					bgRepeat={'no-repeat'}
					backgroundAttachment={'fixed'}
					bgSize={'cover'}
					backgroundPosition={'center top'}
					fontFamily={'fonts.open'}
				>
					<Flex
						justifyContent={'center'}
						width={'40vw'}
						flexDirection={'column'}
						padding={15}
						backdropBlur={'xl'}
						borderRadius={20}
						marginRight={-20}
						marginLeft={40}
						backdropFilter={'auto'}
						bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
						boxShadow='lg'
					>
						<Heading
							size={'lg'}
							color={'brand.secundario'}
							padding={3}
							fontFamily={'fonts.open'}
						>
							Creamos economías circulares
						</Heading>
						<Text fontSize='lg' color={'brand.terciario'} padding={3} as={'i'}>
							Utilizando residuos como recursos que crean valor para la
							comunidad, la industria y el medio ambiente.
						</Text>
						<ButtonGroup
							size={'lg'}
							padding={3}
							spacing={5}
							colorScheme={'green'}
						>
							<Button rightIcon={<ChevronRightIcon />}>Descubrí más</Button>
							<Link href='#footer'>
								<Button variant={'outline'}>Contactate</Button>
							</Link>
						</ButtonGroup>
					</Flex>
				</Flex>
			)}
		</>
	);
};

export default MainLanding;

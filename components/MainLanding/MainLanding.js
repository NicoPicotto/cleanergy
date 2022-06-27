import {
	Flex,
	Image,
	Heading,
	ButtonGroup,
	Button,
	Text,
	useColorMode
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
const MainLanding = () => {

	const { colorMode } = useColorMode();

	return (
		<>
			<Flex alignItems={'center'} bgImage='/landing.jpg' height={"65vh"} bgRepeat={"no-repeat"} backgroundAttachment={"fixed"} bgSize={"contain"} >
				<Flex
					justifyContent={'center'}
					width={'40vw'}
					flexDirection={'column'}
					padding={15}
					backdropBlur={"xl"}
					borderRadius={20}
					marginRight={-20}
					marginLeft={40}
					backdropFilter={"auto"}
					bgColor={colorMode === "dark" ? "#1a202c" : "white"}
					boxShadow='lg'
				>
					<Heading color={'brand.secundario'} padding={3}>
						Creamos economías circulares
					</Heading>
					<Text fontSize='xl' color={'brand.terciario'} padding={3} as={'i'}>
						Utilizando residuos como recursos que crean valor para la comunidad,
						la industria y el medio ambiente.
					</Text>
					<ButtonGroup
						size={'lg'}
						padding={3}
						spacing={5}
						colorScheme={'green'}
					>
						<Button rightIcon={<ChevronRightIcon />}>Descubrí más</Button>
						<Button variant={'outline'}>Contactate</Button>
					</ButtonGroup>
				</Flex>
				{/* <Flex alignItems={'center'} width={'100vw'} position={"relative"} borderColor={"red"} borderWidth={1}>
					<Image
						src='/landing.jpg'
						objectFit='cover'
						alt='Territorio con energías renovables'
						borderLeftRadius={20}
					/>
				</Flex> */}
			</Flex>
		</>
	);
};

export default MainLanding;

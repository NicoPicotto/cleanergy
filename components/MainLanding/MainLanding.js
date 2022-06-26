import { Flex, Image, Heading, ButtonGroup, Button, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
const MainLanding = () => {
	return (
		<>
			<Flex justifyContent={'space-between'} alignItems={'center'}>
				<Flex
					justifyContent={'center'}
					width={'50vw'}
					flexDirection={'column'}
					padding={15}
					bgColor={'white'}
					borderRadius={20}
					marginRight={-20}
					zIndex={100}
					marginLeft={40}
                    boxShadow={"lg"}
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
				<Flex alignItems={'center'}>
					<Image
						src='/landing.jpg'
						objectFit='cover'
						width={'70vw'}
						alt='Territorio con energías renovables'
                        borderLeftRadius={20}
					/>
				</Flex>
			</Flex>
		</>
	);
};

export default MainLanding;

// import Image from 'next/image';
import {
	Box,
	Heading,
	Flex,
	Text,
	Stack,
	Divider,
	Button,
	Image,
	useColorMode,
	useMediaQuery
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const ServiceCard = ({ imageSrc, title, text, goTo }) => {
	const { colorMode } = useColorMode();

	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Box
			width={isMobile ? '100%' : '22%'}
			borderRadius={20}
			backdropFilter={'auto'}
			bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
			boxShadow='lg'
			borderColor={colorMode === 'dark' && 'brand.secundario'}
			borderWidth={colorMode === 'dark' && 1}
			overflow={'hidden'}
			marginTop={5}
			marginBottom={5}
		>
			<Box overflow={'hidden'}>
				<Image src={imageSrc} alt='Imagen del Servicio' width={"100%"} />
			</Box>
			<Stack padding={5}>
				<Heading color={'brand.secundario'} fontSize={'1.5em'}>
					{title}
				</Heading>
				<Divider color={'brand.primario'} />
				<Text color={'brand.terciario'} fontSize='md'>
					{text}
				</Text>
				<Button
					width={'fit-content'}
					colorScheme={'green'}
					rightIcon={<ChevronRightIcon />}
				>
					<Link href={goTo}>Ver más </Link>
				</Button>
			</Stack>
		</Box>
	);
};

export default ServiceCard;

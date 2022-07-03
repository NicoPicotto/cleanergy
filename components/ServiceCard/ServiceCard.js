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
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const ServiceCard = ({ imageSrc, title, text, goTo }) => {
	const { colorMode } = useColorMode();

	return (
		<Box
			width={'30em'}
			borderRadius={20}
			backdropFilter={'auto'}
			bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
			boxShadow='lg'
            borderColor={colorMode === "dark" && "brand.secundario"}
            borderWidth={colorMode === "dark" && 1}
            overflow={"hidden"}
		>
			<Box height={'60%'} width={'100%'}>
				<Image
					src={imageSrc}
					alt='Imagen del Servicio'
					height={'100%'}
				/>
			</Box>
			<Stack padding={5}>
				<Heading color={'brand.secundario'}>{title}</Heading>
				<Divider color={'brand.primario'} />
				<Text color={"brand.terciario"}>{text}</Text>
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

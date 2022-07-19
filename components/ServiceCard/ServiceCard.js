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
import react, { useState, useEffect } from 'react';

const ServiceCard = ({ imageSrc, title, text, goTo }) => {
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
		<Box
			width={isMobile ? '100%' : '22%'}
			borderRadius={20}
			backdropFilter={'auto'}
			bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
			boxShadow='lg'
			borderColor={colorMode === 'dark' && 'brand.secundario'}
			borderWidth={colorMode === 'dark' && 1}
			overflow={'hidden'}
			fontFamily={'fonts.open'}
			marginTop={10}
			marginBottom={10}
		>
			<Box overflow={'hidden'}>
				<Image src={imageSrc} alt='Imagen del Servicio' height={'30%'} />
			</Box>
			<Stack padding={5}>
				<Heading
					color={'brand.secundario'}
					fontFamily={'fonts.open'}
					fontSize={'1.5em'}
				>
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

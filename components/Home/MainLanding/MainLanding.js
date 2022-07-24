import {
	Flex,
	Heading,
	ButtonGroup,
	Button,
	Text,
	useColorMode,
	Divider,
	useMediaQuery,
} from '@chakra-ui/react';

import Link from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
const MainLanding = () => {
	const { colorMode } = useColorMode();
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Flex
			alignItems={'center'}
			bgImage='/landing.jpg'
			height={isMobile ? '40vh' : '70vh'}
			bgRepeat={'no-repeat'}
			backgroundAttachment={isMobile ? null : 'fixed'}
			bgSize={'cover'}
			backgroundPosition={'center top'}
		>
			<Flex
				justifyContent={'center'}
				flexDirection={'column'}
				padding={15}
				marginLeft={isMobile ? 0 : 20}
			>
				<Heading
					size={isMobile ? 'lg' : '3xl'}
					color={'white'}
					padding={2}
					paddingLeft={isMobile && 5}
					paddingRight={isMobile && 5}
				>
					Creamos economías circulares
				</Heading>
				<Text
					fontSize={isMobile ? 'md' : 'lg'}
					color={'brand.terciario'}
					padding={2}
					paddingLeft={isMobile && 5}
					paddingRight={isMobile && 5}
					as={'i'}
				>
					Utilizando residuos como recursos que crean valor para la comunidad,
					la industria y el medio ambiente.
				</Text>
				<ButtonGroup
					size={isMobile ? 'md' : 'lg'}
					padding={3}
					spacing={5}
					justifyContent={isMobile && 'center'}
				>
					<Button color={'brand.primario'} rightIcon={<ChevronRightIcon />}>
						Descubrí más
					</Button>
					<Link href='#footer'>
						<Button color={'brand.primario'} variant={'outline'}>
							Contactate
						</Button>
					</Link>
				</ButtonGroup>
			</Flex>
		</Flex>
	);
};

export default MainLanding;

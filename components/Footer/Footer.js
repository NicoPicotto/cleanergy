import {
	Flex,
	Text,
	Button,
	Stack,
	Image,
	Box,
	useColorMode,
	Input,
	Textarea,
} from '@chakra-ui/react';

import { AiFillHome, AiFillClockCircle, AiFillPhone } from 'react-icons/ai';
import { EmailIcon } from '@chakra-ui/icons';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const { colorMode } = useColorMode();

	return (
		<>
			<Flex
				bgColor={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
				padding={10}
				justifyContent={'space-around'}
				flexWrap={'wrap'}
				id='footer'
				fontFamily={"fonts.open"}
			>
				<Box
					borderRadius={10}
					justifyContent={'center'}
					height={'fit-content'}
					width={'25%'}
					padding={2}
				>
					<Image
						src='/logo.png'
						alt='Logo Cleanergy'
						objectFit='cover'
						width={'15em'}
						cursor={'pointer'}
						filter={colorMode === 'dark' && 'brightness(0) invert(1)'}
						marginBottom={3}
					/>
					<Stack padding={2}>
						<Flex flexDirection={'row'} alignItems={'center'}>
							<AiFillHome color={'#2F855A'} />
							<Text as={'ai'} fontSize={'xs'} marginLeft={1}>
								Bv. Buenos Aires 817 General Cabrera, Córdoba
							</Text>
						</Flex>
						<Flex flexDirection={'row'} alignItems={'center'}>
							<AiFillClockCircle color={'#2F855A'} />
							<Text as={'ai'} fontSize={'xs'} marginLeft={1}>
								Lunes a viernes 8:30 a 12:130 y de 16 a 20.
							</Text>
						</Flex>
						<Flex flexDirection={'row'} alignItems={'center'}>
							<AiFillPhone color={'#2F855A'} />
							<Text as={'ai'} fontSize={'xs'} marginLeft={1}>
								+549 358 411-4120
							</Text>
						</Flex>
					</Stack>
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
				<Box width={'30%'} padding={5}>
					<Text marginBottom={2} fontWeight={'bold'} color={'brand.terciario'}>
						Esperamos tu mensaje
					</Text>
					<Flex
						flexDirection={'row'}
						justifyContent={'space-between'}
						marginBottom={2}
					>
						<Input
							placeholder='Nombre'
							variant='filled'
							_hover={'none'}
							width={'49%'}
						/>
						<Input
							placeholder='Email'
							variant='filled'
							_hover={'none'}
							width={'49%'}
						/>
					</Flex>
					<Flex marginBottom={2}>
						<Textarea placeholder='Mensaje' variant='filled' _hover={'none'} />
					</Flex>
					<Button
						width={'fit-content'}
						colorScheme={'green'}
						rightIcon={<EmailIcon />}
					>
						Enviar
					</Button>
				</Box>
			</Flex>
			<Flex
				height={'5vh'}
				alignItems={'center'}
				justifyContent={'center'}
				bgColor={colorMode === 'dark' ? null : 'brand.primario'}
			>
				<Text fontSize={12} color={'white'} fontFamily={"fonts.open"}>
					© {currentYear} Cleanergy - All rights reserved.{' '}
				</Text>
			</Flex>
		</>
	);
};

export default Footer;

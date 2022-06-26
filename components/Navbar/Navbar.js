import {
	Flex,
	Box,
	Image,
	Button,
	ButtonGroup,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import Link from 'next/link';

const Navbar = () => {
	return (
		<Flex
			height={'10vh'}
			alignItems={'center'}
			justifyContent={'space-between'}
			padding={10}
		>
			<Box>
				<Link href={'/'}>
					<Image
						src='https://cleanergy.com.ar/wp-content/uploads/2016/07/logo512pxspa.png'
						alt='Logo Cleanergy'
						objectFit='cover'
						width={"15em"}
						cursor={'pointer'}
					/>
				</Link>
			</Box>
			<Box>
				<ButtonGroup spacing={4} flexDirection={'row'}>
					<Link href={'/nosotros'}>
						<Button color={'brand.primario'} variant={'ghost'}>
							¿Quienes somos?
						</Button>
					</Link>
					<Menu>
						<MenuButton
							as={Button}
							rightIcon={<ChevronDownIcon color={"brand.primario"}/>}
							color={'brand.primario'}
							variant={'ghost'}
						>
							Nuestros Servicios
						</MenuButton>
						<MenuList>
							<Link href={'/serviciosBiogas'}>
								<MenuItem color={'brand.primario'}>Biogás</MenuItem>
							</Link>
							<Link href={'/serviciosSolar'}>
								<MenuItem color={'brand.primario'}>Solar</MenuItem>
							</Link>
						</MenuList>
					</Menu>
					<Menu>
						<MenuButton
							as={Button}
							rightIcon={<ChevronDownIcon color={"brand.primario"}/>}
							color={'brand.primario'}
							variant={'ghost'}
						>
							Nuestros Clientes
						</MenuButton>
						<MenuList>
							<Link href={'/clientesBiogas'}>
								<MenuItem color={'brand.primario'}>Biogás</MenuItem>
							</Link>
							<Link href={'/clientesSolar'}>
								<MenuItem color={'brand.primario'}>Solar</MenuItem>
							</Link>
						</MenuList>
					</Menu>
					<Link href={'/3CBiogas'}>
						<Button color={'brand.primario'} variant={'ghost'}>
							3C Biogás
						</Button>
					</Link>
					<DarkModeSwitch />
				</ButtonGroup>
			</Box>
		</Flex>
	);
};

export default Navbar;

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
	useDisclosure,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	useColorMode,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import react, { useState, useEffect } from 'react';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import Link from 'next/link';

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = useState('top');
	const { colorMode } = useColorMode();

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
		<Flex
			height={'10vh'}
			alignItems={'center'}
			justifyContent={'space-between'}
			padding={10}
			fontFamily={'fonts.open'}
			pos={'sticky'}
			top={0}
			bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
			zIndex={100}
		>
			<Box>
				<Link href={'/'}>
					<Image
						src='/logo.png'
						alt='Logo Cleanergy'
						objectFit='cover'
						width={'15em'}
						cursor={'pointer'}
					/>
				</Link>
			</Box>
			{isMobile === true ? (
				<>
					<Button onClick={onOpen}>
						<HamburgerIcon color={'brand.primario'} />
					</Button>

					<Drawer
						placement={placement}
						onClose={onClose}
						isOpen={isOpen}
						zIndex={200}
					>
						<DrawerOverlay />
						<DrawerContent>
							<ButtonGroup
								justifyContent={'center'}
								alignItems={'center'}
								flexDirection={'column'}
								size={'lg'}
							>
								<Link href={'/nosotros'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Nosotros
									</Button>
								</Link>
								<Link href={'/serviciosBiogas'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Servicios Biogás
									</Button>
								</Link>
								<Link href={'/serviciosSolar'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Servicios Solar
									</Button>
								</Link>
								<Link href={'/clientesBiogas'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Clientes Biogás
									</Button>
								</Link>
								<Link href={'/clientesSolar'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										Clientes Solar
									</Button>
								</Link>
								<Link href={'/3CBiogas'}>
									<Button
										color={'brand.primario'}
										variant={'ghost'}
										onClick={onClose}
									>
										3C Biogás
									</Button>
								</Link>
								<DarkModeSwitch />
							</ButtonGroup>
						</DrawerContent>
					</Drawer>
				</>
			) : (
				<Box>
					<ButtonGroup spacing={4} flexDirection={'row'}>
						<Link href={'/nosotros'}>
							<Button color={'brand.primario'} variant={'ghost'}>
								Nosotros
							</Button>
						</Link>
						<Menu>
							<MenuButton
								as={Button}
								rightIcon={<ChevronDownIcon color={'brand.primario'} />}
								color={'brand.primario'}
								variant={'ghost'}
							>
								Servicios
							</MenuButton>
							<MenuList>
								<Link href={'/serviciosBiogas'}>
									<MenuItem color={'brand.primario'}>Biogás</MenuItem>
								</Link>
								<Link href={'/serviciosSolar'}>
									<MenuItem color={'brand.primario'}>Solar Térmico</MenuItem>
								</Link>
								<Link href={'/serviciosSolar'}>
									<MenuItem color={'brand.primario'}>Solar Fotovoltáico</MenuItem>
								</Link>
								<Link href={'/serviciosSolar'}>
									<MenuItem color={'brand.primario'}>Gestión de residuos</MenuItem>
								</Link>
							</MenuList>
						</Menu>
						<Menu>
							<MenuButton
								as={Button}
								rightIcon={<ChevronDownIcon color={'brand.primario'} />}
								color={'brand.primario'}
								variant={'ghost'}
							>
								Tableros de indicadores
							</MenuButton>
							<MenuList>
								<Link href={'/clientesBiogas'}>
									<MenuItem color={'brand.primario'}>Biogás</MenuItem>
								</Link>
								<Link href={'/clientesSolar'}>
									<MenuItem color={'brand.primario'}>Solar Térmico</MenuItem>
								</Link>
								<Link href={'/clientesSolar'}>
									<MenuItem color={'brand.primario'}>Solar Fotovoltáico</MenuItem>
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
			)}
		</Flex>
	);
};

export default Navbar;

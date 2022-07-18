import {
	Flex,
	Image,
	useColorMode,
	Divider,
	Heading,
	Text,
} from '@chakra-ui/react';
const nosotros = () => {
	return (
		<Flex alignItems={'center'}>
			<Flex
				height={'70vh'}
				width={'20vw'}
				bgColor={'brand.primario'}
				marginRight={-100}
				borderRightRadius={20}
			></Flex>
			<Flex
				height={'50vh'}
				marginLeft={-100}
				boxShadow={'md'}
				borderRadius={20}
			>
				<Image src={'/assets/about.jpg'} borderRadius={20} boxShadow={'md'} />
			</Flex>
			<Flex
				height={'50vh'}
				marginLeft={10}
				width={'35vw'}
				flexDir={'column'}
				ali
			>
				<Heading
					size={'3xl'}
					color={'brand.primario'}
					fontFamily={'fonts.open'}
				>
					Nosotros
				</Heading>
				<Divider orientation='horizontal' marginTop={3} marginBottom={3} />
				<Text fontFamily={'fonts.open'}>
					CLEANERGY RENOVABLES S.A. nace en 2016 con la misión de crear
					economías circulares, ayudando a generar valor a municipios,
					industrias y la comunidad mediante sistemas de generación de energía a
					partir de residuos orgánicos. Creemos que la incorporación de nuevas
					tecnologías a los emprendimientos productivos, especialmente en la
					industria agroalimentaria, cambiará la manera de hacer negocios en
					Argentina y la región, adoptando prácticas más eficientes, y a la vez
					más sustentables. Es por eso que trabajamos junto a productores
					agropecuarios e industriales para aprovechar un recurso valioso, que
					hoy está desaprovechado, generando negocios más rentables, con menor
					riesgo, y amigables con el medio ambiente y la comunidad en la que
					trabaja.
				</Text>
			</Flex>
		</Flex>
	);
};

export default nosotros;

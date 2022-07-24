import { Flex, Image, Divider, Heading, Text, useMediaQuery } from '@chakra-ui/react';

const PortadaAbout = () => {

	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Flex
			alignItems={'center'}
			flexDir={isMobile && 'column'}
			padding={10}
			justifyContent={'center'}
		>
			<Flex width={isMobile ? '100%' : '40vw'} height={'fit-content'}>
				<Image src={'/assets/about.jpg'} borderRadius={20} boxShadow={'md'} />
			</Flex>
			<Flex
				width={isMobile ? '100%' : '40vw'}
				marginLeft={isMobile ? 0 : 10}
				flexDir={'column'}
				marginTop={isMobile && 5}
			>
				<Heading size={isMobile ? "md" : "lg"} color={'brand.primario'}>
					CLEANERGY RENOVABLES S.A.
				</Heading>
				<Divider orientation='horizontal' marginTop={3} marginBottom={3} borderColor={"brand.terciario"}/>
				<Text fontSize={'1em'}>
					La empresa nace en 2016 con la misión de crear economías circulares,
					ayudando a generar valor a municipios, industrias y la comunidad
					mediante sistemas de generación de energía a partir de residuos
					orgánicos. Creemos que la incorporación de nuevas tecnologías a los
					emprendimientos productivos, especialmente en la industria
					agroalimentaria, cambiará la manera de hacer negocios en Argentina y
					la región, adoptando prácticas más eficientes, y a la vez más
					sustentables. Es por eso que trabajamos junto a productores
					agropecuarios e industriales para aprovechar un recurso valioso, que
					hoy está desaprovechado, generando negocios más rentables, con menor
					riesgo, y amigables con el medio ambiente y la comunidad en la que
					trabaja.
				</Text>
			</Flex>
		</Flex>
	);
};

export default PortadaAbout;

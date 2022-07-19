import {
	Flex,
	Image,
	Divider,
	Heading,
	Text,
} from '@chakra-ui/react';
import react, { useState, useEffect } from 'react';
const nosotros = () => {

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
		<Flex alignItems={'center'} flexDir={isMobile && "column"} padding={10} justifyContent={"center"}>
			<Flex
				width={'40vw'}
				height={"fit-content"}
			>
				<Image src={'/assets/about.jpg'} borderRadius={20} boxShadow={'md'} />
			</Flex>
			<Flex
				width={'40vw'}
				marginLeft={10}
				flexDir={'column'}
				ali
			>
				<Heading
					fontSize={'2em'}
					color={'brand.primario'}
			
				>
					CLEANERGY RENOVABLES S.A.
				</Heading>
				<Divider orientation='horizontal' marginTop={3} marginBottom={3} />
				<Text fontSize={'1em'}>
					La empresa nace en 2016 con la misión de crear
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

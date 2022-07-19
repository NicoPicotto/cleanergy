import { Flex } from '@chakra-ui/react';
import ServiceCard from '../ServiceCard/ServiceCard';
import react, { useState, useEffect } from 'react';

const CardLayout = () => {
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
		<Flex
			alignItems={'flex-start'}
			justifyContent={'space-evenly'}
			flexWrap={'wrap'}
			
			padding={10}
			flexDir={isMobile && "column"}
		>
			<ServiceCard
				imageSrc={
					'/assets/biogas.JPG'
				}
				title='Biogás'
				text="Ofrecemos soluciones y servicios end-to-end para productores agropecuarios, municipios, e inversores y desarrolladores privados"
				goTo='/serviciosBiogas'
			/>
			<ServiceCard
				imageSrc={
					'/assets/solart.jpg'
				}
				title='Solar Térmico'
				text="Te brindamos diferentes alternativas para que aproveches la energía térmica para calentar fluidos, agua caliente sanitaria (ACS), piscinas, y calefacción de ambientes."
				goTo='/serviciosBiogas'
			/>
			<ServiceCard
				imageSrc={
					'/assets/solarfv.JPG'
				}
				title='Solar Fotovoltáico'
				text="Dimensionamiento e instalación de sistemas fotovoltaicos llave en mano, te asesoráramos para que puedas instalar tu sistema fotovoltaico de acuerdo a tus necesidades."
				goTo='/serviciosBiogas'
			/>
			<ServiceCard
				imageSrc={
					'assets/residuos.jpeg'
				}
				title='Gestión de residuos'
				text="Ofrecemos un servicio integral de gestión de residuos orgánicos para grandes generadores de residuos y municipios."
				goTo='/serviciosSolar'
			/>
		</Flex>
	);
};

export default CardLayout;

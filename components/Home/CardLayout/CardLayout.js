import { Flex, useMediaQuery } from '@chakra-ui/react';
import ServiceCard from './ServiceCard/ServiceCard';

const CardLayout = () => {

	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Flex
			alignItems={'flex-start'}
			justifyContent={'space-evenly'}
			flexWrap={'wrap'}
			padding={5}
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

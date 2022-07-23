import { Divider, Heading, Flex, Wrap, WrapItem, Box } from '@chakra-ui/react';
import ProyectoItems from '../ProyectoItems/ProyectoItems';

const ProyectosAbout = ({isMobile}) => {
	return (
		<Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
			<Flex w={'90vw'} padding={5} flexDir={'column'}>
				<Heading
					fontFamily={'fonts.open'}
					color={'brand.secundario'}
					noOfLines={1}
					padding={2}
				>
					Proyectos en Argentina
				</Heading>
				<Divider borderColor={'brand.terciario'} padding={2} />
			</Flex>
			<Flex marginBottom={10}>
				<Flex
					align='center'
					justify='center'
					w={'100vw'}
					flexWrap={'wrap'}
                    flexDir={isMobile && "column"}
				>
					<ProyectoItems
						title='C. T. Gigena I'
						text='A cargo de la Ingeniería de detalle, Gestión Integral de Proyecto (incluyendo Construction Management), y Puesta en Marcha biológica de la planta. La misma ha sido habilitada comercialmente en diciembre de 2019.'
                        isMobile={isMobile}
					/>
					<ProyectoItems
						title='O&M de C.T. Gigena I'
						text='Responsable de la operación y el mantenimiento de la planta por los 20 años de duración del PPA, como proveedor integral, que proporcionará gestión y experiencia local, además de un control exhaustivo de las variables fisicoquímicas y microbiológicas del sistema para asegurar la máxima eficiencia en la producción de biogás.'
                        isMobile={isMobile}
					/>
					<ProyectoItems
						title='Planta Biogás Justiniano Posse'
						text='Reingeniería y puesta en marcha de planta de Biogás para autoconsumo (400kW). En operación desde 2021'
                        isMobile={isMobile}
					/>
					<ProyectoItems
						title='Planta Biogás Justiniano Posse'
						text='Reingeniería y puesta en marcha de planta de Biogás para autoconsumo (400kW). En operación desde 2021'
                        isMobile={isMobile}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ProyectosAbout;

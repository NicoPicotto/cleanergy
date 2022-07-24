import { Flex, Text, Divider, Heading, Highlight } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const ServiceBiogas = () => {
	return (
		<Flex justifyContent={'center'}>
			<Flex width={'70vw'} flexDir={'column'} padding={10}>
				<Heading
					color={'brand.secundario'}
					size={'lg'}
					fontFamily={'fonts.open'}
				>
					Ofrecemos soluciones y servicios end-to-end para productores
					agropecuarios, municipios, e inversores y desarrolladores privados:
				</Heading>
				<Flex>
					<Divider
						orientation='vertical'
						marginTop={5}
						borderColor={'brand.secundario'}
					/>
					<Flex flexDir={'column'}>
						<Flex padding={5} alignItems={'center'}>
							<ArrowForwardIcon
								marginRight={3}
								color={'brand.primario'}
								fontSize={'1.5em'}
							/>
							<Text fontFamily={'fonts.open'}>
								Desarrollo temprano de proyectos: concepción, búsqueda y
								análisis de oportunidades y riesgos, y prefactibilidad
								técnico-económica.
							</Text>
						</Flex>
						<Flex padding={5} alignItems={'center'}>
							<ArrowForwardIcon
								marginRight={3}
								color={'brand.primario'}
								fontSize={'1.5em'}
							/>
							<Text fontFamily={'fonts.open'}>
								Diseño e ingeniería: Conceptual, básica y de detalle.
							</Text>
						</Flex>
						<Flex padding={5} alignItems={'center'}>
							<ArrowForwardIcon
								marginRight={3}
								color={'brand.primario'}
								fontSize={'1.5em'}
							/>
							<Text fontFamily={'fonts.open'}>Provisión de tecnología.</Text>
						</Flex>
						<Flex padding={5} alignItems={'center'}>
							<ArrowForwardIcon
								marginRight={3}
								color={'brand.primario'}
								fontSize={'1.5em'}
							/>
							<Text fontFamily={'fonts.open'}>
								Gestión Integral de proyecto: Desde el presupuesto y análisis de
								proveedores y contratistas, hasta la supervisión de la
								construcción, asistencia y coordinación en gestión de permisos y
								habilitaciones.
							</Text>
						</Flex>
						<Flex padding={5} alignItems={'center'}>
							<ArrowForwardIcon
								marginRight={3}
								color={'brand.primario'}
								fontSize={'1.5em'}
							/>
							<Text fontFamily={'fonts.open'}>
								EPC: Ingeniería, procura y construcción.
							</Text>
						</Flex>
						<Flex padding={5} alignItems={'center'}>
							<ArrowForwardIcon
								marginRight={3}
								color={'brand.primario'}
								fontSize={'1.5em'}
							/>
							<Text fontFamily={'fonts.open'}>Puesta en marcha biológica.</Text>
						</Flex>
						<Flex padding={5} alignItems={'center'}>
							<ArrowForwardIcon
								marginRight={3}
								color={'brand.primario'}
								fontSize={'1.5em'}
							/>
							<Text fontFamily={'fonts.open'}>
								Operación de plantas en actividad: Gestión logística de
								transportistas de residuos, monitoreo fisicoquímico y biológico
								diario, supervisión de operarios de planta, implementación de
								sistemas de gestión, búsqueda de sustratos alternativos.
							</Text>
						</Flex>
						<Flex padding={5} alignItems={'center'}>
							<ArrowForwardIcon
								marginRight={3}
								color={'brand.primario'}
								fontSize={'1.5em'}
							/>
							<Text fontFamily={'fonts.open'}>
								Mantenimiento de plantas en actividad: electromecánico del
								equipamiento de planta, y mantenimientos básicos de CHPs
								(cambios de filtros, aceites, bujías, limpieza en general).
							</Text>
						</Flex>
						<Flex padding={5} alignItems={'center'}>
							<ArrowForwardIcon
								marginRight={3}
								color={'brand.primario'}
								fontSize={'1.5em'}
							/>
							<Text fontFamily={'fonts.open'}>
								Owner’s Engineering y optimización de proyectos existentes.
							</Text>
						</Flex>
					</Flex>
				</Flex>
				<Text>
					<Flex marginTop={10}>
						<Text as={'i'} fontFamily={'fonts.open'}>
							A diferencia de otros proveedores de tecnología, CLEANERGY ejecuta
							las tareas con equipos de ingenieros propios, y con una fuerte
							presencia y experiencia local. De esta manera, es posible ejecutar
							proyectos con tecnología de primer nivel internacional y
							presupuestos elaborados localmente, adaptados a cada cliente y
							proyecto. Por otro lado, CLEANERGY no tiene exclusividad con
							proveedores internacionales de equipamiento, por lo que ofrecemos
							versatilidad para lograr el contenido nacional de las inversiones
							requeridas por cada proyecto.
						</Text>
					</Flex>
				</Text>
			</Flex>
		</Flex>
	);
};

export default ServiceBiogas;

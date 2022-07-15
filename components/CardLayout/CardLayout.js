import { Flex } from '@chakra-ui/react';
import ServiceCard from '../ServiceCard/ServiceCard';

const CardLayout = () => {
	return (
		<Flex
			alignItems={'center'}
			justifyContent={'space-evenly'}
			flexWrap={'wrap'}
			padding={5}
		>
			<ServiceCard
				imageSrc={
					'https://noticias.uai.cl/assets/uploads/2021/11/portadas-notas-web-1-980x470-c-default.png'
				}
				title='Servicios de Biogás'
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				goTo='/serviciosBiogas'
			/>
			<ServiceCard
				imageSrc={
					'https://lmg-labmanager.s3.amazonaws.com/assets/articleNo/27906/aImg/50600/converting-solar-energy-to-electricity-on-demand-l.jpg'
				}
				title='Servicios de Solar'
				text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				goTo='/serviciosSolar'
			/>
		</Flex>
	);
};

export default CardLayout;

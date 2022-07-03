import { Flex, useColorMode } from '@chakra-ui/react';
import CardNumber from '../CardNumber/CardNumber';
import { BsFillLightningChargeFill, BsFillTrashFill } from 'react-icons/bs';
import {SiIcloud} from "react-icons/si"
import {GiFootprint} from "react-icons/gi"

const NumbersLayout = () => {
	const { colorMode } = useColorMode();

	return (
		<Flex
			alignItems={'center'}
			padding={20}
			justifyContent={'space-evenly'}
			flexWrap={'wrap'}
			bgColor={colorMode === 'dark' ? 'gray.600' : 'brand.primario'}
            
		>
			<CardNumber
				icon={<BsFillTrashFill size={50} />}
				number='1550'
				unidad='Tn'
				text='Residuos Procesados'
			/>
			<CardNumber
				icon={<BsFillLightningChargeFill size={50} />}
				number='1550'
				unidad='Vw'
				text='Energía Eléctrica Producida'
			/>
			<CardNumber
				icon={<SiIcloud size={50} />}
				number='1550'
				unidad='m3'
				text='Biogás Generado'
			/>
			<CardNumber
				icon={<GiFootprint size={50} />}
				number='1550'
				unidad='Tn'
				text='CO2 Evitadas'
			/>
		</Flex>
	);
};

export default NumbersLayout;

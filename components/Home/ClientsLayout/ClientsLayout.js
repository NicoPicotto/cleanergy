import { Flex } from '@chakra-ui/react';
import ClientCard from './ClientCard/ClientCard';

const ClientsLayout = () => {
	return (
		<Flex
			alignItems={'center'}
			padding={20}
			justifyContent={'space-evenly'}
			flexWrap={'wrap'}
		>
            <ClientCard scrImage={"logo-placeholder.png"} name="Empresa Uno"/>
            <ClientCard scrImage={"logo-placeholder.png"} name="Empresa Dos"/>
            <ClientCard scrImage={"logo-placeholder.png"} name="Empresa Tres"/>
            <ClientCard scrImage={"logo-placeholder.png"} name="Cuatro"/>
            <ClientCard scrImage={"logo-placeholder.png"} name="Empresa Uno"/>
            <ClientCard scrImage={"logo-placeholder.png"} name="Empresa Dos"/>
        </Flex>
	);
};

export default ClientsLayout;

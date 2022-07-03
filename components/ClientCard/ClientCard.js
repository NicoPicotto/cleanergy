import { Flex, Image, Heading } from '@chakra-ui/react';

const ClientCard = ({ scrImage, name }) => {
	return (
		<Flex flexDir={"column"} alignItems={"center"} padding={20}>
			<Image src={scrImage} />
			<Heading color={"brand.primario"} size={"md"}>{name}</Heading>
		</Flex>
	);
};

export default ClientCard;

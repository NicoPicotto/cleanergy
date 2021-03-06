import { Box, Heading, Stack, Text, Flex } from '@chakra-ui/react';

const CardNumber = ({ icon, number, text, unidad }) => {
	return (
		<Box padding={10}>
			<Stack
				alignItems={'center'}
				color={'white'}
			>
				<Heading>{icon}</Heading>
				<Flex>
					<Heading>{number}</Heading>
					<Text>{unidad}</Text>
				</Flex>
				<Text textAlign={"center"}>{text}</Text>
			</Stack>
		</Box>
	);
};

export default CardNumber;

import {
	Heading,
	Flex,
	Text,
	Accordion,
	Box,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	AccordionButton,
	useMediaQuery,
	useColorMode
} from '@chakra-ui/react';

const ProyectoItems = ({ title, text }) => {

	const { colorMode } = useColorMode();
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Accordion allowToggle width={isMobile ? '90vw' : '45vw'} padding={5}>
			<AccordionItem
				borderRadius={10}
				bgColor={colorMode === "dark" ? "#1a202c" : 'brand.primario'}
				borderColor={colorMode === "dark" && "brand.primario"}
				borderWidth={colorMode === "dark" && 1}
				boxShadow='md'
			>
				<Flex>
					<AccordionButton>
						<Box flex='1' textAlign='left' marginRight={2} padding={2}>
							<Heading
								fontFamily={'fonts.open'}
								color={'white'}
								size={isMobile ? 'md' : 'lg'}
							>
								{title}
							</Heading>
						</Box>
						<AccordionIcon color={'white'} />
					</AccordionButton>
				</Flex>
				<AccordionPanel
					bgColor={colorMode === "dark" ? "#1a202c" : 'white'}
					pb={4}
					fontFamily={'fonts.open'}
					fontSize={'lg'}
				>
					{text}
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};

export default ProyectoItems;

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
} from '@chakra-ui/react';

const ProyectoItems = ({ title, text, isMobile }) => {
	return (
		<Accordion allowToggle width={isMobile ? '80vw' : '45vw'} padding={5}>
			<AccordionItem
				borderRadius={10}
				bgColor={'brand.primario'}
				boxShadow='md'
			>
				<Flex>
					<AccordionButton>
						<Box flex='1' textAlign='left' marginRight={2} padding={2}>
							<Heading fontFamily={'fonts.open'} color={'white'} size={'lg'}>
								{title}
							</Heading>
						</Box>
						<AccordionIcon color={'white'} />
					</AccordionButton>
				</Flex>
				<AccordionPanel
					bgColor={'white'}
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

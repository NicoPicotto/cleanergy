import { Flex, Text, useMediaQuery, Heading, Divider } from '@chakra-ui/react';

const ServicesLayout = ({ bgImage, title }) => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Flex>
			<Flex
				bgImage={bgImage}
				width={'100vw'}
				height={isMobile ? '40vh' : '50vh'}
				bgRepeat={'no-repeat'}
				backgroundAttachment={isMobile ? null : 'fixed'}
				bgSize={'cover'}
				backgroundPosition={'center top'}
			>
				<Flex alignItems={'center'} width={'100vw'} justifyContent={'center'}>
					<Flex width={'70vw'} padding={10}>
						<Heading
							color={'white'}
							size={'4xl'}
							textShadow={'2px 2px 4px #000000'}
							fontFamily={'fonts.open'}
						>
							{title}
						</Heading>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default ServicesLayout;

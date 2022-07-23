import { useState, useEffect } from 'react';
import PortadaAbout from '../components/Nosotros/Portada/PortadaAbout';
import ProyectosAbout from '../components/Nosotros/ProyectosAbout/ProyectosAbout';
const Nosotros = () => {
	const [isMobile, setIsMobile] = useState(false);

	//Screen Size para mobile
	const handleResize = () => {
		if (window.innerWidth < 1100) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	// Event Listener para screen
	useEffect(() => {
		window.addEventListener('resize', handleResize);
	});

	return (
		<>
			<PortadaAbout isMobile={isMobile} />
			<ProyectosAbout isMobile={isMobile} />
		</>
	);
};

export default Nosotros;

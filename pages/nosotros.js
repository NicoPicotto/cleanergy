import AboutText from '../components/Nosotros/AboutText/AboutText';
import PortadaAbout from '../components/Nosotros/Portada/PortadaAbout';
import ProyectosAbout from '../components/Nosotros/ProyectosAbout/ProyectosAbout';
const Nosotros = () => {
	
	return (
		<>
			<PortadaAbout bgImage={"/assets/about.jpg"} title="Nosotros"/>
			<AboutText />
			<ProyectosAbout />
		</>
	);
};

export default Nosotros;

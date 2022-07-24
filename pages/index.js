import CardLayout from '../components/Home/CardLayout/CardLayout';
import ClientsLayout from '../components/Home/ClientsLayout/ClientsLayout';
import MainLanding from '../components/Home/MainLanding/MainLanding';
import NumbersLayout from '../components/Home/NumbersLayout/NumbersLayout';

const Home = () => {
	return (
		<>
			<MainLanding />
			<CardLayout />
			<NumbersLayout />
			<ClientsLayout />
		</>
	);
};

export default Home;

import CardLayout from '../components/CardLayout/CardLayout';
import ClientsLayout from '../components/ClientsLayout/ClientsLayout';
import MainLanding from '../components/MainLanding/MainLanding';
import NumbersLayout from '../components/NumbersLayout/NumbersLayout';

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

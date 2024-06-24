import './App.css';
import Carousel from './layouts/HomePage/components/Carousel';
import ExploreTopBooks from './layouts/HomePage/components/ExploreTopBooks';
import Hero from './layouts/HomePage/components/Hero';
import Navbar from './layouts/Navbar/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<ExploreTopBooks />
			<Carousel />
			<Hero />
		</>
	);
}

export default App;

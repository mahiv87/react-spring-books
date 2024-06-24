import './App.css';
import Carousel from './layouts/HomePage/components/Carousel';
import ExploreTopBooks from './layouts/HomePage/components/ExploreTopBooks';
import Navbar from './layouts/Navbar/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<ExploreTopBooks />
			<Carousel />
		</>
	);
}

export default App;

import './App.css';
import Carousel from './layouts/HomePage/components/Carousel';
import ExploreTopBooks from './layouts/HomePage/components/ExploreTopBooks';
import Hero from './layouts/HomePage/components/Hero';
import LibraryService from './layouts/HomePage/components/LibraryService';
import Navbar from './layouts/Navbar/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<ExploreTopBooks />
			<Carousel />
			<Hero />
			<LibraryService />
		</>
	);
}

export default App;

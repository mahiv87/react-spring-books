import './App.css';
import Navbar from './layouts/Navbar/Navbar';
import Homepage from './layouts/HomePage/Homepage';
import Footer from './layouts/Footer/Footer';
import SearchBooks from './layouts/SearchBooks/SearchBooks';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<>
			<Navbar />
			{/* <Homepage /> */}
			{/* <SearchBooks /> */}
			<Outlet />
			<Footer />
		</>
	);
}

export default App;

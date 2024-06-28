import './App.css';
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="flex flex-col min-h-dvh">
			<Navbar />
			<div className="flex-1">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default App;

/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css';
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';
import { Outlet, useNavigate } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { oktaConfig } from './lib/oktaConfig';
import { Security } from '@okta/okta-react';

const oktaAuth = new OktaAuth(oktaConfig);

function App() {
	const navigate = useNavigate();

	const customAuthHandler = () => {
		navigate('/login');
	};

	const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
		navigate(toRelativeUrl(originalUri || '/', window.location.origin));
	};

	return (
		<div className="flex flex-col min-h-dvh">
			<Security
				oktaAuth={oktaAuth}
				restoreOriginalUri={restoreOriginalUri}
				onAuthRequired={customAuthHandler}
			>
				<Navbar />
				<div className="flex-1">
					<Outlet />
				</div>
				<Footer />
			</Security>
		</div>
	);
}

export default App;

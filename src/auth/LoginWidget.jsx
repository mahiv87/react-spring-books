import { useOktaAuth } from '@okta/okta-react';
import Spinner from '../layouts/utils/Spinner';
import OktaSignInWidget from './OktaSignInWidget';
import { Navigate } from 'react-router-dom';

const LoginWidget = ({ config }) => {
	const { oktaAuth, authState } = useOktaAuth();
	const onSuccess = (tokens) => {
		oktaAuth.handleLoginRedirect(tokens);
	};

	const onError = (err) => {
		console.log('Sign in error: ', err);
	};

	if (!authState) {
		return <Spinner />;
	}

	return authState.isAuthenticated ? (
		<Navigate to={{ pathname: '/' }} />
	) : (
		<OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
	);
};

export default LoginWidget;
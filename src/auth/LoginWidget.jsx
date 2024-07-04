import { useOktaAuth } from '@okta/okta-react';
import Spinner from '../layouts/utils/Spinner';

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

	return (
		<div>
			<div>Login Widget</div>
		</div>
	);
};

export default LoginWidget;

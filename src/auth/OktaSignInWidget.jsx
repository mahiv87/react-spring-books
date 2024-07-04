import OktaSignIn from '@okta/okta-signin-widget';
import { useEffect, useRef } from 'react';
import { oktaConfig } from '../lib/oktaConfig';

const OktaSignInWidget = ({ onSuccess, onError }) => {
	const widgetRef = useRef();

	useEffect(() => {
		if (!widgetRef.current) {
			return false;
		}

		const widget = new OktaSignIn(oktaConfig);

		widget
			.showSignInToGetTokens({
				el: widgetRef.current
			})
			.then(onSuccess)
			.catch(onError);

		return () => widget.remove();
	}, [onSuccess, onError]);

	return <div>{widgetRef}</div>;
};

export default OktaSignInWidget;

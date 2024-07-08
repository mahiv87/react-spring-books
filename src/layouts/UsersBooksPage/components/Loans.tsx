import { useOktaAuth } from '@okta/okta-react';

const Loans = () => {
	const { authState } = useOktaAuth();

	return (
		<div>
			<div>Loans</div>
		</div>
	);
};

export default Loans;

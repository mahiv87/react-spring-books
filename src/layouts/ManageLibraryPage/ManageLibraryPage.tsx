import { useOktaAuth } from '@okta/okta-react';

const ManageLibraryPage = () => {
	const { authState } = useOktaAuth();

	return (
		<div>
			<div>ManageLibraryPage</div>
		</div>
	);
};

export default ManageLibraryPage;

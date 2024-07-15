import { useOktaAuth } from '@okta/okta-react';

const AddNewBook = () => {
	const { authState } = useOktaAuth();

	return <div>AddNewBook</div>;
};

export default AddNewBook;

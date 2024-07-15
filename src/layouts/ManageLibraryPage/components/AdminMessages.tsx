import { useOktaAuth } from '@okta/okta-react';
import { useEffect, useState } from 'react';
import { MessageModel } from '../../../models/MessageModel';
import Spinner from '../../utils/Spinner';

const AdminMessages = () => {
	const { authState } = useOktaAuth();
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);
	const [messages, setMessages] = useState<MessageModel[]>([]);
	const [messagesPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		const fetchUserMessages = async () => {
			if (authState && authState.isAuthenticated) {
				const url = `http://localhost:8080/api/messages/search/findByClosed?closed=false&page=${
					currentPage - 1
				}&size=${messagesPerPage}`;
				const requestOptions = {
					method: 'GET',
					headers: {
						Authoriztion: `Bearer ${authState.accessToken?.accessToken}`,
						'Content-Type': 'application/json'
					}
				};

				const response = await fetch(url, requestOptions);

				if (!response.ok) {
					throw new Error('Something went wrong');
				}

				const responseJson = await response.json();

				setMessages(responseJson._embedded.messages);
				setTotalPages(responseJson.page.totalPages);
			}
			setIsLoading(false);
		};
		fetchUserMessages().catch((error) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
		window.scrollTo(0, 0);
	}, [authState, currentPage]);

	if (isLoading) {
		return <Spinner />;
	}

	if (httpError) {
		return (
			<div className="container mx-auto my-5" style={{ height: 550 }}>
				<p>{httpError}</p>
			</div>
		);
	}

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	return (
		<div>
			<div>AdminMessages</div>
		</div>
	);
};

export default AdminMessages;

import { useOktaAuth } from '@okta/okta-react';
import Spinner from '../../utils/Spinner';
import { useEffect, useState } from 'react';
import { MessageModel } from '../../../models/MessageModel';

export const Messages = () => {
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
				const url = `http://localhost:8080/api/messages/search/findByUserEmail?userEmail=${
					authState?.accessToken?.claims.sub
				}&page=${currentPage - 1}&size=${messagesPerPage}`;

				const requestOptions = {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
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
		window.scroll(0, 0);
	}, [authState, currentPage]);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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

	return (
		<div className="mt-2">
			{messages.length ? (
				<>
					<h3>Current Q/A: </h3>
					{messages.map((message) => (
						<div key={message.id}>
							<div className="card flex mt-5 container md:w-1/2 lg:w-1/3 xl:w-1/4 md:mb-5 shadow-xl">
								<h4>
									Case #{message.id}: {message.title}{' '}
								</h4>
								<h5>{message.userEmail}</h5>
								<p>{message.question}</p>
								<hr />
								<div>
									<h4>Response: </h4>
									{message.response && message.adminEmail ? (
										<>
											<h6>{message.adminEmail} (admin)</h6>
											<p>{message.response}</p>
										</>
									) : (
										<p className="italic">
											Pending response from administration.
										</p>
									)}
								</div>
							</div>
						</div>
					))}
				</>
			) : (
				<h3>All questions or messages you submit will be shown here</h3>
			)}
		</div>
	);
};

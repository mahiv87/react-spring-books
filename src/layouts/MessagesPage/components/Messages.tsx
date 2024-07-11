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
		<div className="container md:w-3/4 mx-auto my-2 text-neutral-500">
			{messages.length ? (
				<>
					<h3 className="text-2xl font-semibold">Current Q/A: </h3>

					{messages.map((message) => (
						<div key={message.id}>
							<div className="card flex my-5 p-5 container shadow-lg">
								<h4 className="text-xl font-semibold">
									Case #{message.id}:{' '}
									<span className="text-orange-500">{message.title}</span>{' '}
								</h4>
								<div className="mb-2">
									<h5 className="text-lg italic mb-2 indent-2">
										{message.userEmail}
									</h5>
									<p className="indent-5">{message.question}</p>
								</div>
								<hr />
								<div className="mt-2">
									<h4 className="text-xl font-semibold">Response: </h4>
									{message.response && message.adminEmail ? (
										<>
											<h6>{message.adminEmail} (admin)</h6>
											<p>{message.response}</p>
										</>
									) : (
										<p className="italic mt-2 indent-2">
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

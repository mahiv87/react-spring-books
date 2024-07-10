import { useOktaAuth } from '@okta/okta-react';
import { useEffect, useState } from 'react';
import Spinner from '../../utils/Spinner';
import { HistoryModel } from '../../../models/HistoryModel';

export const HistoryPage = () => {
	const { authState } = useOktaAuth();
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);
	const [histories, setHistories] = useState<HistoryModel[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	useEffect(() => {
		const fetchUserHistory = async () => {
			if (authState && authState.isAuthenticated) {
				const url = `http://localhost:8080/api/histories/search/findBooksByUserEmail?userEmail=${
					authState.accessToken?.claims.sub
				}&page=${currentPage - 1}&size=5`;

				const requestOptions = {
					method: 'Get',
					headers: {
						'Content-Type': 'application/json'
					}
				};

				const response = await fetch(url, requestOptions);

				if (!response.ok) {
					throw new Error('Something went wrong');
				}

				const responseJson = await response.json();

				setHistories(responseJson._embedded.histories);
				setTotalPages(responseJson.page.totalPages);
			}
			setIsLoading(false);
		};
		fetchUserHistory().catch((error) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
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
			<div>HistoryPage</div>
		</div>
	);
};

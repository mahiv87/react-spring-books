import { useOktaAuth } from '@okta/okta-react';
import { useEffect, useState } from 'react';
import Spinner from '../../utils/Spinner';
import { HistoryModel } from '../../../models/HistoryModel';
import { Link } from 'react-router-dom';
import Pagination from '../../utils/Pagination';

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
		<div className="mt-2">
			{histories.length > 0 ? (
				<>
					<h3 className="font-bold text-2xl">Recent History:</h3>

					{histories.map((history) => (
						<div key={history.id}>
							<div className="card flex my-3 w-5/6 container mx-auto shadow-xl">
								<div className="flex gap-0">
									<div className="flex flex-col w-2/3 justify-center items-center">
										<div className="hidden lg:block">
											{history.img ? (
												<img
													src={history.img}
													width="123"
													height="196"
													alt="Book"
												/>
											) : (
												<img
													src={require('../../../Images/BooksImages/book-luv2code-1000.png')}
													width="123"
													height="196"
													alt="Book"
												/>
											)}
										</div>
										<div className="lg:hidden flex justify-center items-center">
											{history.img ? (
												<img
													src={history.img}
													width="123"
													height="196"
													alt="Book"
												/>
											) : (
												<img
													src={require('../../../Images/BooksImages/book-luv2code-1000.png')}
													width="123"
													height="196"
													alt="Book"
												/>
											)}
										</div>
									</div>

									<div className="flex flex-col">
										<div className="card-body">
											<h4>{history.title}</h4>
											<h5>{history.author}</h5>
											<p>{history.description}</p>
											<hr />
											<p>Checked out on: {history.checkoutDate}</p>
											<p>Returned on: {history.returnedDate} </p>
										</div>
									</div>
								</div>
							</div>
							<hr />
						</div>
					))}
				</>
			) : (
				<>
					<h3 className="my-3">Currently no history: </h3>
					<Link
						to={'search'}
						className="btn border-teal-500 bg-teal-500 hover:bg-teal-500/80 hover:border-teal-500/80 text-white"
					>
						Search for a new book
					</Link>
				</>
			)}

			{totalPages > 1 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					paginate={paginate}
				/>
			)}
		</div>
	);
};
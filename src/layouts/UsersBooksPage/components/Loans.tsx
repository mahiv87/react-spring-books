import { useOktaAuth } from '@okta/okta-react';
import { useEffect, useState } from 'react';
import { UsersCurrentLoans } from '../../../models/UsersCurrentLoans';
import Spinner from '../../utils/Spinner';
import { fetchUserCurrentLoans } from '../../utils/API';
import { Link } from 'react-router-dom';
import { LoansModal } from './LoansModal';

const Loans = () => {
	const { authState } = useOktaAuth();
	const [httpError, setHttpError] = useState(false);
	const [usersCurrentLoans, setUsersCurrentLoans] = useState<
		UsersCurrentLoans[]
	>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [checkout, setCheckout] = useState(false);

	useEffect(() => {
		fetchUserCurrentLoans(authState)
			.then((loans) => {
				setUsersCurrentLoans(loans);
				setIsLoading(false);
			})
			.catch((error) => {
				setIsLoading(false);
				setHttpError(error.message);
			});
		window.scrollTo(0, 0);
	}, [authState, checkout]);

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

	const returnBook = async (bookId: number) => {
		const url = `http://localhost:8080/api/books/secure/return?bookId=${bookId}`;
		const requestOptions = {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
				'Content-Type': 'application/json'
			}
		};

		const response = await fetch(url, requestOptions);

		if (!response.ok) {
			throw new Error('Something went wrong');
		}

		setCheckout(!checkout);
	};

	const handleModal = (id: string) => {
		const dialog = document.getElementById(id) as HTMLDialogElement | null;
		if (dialog && typeof dialog.showModal === 'function') {
			dialog.showModal();
		} else {
			console.error(
				'Dialog element not found or showModal method not supported.'
			);
		}
	};

	return (
		<div>
			<div className="block mt-2">
				{usersCurrentLoans.length > 0 ? (
					<>
						<h4 className="text-2xl font-bold">Current Loans:</h4>
						<hr />

						{usersCurrentLoans.map((loan) => (
							<div key={loan.book.id}>
								<div className=" flex flex-col justify-center items-center md:flex-row md:justify-evenly my-6">
									<div className="w-1/3 md:w-1/3 container">
										{loan.book?.img ? (
											<img
												src={loan.book?.img}
												width="226"
												height="349"
												alt="Book"
											/>
										) : (
											<img
												src={require('./../../../Images/BooksImages/book-luv2code-1000.png')}
												width="226"
												height="349"
												alt="Book"
											/>
										)}
									</div>
									<div className="card flex mt-5 container md:w-1/2 lg:w-1/3 xl:w-1/4 md:mb-5 shadow-xl">
										<div className="card-body">
											<div className="mt-3">
												<h5 className="font-semibold text-xl">Loan Options</h5>
												{loan.daysLeft > 0 && (
													<p className="text-neutral-500">
														Due in {loan.daysLeft} days.
													</p>
												)}
												{loan.daysLeft === 0 && (
													<p className="text-emerald-700">Due Today.</p>
												)}
												{loan.daysLeft < 0 && (
													<p className="text-rose-500">
														Past due by {loan.daysLeft} days.
													</p>
												)}
												<div className="flex flex-col w-5/6 md:w-3/4 mx-auto mt-3">
													<button
														onClick={() => handleModal(`${loan.book.id}`)}
														className="btn my-2 border-teal-500 bg-teal-500 hover:bg-teal-500/80 hover:border-teal-500/80 text-white"
													>
														Manage Loan
													</button>
													<Link
														to={`/search`}
														className="btn my-2 border-teal-500 bg-teal-500 hover:bg-teal-500/80 hover:border-teal-500/80 text-white"
													>
														Search more books?
													</Link>
												</div>
											</div>
											<hr />
											<p className="mt-3">
												Help others find their next adventure by reviewing your
												loan.
											</p>
											<Link
												to={`/checkout/${loan.book.id}`}
												className="btn mt-2 w-5/6 md:w-3/4 mx-auto border-neutral-500 bg-neutral-500 hover:bg-neutral-500/80 hover:border-neutral-500/80 text-white"
											>
												Leave a review
											</Link>
										</div>
									</div>
								</div>
								<hr />
								<dialog id={`${loan.book.id}`} className="modal">
									<LoansModal
										usersCurrentLoans={loan}
										returnBook={returnBook}
									/>
								</dialog>
							</div>
						))}
					</>
				) : (
					<>
						<h3 className="mt-3">Currently no loans</h3>
						<Link
							to={`/search`}
							className="btn border-teal-500 bg-teal-500 hover:bg-teal-500/80 hover:border-teal-500/80 text-white"
						>
							Search for a new book
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default Loans;

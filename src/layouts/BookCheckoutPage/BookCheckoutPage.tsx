import { useEffect, useState } from 'react';
import BookModel from '../../models/BookModel';
import { fetchBook } from '../utils/API';

const BookCheckoutPage = () => {
	const [book, setBook] = useState<BookModel>();
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState(null);

	const bookId = window.location.pathname.split('/')[2];

	useEffect(() => {
		const query = `/${bookId}`;

		fetchBook(query)
			.then((singleBook) => {
				setBook(singleBook);
				setIsLoading(false);
			})
			.catch((error) => {
				setIsLoading(false);
				setHttpError(error.message);
			});
	}, []);

	return (
		<div>
			<div>BookCheckoutPage</div>;
		</div>
	);
};

export default BookCheckoutPage;
